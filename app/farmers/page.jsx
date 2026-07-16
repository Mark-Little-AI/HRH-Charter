import Image from "next/image";
import Link from "next/link";

const measured = [
  ["Farming System", "Breed, diet, grazing rotation and finishing."],
  ["Farm Biodiversity", "Independent ecological assessment."],
  ["Eating Quality", "Flavour, tenderness and experience."],
  ["Nutrient Density", "What is actually in the food."],
  ["Traceability", "Farm, animal, processor, test, pack."]
];

const commitment = [
  ["Measured outcomes", "Soil, biodiversity, nutrient density."],
  ["Independent verification", "Assessed in the field, every year."],
  ["Proof on the pack", "A record that travels with the food."]
];

const optimisedAssetBase = "/assets/charter-home/optimised";

// Image-to-farm pairing matches the home page carousel.
const foundingGroup = [
  {
    image: `${optimisedAssetBase}/farmer-eric-heath-belmont.webp`,
    region: "Bristol",
    farm: "Belmont Farms",
    name: "Eric Heath",
    role: "Lead applicant · Natural capital & ecology",
    status: "Founding farm",
    who: "Eric Heath",
    quote:
      "We’ve spent years showing that good farming creates value well beyond the carcass. The Charter is the first thing that helps make it visible."
  },
  {
    image: `${optimisedAssetBase}/farmer-jock-gibson-edinvale.webp`,
    region: "Moray",
    farm: "Edinvale Farm",
    name: "Jock Gibson",
    role: "Nuffield Scholar · Macbeths Butchery · Eating quality",
    status: "Founding farm",
    who: "Jock Gibson",
    quote:
      "Britain produces some of the highest quality beef in the world but doesn’t fairly reward farmers. Charter is finally changing that."
  },
  {
    image: `${optimisedAssetBase}/farmer-james-grant-rothiemurchus.webp`,
    region: "Cairngorms",
    farm: "Rothiemurchus Estate",
    name: "James Grant",
    role: "Farm shop · Kitchen · Consumer demonstration",
    status: "Founding farm",
    who: "James Grant",
    imageClassName: "image-shift-left",
    quote:
      "People want to know where their food comes from. We can go one further, and show them what it’s doing for the land."
  },
  {
    image: `${optimisedAssetBase}/farmer-dunmaglass-estate.webp`,
    region: "Inverness-shire",
    farm: "Dunmaglass Estate",
    name: "Scottish founding farm",
    role: "Trial partner",
    status: "Founding farm",
    who: "Dunmaglass Estate",
    quote:
      "Regenerative farming is judged in the field, not the boardroom. If the land’s improving, the record should show it."
  },
  {
    image: `${optimisedAssetBase}/farmer-balnagowen-aberarder.webp`,
    region: "Scotland",
    farm: "Balnagowen & Aberarder",
    name: "Additional trial sites",
    role: "Testing across land types & systems",
    status: "Founding farm",
    who: "Balnagowen & Aberarder",
    quote:
      "No two farms are the same. That’s exactly why the record has to tell the truth about each one."
  },
  {
    image: `${optimisedAssetBase}/farmer-munros-of-dingwall.webp`,
    region: "Dingwall",
    farm: "Munro’s of Dingwall",
    name: "Strategic processing partner",
    role: "Identical slaughter conditions for fair comparison",
    status: "Processing partner",
    who: "Munro’s of Dingwall",
    quote:
      "If you want proper evidence, you need proper controls. Doing it the same way every time gives the data a backbone."
  },
  {
    image: `${optimisedAssetBase}/farmer-hrh.webp`,
    region: "Scotland",
    farm: "Highland Regenerative Hubs",
    name: "Technology & coordination",
    role: "Shared data platform · testing logistics",
    status: "Technology partner",
    who: "Highland Regenerative Hubs",
    quote:
      "The evidence should travel with the food. Make a claim, and let people see what sits behind it."
  },
  {
    image: `${optimisedAssetBase}/farmer-saos.webp`,
    region: "Scotland",
    farm: "Scottish Agriculture Organisation Society",
    name: "Douglas Bowden-Smith",
    role: "ADOPT Project Facilitator",
    status: "Project partner",
    who: "Douglas Bowden-Smith",
    quote:
      "Collect the data properly, share it clearly — practical enough for farmers, credible enough for the market."
  }
];

export const metadata = {
  title: "Founding Farmers",
  description:
    "Meet the founding farmers and partners writing Charter's outcomes-based standard for regenerative meat farming in Britain.",
  openGraph: {
    title: "Founding Farmers | CHARTER",
    description:
      "The people writing the first Charter for regenerative meat farming in Britain.",
    images: [{ url: "/og-charter.png" }]
  }
};

