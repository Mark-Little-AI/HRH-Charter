import Image from "next/image";
import Link from "next/link";
import { HomeFarmersCarousel } from "@/components/HomeFarmersCarousel";

const assetBase = "/assets/charter-home";

const farmers = [
  {
    image: `${assetBase}/farmers/farmer-6.png`,
    alt: "Eric Heath of Belmont Farms",
    quote: "We’ve spent years showing that good farming creates value well beyond the carcass. The Living Certificate is the first thing that actually measures it.",
    who: "Eric Heath",
    region: "Bristol",
    farm: "Belmont Farms",
    name: "Eric Heath",
    role: "Lead applicant · Natural capital & ecology",
    status: "Living Certificate coming soon"
  },
  {
    image: `${assetBase}/farmers/caroline-grindrod.png`,
    alt: "Caroline Grindrod of Roots of Nature",
    quote: "Look after the soil and the wildlife, and the farm looks after itself. The trick is being able to prove it.",
    who: "Caroline Grindrod",
    region: "South Lakeland",
    farm: "Roots of Nature",
    name: "Caroline Grindrod",
    role: "Regenerative farming mentor · Trial partner",
    status: "Living Certificate coming soon"
  },
  {
    image: `${assetBase}/farmers/eric-heath.png`,
    alt: "Jock Gibson of Edinvale Farm",
    quote: "Britain produces some of the highest quality beef in the world but doesn’t fairly reward farmers. Charter is finally changing that, that ought to count for something.",
    who: "Jock Gibson",
    region: "Moray",
    farm: "Edinvale Farm",
    name: "Jock Gibson",
    role: "Nuffield Scholar · Macbeths Butchery · Eating quality",
    status: "Living Certificate coming soon"
  },
  {
    image: `${assetBase}/farmers/farmer-4.png`,
    alt: "James Grant of Rothiemurchus Estate with a Highland cow",
    quote: "People want to know where their food comes from. We can go one further, and show them what it’s doing for the land.",
    who: "James Grant",
    region: "Cairngorms",
    farm: "Rothiemurchus Estate",
    name: "James Grant",
    role: "Farm shop · Kitchen · Consumer demonstration",
    status: "Living Certificate coming soon"
  },
  {
    image: `${assetBase}/farmers/farmer-1.png`,
    alt: "Dunmaglass Estate — Highland cattle above the loch",
    quote: "Regenerative farming is judged in the field, not the boardroom. If the land’s improving, the record should show it.",
    who: "Dunmaglass Estate",
    region: "Inverness-shire",
    farm: "Dunmaglass Estate",
    name: "Scottish founding farm",
    role: "Trial partner",
    status: "Living Certificate coming soon"
  },
  {
    image: `${assetBase}/farmers/farmer-8.png`,
    alt: "Balnagowen and Aberarder Estates — cattle on the hill",
    quote: "No two farms are the same. That’s exactly why the record has to tell the truth about each one.",
    who: "Balnagowen & Aberarder",
    region: "Scotland",
    farm: "Balnagowen & Aberarder",
    name: "Additional trial sites",
    role: "Testing across land types & systems",
    status: "Living Certificate coming soon"
  },
  {
    image: `${assetBase}/farmers/munros.png`,
    alt: "Munro’s of Dingwall — Highland cattle above the loch",
    quote: "If you want proper evidence, you need proper controls. Doing it the same way every time gives the data a backbone.",
    who: "Munro’s of Dingwall",
    region: "Dingwall",
    farm: "Munro’s of Dingwall",
    name: "Strategic processing partner",
    role: "Identical slaughter conditions for fair comparison",
    status: "Processing partner"
  },
  {
    image: `${assetBase}/farmers/hrh.png`,
    alt: "The Highland Regenerative Hubs founding group",
    quote: "The evidence should travel with the food. Make a claim, and let people see what sits behind it.",
    who: "Highland Regenerative Hubs",
    region: "Scotland",
    farm: "Highland Regenerative Hubs",
    name: "Technology & coordination",
    role: "Shared data platform · testing logistics",
    status: "Technology partner"
  },
  {
    image: `${assetBase}/farmers/saos.png`,
    alt: "Douglas Bowden-Smith, Scottish Agriculture Organisation Society",
    quote: "Collect the data properly, share it clearly — practical enough for farmers, credible enough for the market.",
    who: "Douglas Bowden-Smith",
    region: "Scotland",
    farm: "Scottish Agriculture Organisation Society (SAOS)",
    name: "Douglas Bowden-Smith",
    role: "ADOPT Project Facilitator",
    status: "Project partner"
  }
];

