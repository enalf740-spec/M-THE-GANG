---
name: Lereng Asri Rural Tourism
colors:
  surface: '#fef9ee'
  surface-dim: '#dedacf'
  surface-bright: '#fef9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3e8'
  surface-container: '#f2ede3'
  surface-container-high: '#ede8dd'
  surface-container-highest: '#e7e2d7'
  on-surface: '#1d1c15'
  on-surface-variant: '#414940'
  inverse-surface: '#323029'
  inverse-on-surface: '#f5f0e5'
  outline: '#717970'
  outline-variant: '#c0c9be'
  surface-tint: '#2e6a3e'
  primary: '#135229'
  on-primary: '#ffffff'
  primary-container: '#2f6b3f'
  on-primary-container: '#a9e9b2'
  inverse-primary: '#96d5a0'
  secondary: '#43673a'
  on-secondary: '#ffffff'
  secondary-container: '#c1ebb2'
  on-secondary-container: '#476c3e'
  tertiary: '#6e3b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#914f00'
  on-tertiary-container: '#ffd1ae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f2ba'
  primary-fixed-dim: '#96d5a0'
  on-primary-fixed: '#00210b'
  on-primary-fixed-variant: '#125128'
  secondary-fixed: '#c4eeb5'
  secondary-fixed-dim: '#a9d29a'
  on-secondary-fixed: '#002200'
  on-secondary-fixed-variant: '#2c4f24'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#ffb77a'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6d3a00'
  background: '#fef9ee'
  on-background: '#1d1c15'
  surface-variant: '#e7e2d7'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 27px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  label-md:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2.5rem
---

## Brand & Style

The brand personality is earthy, hospitable, and serene, evoking the sensory warmth of rural morning mist, terraced paddy fields, and heartfelt village hospitality. Designed primarily for mobile-first travelers, eco-tourists, and families seeking an authentic weekend retreat, the interface prioritizes approachability, high legibility under varying outdoor light conditions, and effortless access to booking and local guides.

The aesthetic fuses organic warmth with modern mobile clarity:
- **Design Style:** Warm Organic Minimalism. Clean canvas layouts grounded by rich botanical greens, terracotta accents, and soft tactile surfaces.
- **Atmospheric Intent:** Avoid sterile digital minimalism or heavy faux-traditional textures. Depth is achieved via warm cream backdrops, high-contrast typography, and airy layouts that invite exploration at a leisurely, unhurried pace.

## Colors

The palette directly reflects the flora and volcanic soil of the village landscape:

- **Primary (`#2F6B3F` - Forest Canopy Green):** Anchors headers, primary brand presence, navigation bars, and active state indicators.
- **Secondary (`#8DB580` - Young Sprout Green):** Acts as gentle tinting for section backdrops, badge surfaces, subtle borders, and micro-accents.
- **Tertiary (`#D9822B` - Terracotta Clay):** High-priority conversion driver reserved strictly for primary interactive CTAs, booking buttons, price tags, and urgent notifications.
- **Neutral Canvas (`#FAF5EA` - Warm Rice Cream):** Serves as the overarching page canvas background, eliminating harsh stark white glare in favor of sunlit organic warmth.
- **High-Contrast Text (`#2B2A26` - Charcoal Soil):** Deep warm dark neutral applied to all body copy and primary data values to maintain WCAG AAA compliance against cream and white surfaces.
- **Pure White (`#FFFFFF`):** Reserved for elevated interactive cards, bottom sheets, form input fields, and modular panels to provide crisp reading containment against the cream canvas.
- **Utility / WhatsApp Action (`#25D366`):** Dedicated exclusively to direct messaging and immediate host inquiry actions.

## Typography

The typographical pairing strikes an intentional balance between literary village heritage and swift mobile utility:

- **Editorial Headings (Newsreader):** Brings editorial warmth, rustic authority, and human craft to section headers and title displays. Rendered in `#2F6B3F` to establish rhythmic hierarchy throughout the journey.
- **Readable Body & Functional UI (Nunito Sans):** Sized generously at a base of `17px` (`body-lg`) with a relaxed line-height of `1.6` (`27px`) to guarantee high readability outdoors on handheld displays.
- **Interactive Labels:** Buttons consistently utilize `label-lg` (`18px`, bold) for instant recognition during tap gestures.

## Layout & Spacing

A mobile-first fluid layout architecture that smoothly expands into balanced grid structures on wider viewports:

- **Mobile (< 768px):** 4-column fluid layout with an outer canvas edge margin of `1rem` (16px) and gutters of `1rem`. Content flows vertically in single columns, utilizing full-width or inset edge-to-edge modular cards.
- **Tablet (768px – 1024px):** 8-column layout with `2rem` margin and `1.5rem` gutters. Package cards and scenic showcases flow in 2-column configurations.
- **Desktop (> 1024px):** 12-column fixed-max layout capped at `1200px` content container, centered with a minimum `3rem` boundary margin to maintain editorial intimacy.
- **Rhythm & Touch Density:** Component grouping leverages an internal padding standard of `1.5rem` (`space-xl`), ensuring finger targets never cramp adjacent copy.

