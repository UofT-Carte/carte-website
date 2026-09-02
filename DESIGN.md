---
name: Carte
description: The public site of the Centre for Analytics and Artificial Intelligence Engineering at UofT Engineering. A neural network under white paper, in the University's own colours.
colors:
  uoft-blue: "#1e3765"
  uoft-blue-900: "#12244a"
  uoft-blue-500: "#3e5a8f"
  uoft-blue-80: "#4b5f84"
  secondary-blue: "#007894"
  secondary-blue-dark: "#006279"
  white: "#ffffff"
  cool-gray: "#d0d1c9"
  cool-gray-50: "#e7e8e4"
  cool-gray-25: "#f3f4f2"
  accent-yellow: "#f1c500"
  accent-cool-blue: "#6fc7ea"
  accent-teal: "#00a189"
  accent-purple: "#6d247a"
  accent-warm-red: "#dc4633"
  accent-fuchsia: "#ab1368"
  accent-dark-green: "#0d534d"
  accent-light-green: "#8dbf2e"
  success: "#0d6b4c"
  success-bg: "#e6f2e5"
  warning: "#8a4b00"
  warning-bg: "#fcebcc"
  danger: "#dc2626"
  danger-bg: "#fee2e2"
typography:
  display:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(44px, 6.2vw, 76px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(36px, 5vw, 60px)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.5vw, 42px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.55
  body:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
  meta:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  check: "4px"
  chip: "6px"
  input: "8px"
  lg: "12px"
  panel: "16px"
  card: "20px"
  cta: "24px"
  pill: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "28": "112px"
components:
  button-primary:
    backgroundColor: "{colors.uoft-blue}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.secondary-blue}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.uoft-blue}"
    rounded: "{rounded.pill}"
    padding: "12px 30px"
  button-ghost-hover:
    backgroundColor: "{colors.cool-gray-25}"
    textColor: "{colors.uoft-blue}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.uoft-blue}"
    rounded: "{rounded.card}"
    padding: "24px"
  panel-quiet:
    backgroundColor: "{colors.cool-gray-25}"
    textColor: "{colors.uoft-blue}"
    rounded: "{rounded.panel}"
    padding: "24px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.uoft-blue-900}"
    typography: "{typography.small}"
    rounded: "{rounded.input}"
    padding: "10px 16px"
  badge:
    backgroundColor: "{colors.cool-gray-25}"
    textColor: "{colors.uoft-blue}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  door-chip:
    backgroundColor: "{colors.uoft-blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "10px 18px"
  band-inverse:
    backgroundColor: "{colors.uoft-blue}"
    textColor: "{colors.white}"
    padding: "80px 0"
  inverse-cta:
    backgroundColor: "{colors.uoft-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.cta}"
    padding: "40px"
---

# Design System: Carte

## Overview

**Creative North Star: "One Node Lights the Network"**

Carte is the applied AI centre of UofT Engineering, and its promise is that one relationship reaches the whole network: more than a hundred faculty across eight departments, seven hundred graduate students and postdocs, and the partners who work with them. The site makes that literal. Under every page sits a neural network drawn on a 24px lattice, each node seeded with two to four connections to its neighbours. It rests at 6% U of T Blue on white, and wherever the reader's cursor lands, activation spreads outward through the connections, four hops deep, decaying as it goes, then fading. Touch one node and its neighbourhood lights up. That is the positioning, animated.

Everything above the network is institutional, plainspoken and alive. The colours are the University of Toronto's own: U of T Blue for structure, Secondary Blue for anything that responds, white and Cool Gray 2 for everything neutral, and the official accents kept to pinpricks. Photography is Carte's real rooms and people in natural light, photojournalistic, never stock. Surfaces are flat white separated by hairlines and by full bands of U of T Blue; there are no shadows, no gradients, no tints of the primary. The voice says one thing per sentence and ends its headlines with a period.

The density is calm and columnar: a 1280px rail, sections of 80px and 112px, three-up card sets, body copy capped at 36rem. Nothing decorates. The network is the only thing that moves, and it moves only where the reader is.

**Key Characteristics:**
- A live neural network under white, U of T Blue at 6%, activated by the cursor, four hops of spreading connections, inverting to blue on long scrolls
- U of T Blue structural, Secondary Blue responsive, white and Cool Gray 2 neutral; no cream, no grey ramp, no primary tints
- Real photography of Carte's rooms and people, photojournalistic and in daylight
- Flat white surfaces, 1px hairlines, full U of T Blue bands for sectioning
- Host Grotesk alone; 800 for display and h1, 700 below; sentence case except labels
- Accents as 7px dots and 2px underlines, never as fills

## Colors

The University of Toronto's palette applied without additions: one structural blue, one responsive blue, the official neutrals, and accents at the scale of punctuation.

### Primary
- **U of T Blue** (#1e3765, PMS 655): headings, primary buttons, the impact band, the closing block, the footer, the students door chip, and body copy. It must be present in every composition, and it is never tinted below 80%.
- **U of T Blue 900** (#12244a): the strongest text, h1 to h4 and input values. A shade, not a tint.
- **U of T Blue 500** (#3e5a8f): muted copy, card descriptions, the lead under a heading.
- **U of T Blue 80** (#4b5f84): the 80% tint, the University's floor for the primary. Metadata, help text, placeholders, and input borders at rest, where it gives 6.5:1 on white.

### Secondary
- **Secondary Blue** (#007894, PMS 633): the one colour that responds. Links, hover on buttons and cards, the active route, focus rings, the partners door chip. **Secondary Blue Dark** (#006279) for link hover.

### Tertiary
- **Accent Yellow** (#f1c500): the dot in the partners and students chips; the 2px underline under every door link.
- **Accent Cool Blue** (#6fc7ea): the dot in the faculty chip.
- **Accent Dark Green** (#0d534d): the faculty chip fill, the one accent used as a surface, at chip size only.
- **Teal, Purple, Warm Red, Fuchsia, Light Green** (#00a189, #6d247a, #dc4633, #ab1368, #8dbf2e): reserved for charts, callouts and social, at 80%, 50% or 25% where a tint is needed.

### Neutral
- **White** (#ffffff): the page canvas, cards, stat tiles on blue. The canvas is painted on `html` only so the network shows through.
- **Cool Gray 2** (#d0d1c9, PMS Cool Gray 2): the official neutral. Dashed empty-state borders and dividers where a full-strength line is wanted.
- **Cool Gray 50** (#e7e8e4): the hairline. Card borders, table rules, the header rule once scrolled, text selection.
- **Cool Gray 25** (#f3f4f2): quiet panels, icon tiles, the warm band on partnerships, badge and tag backgrounds, ghost button hover.
- **Feedback** (success #0d6b4c, warning #8a4b00, danger #dc2626 with their pale backgrounds): form states only; the University has no feedback palette, so these are Carte's and stay off marketing surfaces.

### Named Rules
**The Ink Rule.** U of T Blue is the only structural colour. A surface that is not white, Cool Gray 25 or U of T Blue needs a reason written beside it.
**The Eighty Rule.** U of T Blue is never tinted below 80%. Quiet panels are Cool Gray 25, not a blue wash.
**The Pinprick Rule.** Accents are 7px dots and 2px underlines. An accent filling anything larger than a chip is off-brand.
**The Paper Rule.** The page colour lives on `html`, never on `body`. A background on `body` hides the network.

## Typography

**Display Font:** Host Grotesk (with system-ui, sans-serif)
**Body Font:** Host Grotesk (same family)
**Label Font:** Host Grotesk, 700, uppercase, 0.1em tracking

**Character:** One grotesk at two weights. Display and h1 at 800 with tracking down to -0.03em make the headline the design; everything else is 700 or lighter and never tighter than -0.02em. Carte sets body copy in U of T Blue rather than the University's black, a deliberate deviation that keeps the page monochrome in the primary.

### Hierarchy
- **Display** (800, clamp(44px, 6.2vw, 76px), 1.02): reserved; the home h1 uses Headline.
- **Headline** (800, clamp(36px, 5vw, 60px), 1.06): page h1, a full sentence with a period, left-aligned in a 48rem column.
- **Section** (700, clamp(28px, 3.5vw, 42px), 1.15): h2, centred with a 42rem subtitle; the home page's closing line is set at this size.
- **Title** (700, 24px, 1.25) and **Subtitle** (700, 18px, 1.3): h3 and h4, card headings.
- **Lead** (500, 20px, 1.55): hero and section intros.
- **Body** (400, 16px, 1.65): paragraphs at 36rem maximum, about 65 to 75 characters.
- **Small** (500, 14px, 1.5): metadata and help; the door pitch at 15px/500.
- **Label** (700, 12px, 0.1em, uppercase): badges, chips, table heads. The only uppercase on the site.
- **Meta** (500, 13px, 1.5): card duration lines, testimonial quotes, monospace figures.

### Named Rules
**The Role Class Rule.** Headings are sized by role class (`carte-h1` to `carte-h4`), never by tag.
**The Sentence Rule.** Sentence case everywhere except labels. Headlines end with a period.

## Layout

A single 1280px content rail with 16px, 24px and 32px gutters at the three breakpoints. Sections are 80px tall, 112px for major ones from `lg`. Page heroes are left-aligned in a 48rem column with 80px to 96px of top padding; the home hero is shorter so the three door cards land inside a 900px viewport at 1440. Section headings are centred with a 42rem subtitle. Card sets are three-up at 32px gap, four-up for the home cards, and 320px fixed cards in horizontal carousels whose arrows hide when every card fits. The door row is a three-column grid from 768px and stacks below. Sectioning is done by full-width U of T Blue bands and, sparingly, Cool Gray 25 bands; never by shadow. The header is the only sticky element, 96px tall, transparent at the top and solid white with a hairline once scrolled. Body copy caps at 36rem. Below 640px, doors stack chip over pitch over link.

## Elevation & Depth

Flat. There are no shadows; the shadow tokens exist as `none`. Depth comes from three things: the network showing through the white between cards, the 1px Cool Gray 50 hairline, and U of T Blue bands that invert a whole section. The scrolled header is opaque white with a hairline rather than translucent, so it reads the same over the network and over a blue band.

### Named Rules
**The Hairline Rule.** Elevation is a 1px Cool Gray 50 hairline or nothing. A card that needs more separation gets more space, not a shadow.
**The Band Rule.** When a section must feel different, it goes to U of T Blue with white text. Two bands never touch.

## Shapes

Cards are 20px, panels and icon tiles 16px, the closing block 24px, inputs 8px, small chips 6px, buttons and badges full pills. Borders are 1px, with 2px reserved for the ghost button and the yellow door underline. The home hero photograph is masked in a random organic shape whose eight radii are regenerated per page load between 30% and 70%; every other photograph is a flat rounded rectangle. Checkboxes are 4px squares, radios circles. Arrows are the text arrow (→); the University asks for a stemmed arrow rather than a caret on the web, and this is it.

## Components

Exact, institutional, one colour moves. Controls rest in U of T Blue and white; only Secondary Blue changes, on hover, focus and the active route.

### Buttons
- **Shape:** full pill (9999px)
- **Primary:** U of T Blue fill, white text, 700 at 16px, 14px 32px; hover fills Secondary Blue over 300ms
- **Ghost:** transparent with a 2px U of T Blue border, 600 at 16px, 12px 30px; hover fills Cool Gray 25
- **On blue:** white fill with U of T Blue text, or a ghost with a 60% white border
- **Busy:** stays enabled at 70% opacity with `aria-busy`; never disabled while focused
- **Focus:** 2px Secondary Blue outline at 3px offset; white on blue

### Arrow links
- **Style:** 600 at 15px in U of T Blue, the text arrow (→) after a label that names the destination, 24px minimum height; hover Secondary Blue. Pills never carry the arrow.

### Badges and chips
- **Badge:** label type in U of T Blue on Cool Gray 25, pill, 4px 12px
- **Door chip:** label type in white on U of T Blue (students), Secondary Blue (partners) or Dark Green (faculty), a 7px accent dot before the text, a full-width header bar on its door card

### Cards / Containers
- **Corner Style:** 20px
- **Background:** white; white stat tiles on blue
- **Shadow Strategy:** none
- **Border:** 1px Cool Gray 50, Secondary Blue on hover
- **Internal Padding:** 24px
- **Anatomy:** tag, heading, body, arrow link pinned to the bottom; the icon sits beside the heading, not above it

### Quiet panels
- **Style:** Cool Gray 25 fill, 16px radius, 24px padding, optional hairline; for eligibility notes, key dates and the two-column fact grids

### Inputs / Fields
- **Style:** white, 1px U of T Blue 80 border, 8px radius, 14px text, 10px 16px; a 14px/600 label in U of T Blue 900 above, 12px help in U of T Blue 80 below
- **Focus:** Secondary Blue border plus a 2px Secondary Blue outline at 2px offset
- **Error:** danger border and outline; the message lives in a `role="status"` line that stays in the DOM

### Navigation
- **Style:** Training, Partnerships, Students, Faculty as 16px/500 links in U of T Blue, plus a U of T Blue Contact pill; the U of T Engineering signature at left (crest below 1280px) beside a hairline and the Carte wordmark
- **Active / hover:** Secondary Blue text with a 2px underline that scales in from the left
- **Mobile:** hamburger opens a solid white sheet under the header with the same links and a full-width Contact pill; Escape closes and returns focus

### The network (signature)
A fixed, viewport-sized canvas behind the page draws the field in page space: 1.5px nodes on a 24px lattice at 6% U of T Blue on white, two to four seeded connections per node within three cells. Cursor proximity within 60px activates nodes, activation spreads up to four hops through the connections at 0.55 decay, lines draw at up to 18% opacity, and everything fades at 0.08 per frame. The frame loop runs only while something changes. Under reduced motion the field is static. On the home page the field interpolates to U of T Blue with white nodes between 75% and 80% of scroll.

### Doors (signature)
Three equal white cards under the home hero, one per audience: a chip header bar, one line of what that audience does with Carte at 15px/500, and an arrow link with a 2px yellow underline. The chip colour names the door.

### Closing block
A U of T Blue block at 24px radius, centred, with an 800 heading, a muted white paragraph at 48ch, and a white primary pill beside a ghost pill. On the home page the heading is at section size.

## Do's and Don'ts

### Do:
- **Do** paint the canvas white on `html` only, so the network stays visible.
- **Do** keep U of T Blue structural and Secondary Blue for everything that responds.
- **Do** take every neutral from white, Cool Gray 2 and its 50% and 25% tints.
- **Do** section with full U of T Blue bands, and use Cool Gray 25 for quiet panels.
- **Do** end headlines with a period and keep everything but labels in sentence case.
- **Do** use the text arrow (→) as the link affordance and pills for actions.
- **Do** cap body copy at 36rem and keep hairlines at 1px.
- **Do** mark every decorative inline SVG `aria-hidden="true"` and take new glyphs from Heroicons v1 outline at 2px.

### Don't:
- **Don't** tint U of T Blue below 80%, or use a blue wash as a surface.
- **Don't** use cream, beige or a grey ramp; they are not in the University's palette.
- **Don't** add shadows, gradients, duotone or blur; the one fade is the carousel edge to transparent.
- **Don't** use stock or AI-generated imagery; only real Carte rooms and people.
- **Don't** put a background on `body`, or any opaque layer between the network and the content.
- **Don't** track headings tighter than -0.03em or use a second typeface.
- **Don't** invent a statistic to fill a stat tile.
- **Don't** use exclamation marks or emoji anywhere.