export default function FarmersPage() {
  return (
    <div className="home-below">
      {/* HERO */}
      <section className="hero sub-hero">
        <Image
          src={`${optimisedAssetBase}/farmers-hero-above-fold.webp`}
          className="hero-cow-image"
          alt="Founding farmers with cattle on British upland pasture"
          fill
          priority
          sizes="100vw"
        />
        <div className="sub-hero-inner">
          <span className="kicker">Founding Farmers</span>
          <h1 className="h-caps">The people writing the Charter</h1>
          <p className="sub-hero-sub">
            A group of farmers, butchers, land stewards and technical partners,
            coming together to define a new standard for regenerative meat
            farming in Britain. Measurable, living and shaped by those doing
            the work.
          </p>
          <Link className="hero-shop-button" href="#group">
            Meet the founding group
          </Link>
        </div>
      </section>

      {/* INTRO + WHAT GETS MEASURED */}
      <section className="band">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">Built from the ground up</span>
            <h2 className="h-caps">A British standard, written in the field</h2>
            <p className="dek">
              The founding group spans beef farmers from the Highlands, Moray, the Cairngorms,
              Bristol and beyond.
            </p>
            <p className="dek">
              They’re here because the current system doesn’t reward what makes
              agroecological farming valuable. The Charter changes that, not
              with louder claims but with <strong>verifiable evidence</strong>.
            </p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image
                src={`${optimisedAssetBase}/from-the-ground-up-v2.webp`}
                alt="Regenerative cattle and pasture representing a British standard written in the field"
                fill
                sizes="(max-width: 1020px) 100vw, 540px"
              />
              <div className="scrim" />
              <div className="ghost">
                From the
                <br />
                Ground Up
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <h4>What gets measured</h4>
              <ul className="small-list">
                {measured.map(([title, detail]) => (
                  <li key={title}>
                    <b>{title}</b> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING GROUP */}
      <section className="band earth" id="group">
        <div className="farmers-head">
          <div>
            <span className="kicker">The signatories</span>
            <h2 className="h-caps">Farmers and partners</h2>
          </div>
          <p className="lede">
            Shaped by the people doing the work. As new farms join, they commit
            to the same standards and help strengthen them over time.
          </p>
        </div>
        <div className="fgrid">
          {foundingGroup.map((farmer) => (
            <article className="fcard" key={farmer.farm}>
              <div className="frame">
                <Image
                  src={farmer.image}
                  className={farmer.imageClassName ?? undefined}
                  alt={`${farmer.who} — ${farmer.farm}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 360px"
                />
                <div className="photo-scrim" />
                <div className="quote">
                  <div className="qmark">&ldquo;</div>
                  <p>{farmer.quote}</p>
                  <div className="who">{farmer.who}</div>
                </div>
              </div>
              <div className="meta">
                <div className="region script">{farmer.region}</div>
                <div className="farm">{farmer.farm}</div>
                <div className="name">{farmer.name}</div>
                <div className="role">{farmer.role}</div>
                <div className="status">{farmer.status}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEXT COHORT */}
      <section className="band">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">Next cohort</span>
            <h2 className="h-caps">Interested in joining?</h2>
            <p className="dek">
              We’re looking for farmers already practising regenerative farming
              and who want to be rewarded fairly for it.
            </p>
            <p className="dek">
              If you’re finishing cattle agroecologically on grass and forage,
              or working toward it, we’d like to hear from you.
            </p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image
                src={`${optimisedAssetBase}/open-gate-join-movement.webp`}
                alt="Open gate leading into regenerative farmland"
                fill
                sizes="(max-width: 1020px) 100vw, 540px"
              />
              <div className="scrim" />
              <div className="ghost">
                Join our
                <br />
                Movement
              </div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <h4>The commitment</h4>
              <ul className="small-list">
                {commitment.map(([title, detail]) => (
                  <li key={title}>
                    <b>{title}</b> {detail}
                  </li>
                ))}
              </ul>
            </div>
            <Link className="link-u" href="#register" style={{ marginTop: "28px" }}>
              Register your interest
            </Link>
          </div>
        </div>
      </section>

      {/* REGISTER INTEREST */}
      <section className="band earth" id="register">
        <div className="sec-head">
          <span className="kicker">Register interest</span>
          <h2 className="h-caps">Tell us about your farm</h2>
          <p className="home-first-drop-copy">
            A few details to start the conversation — we’ll follow up directly.
          </p>
        </div>
        <div className="interest-wrap">
          <form className="interest-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              <span>Farm / organisation</span>
              <input type="text" name="organisation" />
            </label>
            <label>
              <span>Location</span>
              <input type="text" name="location" autoComplete="address-level2" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label className="interest-form-wide">
              <span>Tell us briefly about your farming system</span>
              <textarea name="farming-system" rows="6" />
            </label>
            <button className="square-button" type="button">
              Submit interest
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