## Elevation & Depth

Visual hierarchy is maintained through soft daylight ambient layering without harsh digital drop shadows:

- **Canvas Level (Elevation 0):** Background surface in `#FAF5EA`.
- **Card Surface Level (Elevation 1):** `#FFFFFF` surfaces featuring an ultra-diffused, low-opacity warm shadow: `0 4px 20px -2px rgba(43, 42, 38, 0.06)`. This lifts destination cards, homestay listings, and booking blocks gracefully above the cream ground.
- **Floating Interactive Level (Elevation 2):** Sticky mobile navigation bars, filter trays, and bottom booking bars: `0 8px 30px -4px rgba(43, 42, 38, 0.10)`.
- **Modals & Overlays (Elevation 3):** Full-screen image galleries, booking sheets, and date pickers: `0 16px 40px -6px rgba(43, 42, 38, 0.16)`.
- **Borders & Dividers:** Keep structural divisions organic by using a 1px border of `#8DB580` at 20% opacity (`rgba(141, 181, 128, 0.2)`), avoiding heavy lines.

## Shapes

The geometric framework mirrors organic, natural curves without looking like cartoonish bubbles:

- **Base Components (Inputs, Buttons, Badges):** Standardized at `rounded-md` to `rounded-lg` (8px to 12px) to provide a soft, welcoming tactile presence.
- **Content Cards & Media Containers:** Configured strictly between `12px` and `16px` (`rounded-xl` / `rounded-2xl`) with clipped image corners, evoking modern travel editorial prints.
- **Bottom Drawers & Sticky Booking Sheets:** Top left and top right corners rounded to `24px` (`rounded-3xl`) to convey a tucked-in, physical pocket feel on mobile devices.

## Components

### Buttons
- **Primary Action (Book/Reserve):** Solid `#D9822B` with pure white `#FFFFFF` text. Minimum height `56px`, touch area padding `16px 24px`, minimum font size `18px` bold (`label-lg`), border radius `14px`. Hover/Active state shifts subtly to darker amber-earth (`#C27222`).
- **Secondary Action (Explore/Details):** Outline or surface tint. 1.5px border of `#2F6B3F` on transparent background with `#2F6B3F` text, or solid `#8DB580` with 15% opacity surface. Min height `56px`.
- **WhatsApp Action:** Dedicated direct connection button. Solid `#25D366` with `#FFFFFF` bold text and an integrated WhatsApp icon. Min height `56px`.
- **Button Spacing:** Stacks and adjacent groups must maintain at least `12px` (`space-md`+) physical separation to eliminate mis-taps.

### Cards (Homestays, Workshops, Attractions)
- **Container:** `#FFFFFF` background with `16px` border-radius and subtle ambient shadow.
- **Imagery:** 16:9 or 4:3 aspect ratio imagery anchored at the top with a 12px inner corner inset or flush-clipped to the card edge.
- **Price Tag:** Displayed in `#D9822B` using `label-lg` or `headline-sm` to draw immediate, friendly visual prioritization.
- **Tagging:** Pill badges using `#8DB580` at 15% tint with `#2F6B3F` bold label text.

### Chips & Category Filters
- Horizontally scrollable row with `-webkit-overflow-scrolling: touch`.
- **Default State:** Inactive chips have `#FFFFFF` surface, 1px border `rgba(141, 181, 128, 0.3)`, text `#2B2A26`, min-height `44px`, padding `10px 18px`.
- **Selected State:** `#2F6B3F` solid surface with `#FFFFFF` text and subtle warm shadow.

### Input Fields & Selectors
- Background `#FFFFFF` with min-height `56px` to match primary touch standard.
- Border is 1.5px solid `rgba(43, 42, 38, 0.15)`, transitioning to `#2F6B3F` on focus with a `0 0 0 3px rgba(47, 107, 63, 0.15)` outline glow.
- Placeholder text in muted `#2B2A26` at 50% opacity. Label positioned above input using `label-md` in `#2B2A26`.

### Checkboxes & Radio Buttons
- Touch target minimum `48px x 48px` bounding area.
- Unchecked: 2px border in `#8DB580` on pure white surface.
- Checked: Solid `#2F6B3F` fill with white checkmark icon or center dot.

### Sticky Bottom Booking Bar (Mobile Only)
- Fixed at viewport bottom with safe-area padding for mobile home indicators.
- Elevated surface `#FFFFFF` with subtle top shadow `0 -4px 16px rgba(43, 42, 38, 0.06)`.
- Left-aligned price overview with micro-label "Mulai dari" (starting from), paired with a right-aligned full-height `56px` `#D9822B` booking button.