const products = [
  {
    name: "Bone Broth",
    image: `${assetBase}/products/pack-bonebroth-approved.svg`,
    alt: "Charter Bone Broth kraft pouch",
    href: "/products",
    packClassName: "pack-shot-pouch",
    description: "Made from beef bones simmered slowly over many hours, creating a rich stock with depth of flavour and natural collagen. Simple, nourishing food, made properly."
  },
  {
    name: "Bull Shot",
    image: `${assetBase}/products/pack-bullshot-cutout.png`,
    alt: "Charter Bull Shot kraft box",
    href: "/products",
    packClassName: "pack-shot-box",
    description: "A savoury beef drink made from slow-cooked stock. Warming, restorative and surprisingly satisfying, whether enjoyed on its own or as part of a meal."
  },
  {
    name: "Biltong",
    image: `${assetBase}/products/pack-biltong-cutout.png`,
    alt: "Charter Biltong kraft pouch",
    href: "/products",
    packClassName: "pack-shot-pouch",
    description: "Air-dried beef with a firm bite and deep, savoury flavour. Made from carefully selected cuts and prepared slowly, allowing the quality of the meat to speak for itself."
  }
];

const measuredItems = [
  ["Farming System", "Breed, diet, grazing and finishing."],
  ["Biodiversity", "Independently assessed, in the field."],
  ["Soil Health", "Whether the ground is getting better."],
  ["Nutrient Density", "What’s actually in the food."],
  ["Eating Quality", "Flavour and tenderness, measured."],
  ["Traceability", "Farm, animal, processor, test, pack."]
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-institutional">
        <Image src="/assets/cow-hero-3.png" alt="Highland cow in a Scottish landscape" fill priority sizes="100vw" />
        <div className="hero-copy hero-copy-investor" aria-labelledby="home-hero-title">
          <div className="hero-title-block">
            <img className="hero-wordmark hero-wordmark-image" src="/charter-wordmark.svg" alt="CHARTER" />
            <h1 id="home-hero-title" className="home-hero-title">
              Better Farmers. Better Land. Better Beef.
            </h1>
            <p className="hero-subheadline">
              The new standard for British regenerative meat, defined by those doing the work.
            </p>
            <Link className="hero-shop-button" href="/products">Shop Now</Link>
          </div>
        </div>
      </section>

      <div className="home-below">
        <section className="trust" aria-label="CHARTER trust signals">
          <div className="row">
            <span className="item">Farmer Owned</span>
            <span className="sep" />
            <span className="item">Outcomes Based</span>
            <span className="sep" />
            <span className="item">Proof, Not Promise</span>
          </div>
        </section>

        <section className="band" data-screen-label="A new standard">
          <div className="ft-block">
            <div className="col">
              <span className="kicker">Why Charter exists</span>
              <h2 className="h-caps">Rewarding What Matters</h2>
              <p className="dek">The farmers doing the most for their land and livestock are rarely the ones rewarded for it.</p>
              <p className="dek">Charter is setting a new standard for regenerative meat farming, assessing both how a farm operates and what it produces.</p>
              <p className="dek">For the first time, they are rewarded not only for the food they produce, but for improving soil health, supporting wildlife and increasing nutrient density.</p>
            </div>
            <div className="media figure">
              <div className="ft-figure">
                <img src={`${assetBase}/products/new-standard.png`} alt="Cattle grazing at sunrise on regenerative pasture" />
                <div className="scrim" />
                <div className="ghost">Healthy<br />Ecosystem</div>
              </div>
            </div>
            <div className="col">
              <div className="rail">
                <h4>The shift</h4>
                <ul className="shiftlist">
                  <li>From profits to ecosystem health</li>
                  <li>From corporate greenwash to verified claims</li>
                  <li>From suppliers to farmer-owners</li>
                  <li>From promises to proof on the pack</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="band earth" id="farmers" data-screen-label="Founding Farmers">
          <div className="farmers-head">
            <div>
              <span className="kicker">The Signatories</span>
              <h2 className="h-caps">Written by practitioners of regenerative farming</h2>
            </div>
            <p className="lede">Shaped from the ground up by the people doing the work, the Charter sets out the principles that define regenerative meat farming. As new farms join, they commit to those shared standards and help strengthen them over time. <strong>Explore each farm to hear their story.</strong></p>
          </div>
          <HomeFarmersCarousel farmers={farmers} />
          <div className="sec-head">
            <Link className="link-u" href="/farmers">Meet the founding farmers</Link>
          </div>
        </section>

        <section className="band" data-screen-label="Whole Animal Whole Value">
          <div className="ft-block">
            <div className="col body-col">
              <span className="kicker">Nose to tail</span>
              <h2 className="h-caps">Value across the whole carcass</h2>
              <p>The traditional beef trade is built around a small number of premium cuts, while much of the animal is overlooked.</p>
              <p>This wastes valuable farming resources and leaves significant nutritional value unrealised. Charter takes a whole animal approach, creating value from every part of the animal.</p>
              <p>From tallow and marrow to fat and offal, we make full use of its nutritional richness rather than letting it go to waste.</p>
            </div>
            <div className="media figure">
              <div className="ft-figure">
                <img src={`${assetBase}/products/whole-animal.png`} alt="Beef cuts laid out — from prime steaks to mince, marrow and offal" />
                <div className="scrim" />
                <div className="ghost">Whole<br />Animal</div>
              </div>
            </div>
            <div className="col">
              <p className="stand">When the whole animal is valued, farmers are rewarded more fairly, more nourishing food reaches consumers, and the food system becomes stronger and more resilient for everyone it supports.</p>
              <div className="flow">
                <div className="node"><span>One Animal</span></div>
                <div className="conn" />
                <div className="node"><span>Every Part Valued</span></div>
                <div className="conn" />
                <div className="node"><span>More Farmer Value</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="band earth" id="shop" data-screen-label="The First Drop">
          <div className="sec-head">
            <span className="kicker">What Better Beef Tastes Like</span>
            <h2 className="h-caps">The First Drop</h2>
            <p className="home-first-drop-copy">These are the first products to carry the Charter. Rich in flavour, naturally nutrient dense and made from parts of the animal too often overlooked,<br />they demonstrate what becomes possible when farmers are rewarded for outcomes rather than outputs.</p>
          </div>
          <div className="prod-grid">
            {products.map((product) => (
              <article className="pcard" key={product.name}>
                <div className="pack">
                  <div className="pack-photo">
                    <img className={product.packClassName} src={product.image} alt={product.alt} />
                  </div>
                </div>
                <div className="pname">{product.name}</div>
                <p className="pdesc">{product.description}</p>
                <div className="prow"><Link className="link-u" href={product.href}>View product</Link></div>
              </article>
            ))}
          </div>
        </section>

        <section className="band" id="certificate" data-screen-label="Living Certificate">
          <div className="ft-block">
            <div className="col">
              <span className="kicker">Proof, not promise</span>
              <h2 className="h-caps">The Living Certificate</h2>
              <p className="dek">Through a Living Certificate awarded on measurable outcomes, Charter ensures participating farmers are fairly recognised for regenerative practices.</p>
              <p className="dek">Every Charter product carries a living record of what happened on the farm, creating a transparent way to track improvements in soil health and nutrient density over time.</p>
              <p className="dek">By scanning the Living Certificate, you can connect directly to the farm and see the impact behind the food you buy.</p>
            </div>
            <Link className="media figure" href="/living-certificate" aria-label="Explore the Living Certificate">
              <div className="ft-figure">
                <img src={`${assetBase}/products/scanning-product.png`} alt="Scanning a Charter pack to open its Living Certificate, beside branded packs and boxes" />
                <div className="scrim" />
                <div className="ghost">Real-time<br />Traceability</div>
              </div>
            </Link>
            <div className="col">
              <div className="rail">
                <h4>What’s measured</h4>
                <ul className="small-list">
                  {measuredItems.map(([title, text]) => (
                    <li key={title}><b>{title}</b> {text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="band slim earth" id="newsletter" data-screen-label="Newsletter">
          <div className="nl">
            <div className="nl-copy">
              <h2 className="h-caps">Support Better Farming</h2>
              <p>Sign up for updates from Charter.</p>
              <p>Notes from the farms, news from the land, new products, and opportunities to support better farming across Britain.</p>
            </div>
            <form className="nl-form">
              <div className="field">
                <label htmlFor="nl-email">Email address</label>
                <input id="nl-email" type="email" placeholder="name@example.com" required />
              </div>
              <button type="button">Sign up</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
