# CHARTER — Shop & Blog Handoff (for Codex)

These two pages are approved and built in the same system as the homepage
(`charter-home.css` tokens, Jost 600 headings, Spectral body, bone/earth, clay marks).

## Files
- `products.html` — the **Shop** page (URL: `/products`).
- `blog/index.html` — the **Field Notes / Blog** index (URL: `/blog`).
- Both `<link>` to `charter-home.css` and pull images from `assets/` (blog uses `../`).
- Page-specific CSS lives in a `<style>` block in the `<head>` of each file.

## How to hand to Codex
Same as the homepage: copy this folder into the repo, then:
> "Build `/products` from `products.html` and `/blog` from `blog/index.html`, matching layout,
> type and copy exactly. Reuse the shared theme tokens from `charter-home.css`. Wire the new
> images in `assets/products/` and `assets/blog/` into our pipeline. Keep nav links consistent:
> Living Certificate → /living-certificate, Farmers → /#farmers, Shop → /products, Blog → /blog."

## SHOP (`products.html`)
- Full-bleed hero image `assets/products/shop-hero.png` + "The First Drop" + standfirst.
- "Regenerative meat, one field at a time." section with ◆ Shop kicker.
- 3 product cards (real pack shots, transparent PNG):
  - Bone Broth — £39.99 — `assets/products/pack-bonebroth-photo.png`
  - Bull Shot — £9.99 — `assets/products/pack-bullshot-photo.png` (shown at 84% for box scale)
  - Biltong — £9.99 — `assets/products/pack-biltong-photo.png`
  - Each: name, Spectral description, price + **Add to cart** link. Price rows bottom-aligned.
- Wire **Add to cart** to the real cart action.

## BLOG (`blog/index.html`)
- ◆ Blog kicker + "Field Notes" heading.
- Featured post: image `assets/blog/regen-somerset.png`, title
  "Latest Regenerative Farming Trends in Somerset", byline Giles Hayward · Author
  (`assets/giles-hayward.png`), excerpt, "Read the note" → `proof-from-the-ground-up.html`.
- "More field notes" — 3 cards, each with image, kicker meta, title, excerpt and an author byline:
  - Soil — `assets/blog/soil-health.png` — Thomas Slattery (`assets/blog/thomas-slattery.png`)
  - Beef — `assets/blog/whole-animal.png` — Caroline Grindrod (`assets/farmers/caroline-grindrod.png` — STAND-IN, swap for a headshot)
  - The record — `assets/products/scanning-product.png` — Henry Rowlands (`assets/blog/henry-rowlands.png`)
- Card links are placeholders (`#`) except the featured post — point them at real article URLs.

## Still to confirm before launch
- Caroline Grindrod's blog avatar is a stand-in (her farm photo). Swap for a headshot.
- The three "more notes" articles are placeholders (titles, excerpts, links) — replace with real posts.
- Product `Add to cart` and article links are not wired — connect to cart/CMS.
