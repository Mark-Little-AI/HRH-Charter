# CHARTER — Homepage Handoff (for Codex)

This folder is the **approved homepage design**. Build it into the live site at `localhost:2000`,
matching layout, type, spacing and copy exactly. Below the hero is the part to (re)build; the hero
itself matches the already-approved above-the-fold.

## Files
- `Charter - Homepage.html` — the page markup (semantic, section-by-section).
- `charter-home.css` — the full stylesheet. **All design tokens live in `:root` at the top.**
- `assets/` — every image/logo the page references (see inventory below). Copy these into the
  site's asset pipeline and keep the same filenames, or update the `src`/`url()` paths.

## How to hand to Codex
1. Copy this whole `Charter Homepage/` folder into the repo (e.g. `design/charter-homepage/`).
2. Point Codex at it with a prompt like:
   > "Rebuild the homepage to match `design/charter-homepage/Charter - Homepage.html` +
   > `charter-home.css` exactly. Port the markup into our component structure, move the
   > tokens in `:root` into our theme, and wire `assets/` into our pipeline. Keep all copy
   > and section order identical. Don't touch the hero treatment — match it."
3. Build section by section (order below); diff each against this file in the browser.

## Design tokens (from `charter-home.css :root`)
- Colours: `--bone #F7F5EF` (page), `--earth #EBDFCC` (alt sections/surfaces),
  `--clay #B05E38` (marks only — diamonds, rules, dividers), `--navy #1E2D3D`
  (logo + product names + headings), `--taupe #7A6E5C` (body text).
- **Colour rule:** colour lives in *marks*, not type. Body = taupe, headings = navy,
  clay is reserved for diamonds/rules/underlines.

## Type
- **Logo:** the CHARTER wordmark is an **image asset** (`assets/charter-wordmark*.png`), not a font.
- **Headings:** Jost 600, title case, no letter-spacing.
- **Body / editorial copy:** Spectral (serif) — ledes, section paragraphs, product copy.
- **Labels / nav / buttons / kickers:** Jost, uppercase, letter-spaced.
- The two "modes": IMAGE sections (full-bleed photo + semi-transparent Jost word) and
  PAPER sections (FT-style 3-column blocks: copy · image · copy).

## Section order (below the hero)
1. Hero — cow photo + cream CHARTER logo + "Better Farmers. Better Land. Better Beef." (already approved)
2. Trust bar — Farmer Owned ◆ Outcomes Based ◆ Proof, Not Promise
3. A new standard — FT block, ghost word "Healthy / Ecosystem", "The shift" list
4. The Signatories — founder/farmer carousel (hover reveals each farmer's quote in Spectral; arrows)
5. Whole Animal. Whole Value. — FT block, ghost word "Whole / Animal", cuts photo + flow
6. The First Drop — 3 product pack shots (Bone Broth, Bull Shot, Biltong) on earth ground
7. Living Certificate — FT block, ghost word "Full / Traceability", scanning photo, "What's measured" rail
8. Newsletter — slim "Support Better Farming" band
9. Footer — logo, "One field at a time.", links, socials

## Asset inventory (`assets/`)
- `charter-wordmark.png` — navy CHARTER logo (header, footer). Transparent bg.
- `charter-wordmark-cream.png` — cream CHARTER logo (hero, over photo).
- `charter-nib-navy.svg` — nib mark (20° angle).
- `highland-cow.png` — hero background.
- `farmers/` — farmer/partner portraits (Belmont, Roots of Nature, Edinvale, Rothiemurchus,
  Dunmaglass, Balnagowen, Munro's, HRH, SAOS).
- `products/new-standard.png` — grazing-at-sunrise (Ecosystem section).
- `products/whole-animal.png` — beef cuts on the bench (Whole Animal section).
- `products/scanning-product.png` — phone scanning a pack (Living Certificate section).
- `products/pack-bonebroth-photo.png`, `pack-bullshot-photo.png`, `pack-biltong-photo.png` — pack shots.

## Still placeholder / to confirm before launch
- Farmer hover quotes are written in-voice — swap for each farmer's real words if available.
- Product prices are intentionally **off** the homepage (they live on the shop/product pages).
- The Living Certificate block is a **light touch** that links to `living-certificate.html`
  (the dedicated page is the next build — make it the strongest page on the site).
