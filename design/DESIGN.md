# Charter Design System

Version 2.0

This document is the design source of truth for Charter. It sits beneath `foundation/CHARTER_CONSTITUTION.md` and should be read before changing layout, copy, imagery, interaction or UI components.

Charter is not simply launching a food brand. Charter is building the future standard for regenerative meat: a company owned by farmers, built around measurable outcomes, verified evidence and food that makes those outcomes visible.

## 1. Visual Positioning

Charter should feel like an institution being formed in public.

The visual world is premium, rural, editorial and evidential. It should carry the calm authority of a serious publication, the warmth of British farming, the restraint of premium commerce and the clarity of a trustworthy technical system.

The desired reaction is:

> This is the organisation defining the future of regenerative meat.

Not:

> This is another regenerative food company.

Core feeling:

- Authority
- Trust
- Stewardship
- Proof
- Restraint
- Long term value

Reference territories researched with Refero MCP:

- Rural estate storytelling: The Newt / Daylesford territory, supported by Refero examples with warm estate, gallery and architecture rhythms.
- Premium commerce restraint: Aesop style references, especially specimen-like product presentation, sharp corners, parchment grounds and disciplined grid logic.
- Movement building: Patagonia / Kinfolk territory, especially documentary imagery, human stories and mission carried through action rather than claims.
- Editorial authority: Monocle / Financial Times Weekend / Kinfolk territory, especially confident hierarchy, long reading rhythm and restrained typography.
- Technology credibility: Stripe / Linear / Anthropic territory, especially data clarity, evidence panels, quiet systems thinking and trust through structure.

Do not copy these references. Extract their principles.

## 2. Page Rhythm

The site should read like a long-form editorial system, not a stack of marketing modules.

Use:

- Full viewport or near-full viewport opening moments.
- Large section gaps: 96-128px desktop, 64-88px tablet, 48-72px mobile.
- Wide, calm content containers: 1180-1320px for most sections, wider only for image-led moments.
- Alternating rhythms: hero, trust bar, long editorial text, image-led proof section, data panel, portrait section, commerce section.
- Hairline dividers where needed, never heavy separators.
- Section transitions by spacing, image scale and background tone, not decorative graphics.

Avoid:

- Too many equally weighted sections.
- Dense feature grids near the top.
- Repeating the same two-column layout without variation.
- Cards inside cards.
- Startup-style “feature block, icon, headline, paragraph” monotony.

## 3. Typography Hierarchy

Existing type system:

- Spectral: CHARTER wordmark only, plus rare formal editorial emphasis.
- Jost: headings, body, labels, navigation and interface.

Hierarchy rules:

- H1 should feel iconic and institutional, not shouty.
- H2 should be uppercase, light weight, letterspaced and spacious.
- Body copy should have a considered editorial cadence with proper paragraphs.
- Labels, nav and buttons should be small uppercase Jost with measured tracking.
- Product names and key system nouns may use navy for authority.

Recommended scale:

- Hero H1: clamp around 56-104px desktop, but responsive enough to avoid crowding the cow.
- Section H2: 40-72px desktop.
- Editorial lead: 20-28px desktop.
- Body: 16-19px with generous line-height.
- Labels: 11-13px uppercase.
- Data labels: 11-13px uppercase or compact small caps.

Never use:

- Heavy bold headlines as the default.
- Negative letter spacing.
- Excessive one-line suspense copy.
- All sections at the same type scale.

## 4. Spacing System

Use a calm 8px spacing base.

Recommended tokens:

- 8px: micro gaps, icon-label spacing.
- 16px: small component gaps.
- 24px: card padding, form grouping.
- 32px: internal section rhythm.
- 48px: small section breaks.
- 64px: mobile section padding.
- 96px: desktop section padding.
- 128px: major editorial breaks.

Component rules:

- Cards: 24px internal padding minimum.
- Evidence panels: 24-32px internal padding.
- Hero content: enough vertical space that the Highland cow remains visible and iconic.
- Product grids: generous image area, restrained text density.
- Portrait cards: photography should dominate, copy should breathe.

## 5. Photography Direction

Photography must be documentary, British, real and grounded.

Use:

- Highland cattle as iconic brand imagery.
- Real farmers, direct portraits and working moments.
- Weather, mud, fields, sheds, kitchens, butchers and processing.
- Packaging scans, labels, QR moments and provenance records.
- Product imagery that feels tactile and restrained.

Avoid:

- Generic wellness imagery.
- Abstract environmental stock.
- Sanitised farming.
- Overly polished studio scenes.
- Happy stock portraits.
- Dark, illegible atmospheric crops where the subject cannot be inspected.

Hero rule:

The Highland cow is an asset, not a background texture. Keep the cow centred, face clear, horns allowed to intersect naturally with the composition. Do not place type over the face. If text needs contrast, use subtle image darkening behind typography, not a heavy overlay.

## 6. Motion Rules

Motion should be quiet, useful and editorial.

Use:

- Gentle opacity and vertical reveal.
- Slow image settling or crop transitions where it improves craft.
- Subtle hover underlines and border shifts.
- Calm data panel reveals.

Avoid:

- Parallax gimmicks.
- Bouncy transitions.
- Scroll-jacking.
- Startup-style animated gradients.
- Crypto-style glowing network lines.
- Motion that makes evidence feel less credible.

Always respect `prefers-reduced-motion`.

## 7. Navigation Rules

Navigation should feel like an estate, publication and institution.

Desktop header:

