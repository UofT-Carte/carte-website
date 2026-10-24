// Newsletter subscribe forms (hero and contact page). One handler for every
// form marked data-subscribe: posts to /api/subscribe, reports the outcome in
// the form's live region, and keeps keyboard focus inside the form.
const TIMEOUT_MS = 10000;
const SUCCESS = "You're subscribed. Thank you.";
const ERROR = 'Something went wrong. Please try again or email us at carte@utoronto.ca';

document.querySelectorAll<HTMLFormElement>('form[data-subscribe]').forEach((form) => {
  const fields = form.querySelector<HTMLElement>('[data-subscribe-fields]');
  const status = form.querySelector<HTMLElement>('[data-subscribe-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!fields || !status || !button) return;
  let busy = false;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy) return;
    busy = true;
    // Stay enabled while busy: disabling a focused button drops focus to <body>.
    button.setAttribute('aria-busy', 'true');
    button.textContent = 'Subscribing…';
    status.textContent = '';
    status.classList.remove('carte-status--error', 'carte-status--success');

    const data = new FormData(form);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          email: data.get('email'),
          firstName: data.get('first_name'),
          lastName: data.get('last_name'),
          organization: data.get('organization'),
          academicUnit: data.get('academic_unit'),
          affiliationTypes: data.getAll('affiliation'),
        }),
      });
      if (!res.ok) throw new Error(`subscribe failed: ${res.status}`);
      status.textContent = SUCCESS;
      status.classList.add('carte-status--success');
      status.tabIndex = -1;
      status.focus();
      fields.hidden = true;
      button.hidden = true;
    } catch {
      status.textContent = ERROR;
      status.classList.add('carte-status--error');
    } finally {
      clearTimeout(timer);
      busy = false;
      button.removeAttribute('aria-busy');
      if (!button.hidden) button.textContent = 'Subscribe';
    }
  });
});
