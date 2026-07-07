import Image from "next/image";
import Link from "next/link";
import { HomeFarmersCarousel } from "@/components/HomeFarmersCarousel";

const assetBase = "/assets/charter-home";
const updatedAssetBase = `${assetBase}/updated-pics-v2`;

const farmers = [
  {
    image: `${updatedAssetBase}/eric-heath-belmont-farms.png`,
    alt: "Eric Heath of Belmont Farms",
    quote: "We’ve spent years showing that good farming creates value well beyond the carcass. Our Standard is the first thing that actually measures it.",
    who: "Eric Heath",
    region: "Bristol",
    farm: "Belmont Farms",
    name: "Eric Heath",
    role: "Lead applicant · Natural capital & ecology",
    status: ""
  },
  {
    image: `${assetBase}/farmers/caroline-grindrod.png`,
    alt: "Caroline Grindrod of Roots of Nature",
    quote: "Look after the soil and the wildlife, and the farm looks after itself. The trick is being able to prove it.",
    who: "Caroline Grindrod",
    region: "South Lakeland",
    farm: "Roots of Nature",
    name: "Caroline Grindrod",
    role: "Regenerative farming mentor · Methodology partner",
    status: ""
  },
  {
    image: `${updatedAssetBase}/jock-gibson-edinvale-farm.png`,
    alt: "Jock Gibson of Edinvale Farm",
    quote: "Britain produces some of the highest quality beef in the world but doesn’t fairly reward farmers. Charter is finally changing that, that ought to count for something.",
    who: "Jock Gibson",
    region: "Moray",
    farm: "Edinvale Farm",
    name: "Jock Gibson",
    role: "Nuffield Scholar · Macbeths Butchery · Eating quality",
    status: ""
  },
  {
    image: `${updatedAssetBase}/james-grant-rothiemurchus-estate.png`,
    alt: "James Grant of Rothiemurchus Estate with a Highland cow",
    quote: "People want to know where their food comes from. We can go one further, and show them what it’s doing for the land.",
    who: "James Grant",
    region: "Cairngorms",
    farm: "Rothiemurchus Estate",
    name: "James Grant",
    role: "Farm shop · Kitchen · Consumer demonstration",
    status: ""
  },
  {
    image: `${updatedAssetBase}/dunmaglass-estate.png`,
    alt: "Dunmaglass Estate — Highland cattle above the loch",
    quote: "Regenerative farming is judged in the field, not the boardroom. If the land’s improving, the record should show it.",
    who: "Dunmaglass Estate",
    region: "Inverness-shire",
    farm: "Dunmaglass Estate",
    name: "Scottish founding farm",
    role: "Trial partner",
    status: ""
  },
  {
    image: `${updatedAssetBase}/balnagowen-aberarder.png`,
    alt: "Balnagowen and Aberarder Estates — cattle on the hill",
    quote: "No two farms are the same. That’s exactly why the record has to tell the truth about each one.",
    who: "Balnagowen & Aberarder",
    region: "Scotland",
    farm: "Balnagowen & Aberarder",
    name: "Additional trial sites",
    role: "Testing across land types & systems",
    status: ""
  },
  {
    image: `${updatedAssetBase}/munros-of-dingwall.png`,
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
    description: "Made from beef bones simmered slowly over many hours, creating a rich stock with depth of flavour, natural collagen and a better use for fifth-quarter value."
  },
  {
    name: "Bull Shot",
    image: `${assetBase}/products/pack-bullshot-cutout.png`,
    alt: "Charter Bull Shot kraft box",
    href: "/products",
    packClassName: "pack-shot-box",
    description: "A savoury beef drink made from slow-cooked stock. Warming, restorative and built from the same fifth-quarter logic behind Charter."
  },
  {
    name: "Biltong",
    image: `${assetBase}/products/pack-biltong-cutout.png`,
    alt: "Charter Biltong kraft pouch",
    href: "/products",
    packClassName: "pack-shot-pouch",
    description: "Air-dried beef with a firm bite and deep, savoury flavour. Made as part of a wider commitment to value more of every animal."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-institutional">
        <Image
          src={`${updatedAssetBase}/highland-cattle-hero-above-fold.jpg`}
          alt="Highland cow in a Scottish landscape"
          fill
          priority
          quality={86}
          sizes="100vw"
        />
        <div className="hero-copy hero-copy-investor" aria-labelledby="home-hero-title">
          <div className="hero-title-block">
            <h1 id="home-hero-title" className="home-hero-title">
              The Fifth Quarter, revalued.
            </h1>
            <p className="hero-subheadline">
              Creating more value from every regenerative animal and the overlooked cuts that deserve a place on the plate.
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
                <Image src={`${updatedAssetBase}/cattle-field-healthy-ecosystem.jpg`} alt="Cattle grazing in a healthy regenerative field ecosystem" fill sizes="(max-width: 1020px) 100vw, 42vw" />
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

        <section className="band" data-screen-label="Fifth Quarter Whole Value">
          <div className="ft-block">
            <div className="col body-col">
              <span className="kicker">Fifth Quarter</span>
              <h2 className="h-caps">Value from the overlooked parts of the carcass</h2>
              <p>Charter starts with the fifth quarter: the bones, fat, marrow, offal and other valuable parts of the animal too often treated as byproducts.</p>
              <p>These parts carry nutritional, culinary and economic value. Used properly, they create better returns from the same animal without asking farmers to produce more.</p>
              <p>Bone broth, bull shot and biltong are the first expressions of that approach: products that turn overlooked value into something useful, traceable and commercially viable.</p>
            </div>
            <div className="media figure">
              <div className="ft-figure">
                <img src={`${assetBase}/products/whole-animal.png`} alt="Beef cuts laid out — from prime steaks to mince, marrow and offal" />
                <div className="scrim" />
                <div className="ghost">Fifth<br />Quarter</div>
              </div>
            </div>
            <div className="col">
              <p className="stand">When the fifth quarter is valued properly, farmers are rewarded more fairly, more nourishing food reaches consumers, and fewer useful parts of the animal disappear into low-value channels.</p>
              <div className="flow">
                <div className="node"><span>One Animal</span></div>
                <div className="conn" />
                <div className="node"><span>Fifth Quarter Valued</span></div>
                <div className="conn" />
                <div className="node"><span>Better Farmer Returns</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="band earth" id="shop" data-screen-label="The First Drop">
          <div className="sec-head">
            <span className="kicker">The Fifth Quarter</span>
            <h2 className="h-caps">The First Drop</h2>
            <p className="home-first-drop-copy">The first Charter products begin with the fifth quarter: parts of the animal that are nutrient-rich, useful and too often undervalued.<br />Bone broth, bull shot and biltong show how overlooked value can become better food, better economics and clearer proof for consumers.</p>
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