- CHARTER wordmark centred.
- Two links immediately left of the wordmark.
- Two links immediately right of the wordmark.
- Account/sign-in icon aligned on the far right at the same vertical level.
- Header should be quiet, slim and sticky, with light blur and a hairline border.

Primary nav order:

- Shop
- Farmers
- CHARTER wordmark
- Living Certificate
- Blog / Field Notes
- Account icon

Navigation labels should be short. If a section needs explanation, the page should explain it, not the header.

Mobile:

- Preserve the wordmark as the centre of gravity.
- Menu should feel calm and editorial, not app-like.
- Hit targets must be at least 44px.

## 8. Homepage Structure

The homepage must establish Charter as the future standard, not a food shop.

Required hierarchy:

1. Hero: Highland cow, iconic and centred.
2. Trust bar: Farmer Owned, Outcomes Based, Proof, Not Promise.
3. Why Charter Exists: the misalignment between outputs and outcomes.
4. The Charter: public commitment and standard.
5. Living Certificate: proof system and visible evidence.
6. Whole Animal. Whole Value.: business model and farmer economics.
7. Founding Farmers: people writing the Charter.
8. What Makes Charter Different: short evidence-led pillars.
9. First Drop: products as expression of the system.
10. Field Notes: lower prominence.
11. Newsletter.

Hero copy:

> BETTER FARMERS. BETTER LAND. BETTER BEEF.

Support:

> A company owned by farmers, building the first outcomes based standard for regenerative meat.

Supporting line:

> Measured in the field. Visible on the pack.

Hero CTAs:

- Explore the Living Certificate
- Shop the First Drop

Products must remain lower on the page. They are proof points, not the lead.

## 9. Living Certificate UI Rules

The Living Certificate is Charter's flagship mechanism. It should feel like a modern scientific report made legible for the public.

Lead with:

- Proof
- Verification
- Traceability
- Permanent record
- Evidence that travels with food

Do not lead with blockchain.

Primary pillars:

- Farming System
- Biodiversity
- Soil Health
- Nutrient Density
- Eating Quality
- Traceability

UI patterns:

- Scan/QR concept.
- Batch record panel.
- Farm profile card.
- Annual measurement timeline.
- Pillar cards with measured status.
- Evidence trail: farm -> animal -> processor -> test -> product.

The design should be calm, structured and inspectable. Data should never look decorative.

## 10. Farmers Page UI Rules

The Farmers page should feel like Humans of New York for British farming.

Use:

- Large portraits.
- Real names and places.
- Role in Charter creation.
- Short human quotes in italics.
- Living Certificate status.
- Contribution to the standard.

Tone:

- Warm.
- Credible.
- Human.
- Unsentimental.
- Grounded.

Layout:

- Alternating portrait/text editorial rows on desktop.
- Image above text on mobile.
- No decorative badges unless they carry useful status.
- Quotes should feel like testimony, not marketing.

## 11. Charter Page UI Rules

Treat the Charter as a founding document.

It should feel comparable in spirit to:

- a constitution
- a covenant
- a declaration
- a public commitment

The page should use:

- Formal editorial typography.
- Long reading rhythm.
- Numbered principles.
- Restrained proof modules.
- A genesis block explanation only after the institutional purpose is clear.

Do not make it feel like:

- a certification explainer
- a campaign page
- a tech whitepaper
- a manifesto poster

## 12. Product Page UI Rules

Products express the system.

Each product page should connect:

- Product.
- Whole animal value.
- Named farm or farm cohort.
- Living Certificate.
- Traceability.
- Eating quality or nutrient logic.

Product grid:

- Keep commerce restrained and lower in hierarchy.
- Product images should feel like specimens or artefacts, not Shopify tiles.
- Prices should be clear but quiet.
- Product copy should explain why this product exists in the system.

Product detail page:

- Hero image or pack shot.
- Product description.
- Whole animal rationale.
- Ingredients.
- Provenance.
- Living Certificate proof panel.
- Related products.

## 13. Data And Proof Visualisation Rules

Evidence must be visualised with institutional clarity.

Use:

- Tables.
- Timelines.
- Small multiples.
- Progress cards.
- Evidence trails.
- Batch records.
- QR scan states.
- Plain labels.
- Fine borders and restrained colour.

Use clay only as a mark, not as coloured type.

Do not use:

- Crypto network diagrams.
- Neon lines.
- Glowing nodes.
- Dashboard clutter.
- Decorative charts.
- Fake precision.
- Unverified claims.

Every data visualisation should answer:

What was measured?
Who measured it?
When was it measured?
Which farm, animal, batch or product does it relate to?
What changed?

## 14. Things Charter Must Never Look Like

Charter must never look like:

- A generic regenerative food brand.
- A wellness supplement brand.
- A crypto startup.
- A generic Shopify storefront.
- A SaaS landing page with rural photography pasted in.
- A charity campaign.
- A protest brand.
- A farm shop template.
- A luxury brand with no evidence behind it.
- A tech company pretending to be a farm.

Avoid:

- Purple or blue gradients.
- Neon data graphics.
- Over-rounded cards.
- Heavy shadows.
- Decorative blobs.
- Preachy environmental language.
- Excessive icons.
- Stock countryside.
- Product-first hierarchy.
- Blockchain-first messaging.

## Implementation Test

Before approving any section, ask:

> Could this have been written by any regenerative food brand?

If yes, rewrite or redesign it.

The section must make Charter feel like the organisation creating the future standard for regenerative meat.

When in doubt:

Show the work.

Proof, not promise.

One field at a time.
