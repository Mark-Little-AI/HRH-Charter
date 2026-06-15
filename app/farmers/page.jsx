import Image from "next/image";
import Link from "next/link";

const measurementPillars = [
  {
    title: "Farming System",
    text: "Breed, diet, grazing rotation, liveweights and finishing protocol."
  },
  {
    title: "Farm Biodiversity",
    text: "Independent ecological assessment of habitats, species richness and biodiversity outcomes."
  },
  {
    title: "Eating Quality",
    text: "Carcass and eating-quality assessment, including flavour, tenderness and overall eating experience."
  },
  {
    title: "Nutrient Density",
    text: "Laboratory testing to understand what is actually in the food."
  },
  {
    title: "Traceability",
    text: "A tamper-resistant record linking farm, animal, processor, test data and final product."
  }
];

const foundingProfiles = [
  {
    image: "/assets/library/farmer-4.png",
    name: "Belmont Farms",
    location: "Bristol",
    person: "Eric Heath",
    role: "Lead applicant · Natural capital and ecology",
    body: "Belmont Farms is the lead applicant and an English farming business helping coordinate the measurement, reporting and verification methodology across the founding farms.",
    quote:
      "We have spent years trying to show that farming well creates value beyond the carcass. The Charter gives us a way to measure that value properly.",
    status: "Living Certificate coming soon"
  },
  {
    image: "/assets/library/farmer-1.png",
    name: "Dunmaglass Estate",
    location: "Inverness-shire",
    role: "Scottish founding farm · Trial partner",
    body: "Dunmaglass Estate is one of the Scottish founding farms helping test the Charter framework on real land, with real cattle, under real farming conditions.",
    quote:
      "Regenerative farming has to be judged in the field, not in a boardroom. If the land is improving, the standard should be able to show it.",
    status: "Living Certificate coming soon"
  },
  {
    image: "/assets/library/farmer-5.png",
    name: "Edinvale Farm",
    location: "Moray",
    person: "Jock Gibson",
    role: "Nuffield Scholar · Macbeths Butchery · Eating quality lead",
    body: "Jock Gibson brings farming, butchery and eating-quality expertise to the founding Charter group. His work helps connect how cattle are raised with how the beef actually eats.",
    quote:
      "Britain talks a lot about beef, but we still don't properly reward eating quality. If the food tastes better, and the farming system is better, that should count.",
    status: "Living Certificate coming soon"
  },
  {
    image: "/assets/library/farmer-2.png",
    name: "Rothiemurchus Estate",
    location: "Cairngorms",
    person: "James Grant",
    role: "Farm shop · Kitchen · Consumer demonstration",
    body: "Rothiemurchus brings a direct connection between land, food and the people eating it. The estate's farm shop and kitchen help demonstrate how the Charter can be made visible to consumers.",
    quote:
      "People want to know where their food comes from. The Charter helps us go one step further and show what that food is doing for the land.",
    status: "Living Certificate coming soon"
  },
  {
    image: "/assets/library/farmer-6.png",
    name: "Balnagowen and Aberarder Estates",
    location: "Scotland",
    role: "Additional Scottish trial sites",
    body: "Balnagowen and Aberarder Estates contribute additional Scottish trial sites, helping test the Charter across different land types, systems and farming conditions.",
    quote:
      "No two farms are the same. That is exactly why the Living Certificate matters. It records the reality of each place.",
    status: "Living Certificate coming soon"
  },
  {
    image: "/assets/library/farmer-7.png",
    name: "Highland Regenerative Hubs Ltd",
    location: "Scotland",
    role: "Technology and coordination partner",
    body: "Highland Regenerative Hubs coordinates the shared data platform, Edacious testing logistics and Chainparency integration, helping turn field-level evidence into a usable Living Certificate.",
    quote:
      "The point is simple: the evidence should travel with the food. If we make a claim, people should be able to see what sits behind it.",
    status: "Technology partner"
  },
  {
    image: "/assets/library/farmer-8.png",
    name: "Munro's of Dingwall",
    location: "Dingwall",
    role: "Strategic processing partner",
    body: "Munro's of Dingwall processes the trial animals and conventional comparators under identical slaughter conditions, allowing fairer comparison between farming systems.",
    quote:
      "If you want proper evidence, you need proper controls. Processing everything consistently gives the data a stronger backbone.",
    status: "Processing partner"
  },
  {
    image: "/assets/farmer-4.png",
    name: "Douglas Bowden-Smith, SAOS",
    location: "Scotland",
    role: "ADOPT Project Facilitator",
    body: "Douglas Bowden-Smith supports cross-farm data collection, quarterly reporting and dissemination, helping the founding group keep the project rigorous and useful.",
    quote:
      "This only works if the data is collected properly and shared clearly. The Charter needs to be practical enough for farmers and credible enough for the market.",
    status: "Project facilitator"
  }
];

export const metadata = {
  title: "Founding Farmers",
  description:
    "Meet the founding farmers and partners helping write Charter's outcomes-based standard for regenerative meat farming in Britain.",
  openGraph: {
    title: "Founding Farmers | CHARTER",
    description:
      "The people writing the first Charter for regenerative meat farming in Britain.",
    images: [{ url: "/assets/og-charter.png" }]
  }
};

function QuoteBlock({ children }) {
  return (
    <blockquote className="farmers-quote">
      <p>{children}</p>
    </blockquote>
  );
}

function MeasurementPillarCard({ title, text }) {
  return (
    <article className="measurement-card">
      <span aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function FarmerProfileCard({ profile, index }) {
  return (
    <article className={index % 2 ? "farmer-profile is-reversed" : "farmer-profile"}>
      <div className="farmer-profile-image">
        <Image src={profile.image} alt={`${profile.name} portrait`} fill sizes="(max-width: 900px) 100vw, 46vw" />
      </div>
      <div className="farmer-profile-copy">
        <p className="eyebrow">{profile.location}</p>
        <h3>{profile.name}</h3>
        {profile.person ? <p className="farmer-person">{profile.person}</p> : null}
        <p className="farmer-role">{profile.role}</p>
        <p>{profile.body}</p>
        <QuoteBlock>{profile.quote}</QuoteBlock>
        <span className="coming-soon" aria-disabled="true">
          {profile.status}
        </span>
      </div>
    </article>
  );
}

function CTASection() {
  return (
    <section className="farmers-cta-section">
      <div className="farmers-cta-image">
        <Image src="/assets/library/farmer-3.png" alt="Founding farmers with cattle in upland pasture" fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="farmers-cta-copy">
        <p className="eyebrow">Next cohort</p>
        <h2>Interested in joining the next cohort?</h2>
        <p>We are looking for farmers who are already rebuilding soil, biodiversity and food quality — and who want the evidence to count.</p>
        <p>If you are finishing cattle agroecologically on grass and forage, or working toward that system, we would like to hear from you.</p>
        <div className="lc-actions">
          <Link className="square-button" href="#contact">Find out more</Link>
          <Link className="underlined-button" href="#contact">Contact Charter</Link>
        </div>
      </div>
    </section>
  );
}

export default function FarmersPage() {
  return (
    <>
      <section className="farmers-hero">
        <Image src="/assets/library/farmer-3.png" alt="Farmers standing with cattle on British upland pasture" fill priority sizes="100vw" />
        <div className="farmers-hero-copy">
          <p className="eyebrow">Founding Farmers</p>
          <h1>The people writing the Charter.</h1>
          <p className="farmers-subheadline">
            A group of farmers, butchers, land stewards and technical partners are coming together to define a new standard for regenerative meat farming in Britain.
          </p>
          <p>
            The Charter will set out what good looks like — not as a marketing claim, but as a measurable, living standard. It will be anchored in the genesis block of the blockchain infrastructure behind the Living Certificate, so the founding principles cannot be quietly rewritten later.
          </p>
          <div className="lc-actions">
            <Link className="underlined-button" href="/living-certificate">Read about the Living Certificate</Link>
            <Link className="underlined-button" href="#founding-group">Meet the founding group</Link>
          </div>
        </div>
      </section>

      <section className="farmers-intro">
        <div>
          <p className="eyebrow">Built from the ground up</p>
          <h2>A British standard, built from the ground up.</h2>
        </div>
        <div className="lc-copy-stack">
          <p>This starts in Scotland, but it is not only a Scottish project.</p>
          <p>The founding group includes farms and partners from the Highlands, Moray, the Cairngorms, Bristol and other parts of the UK.</p>
          <p>They are coming together because the current system does not reward what makes agroecological farming valuable. It does not properly measure biodiversity, soil health, nutrient density, eating quality or traceability.</p>
          <p>The Charter exists to change that.</p>
          <p>Not with louder claims.</p>
          <p>With better evidence.</p>
          <QuoteBlock>
            Every farm is different. The standard should be strong enough to measure outcomes, and flexible enough to respect the land itself.
          </QuoteBlock>
        </div>
      </section>

      <section className="measurement-section">
        <div className="section-heading">
          <p className="eyebrow">What gets measured</p>
          <h2>Each farm, on its own terms.</h2>
        </div>
        <div className="measurement-grid">
          {measurementPillars.map((pillar) => (
            <MeasurementPillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      <section className="founding-group" id="founding-group">
        <div className="section-heading">
          <p className="eyebrow">Founding group</p>
          <h2>Farmers and partners</h2>
        </div>
        <div className="farmer-profile-list">
          {foundingProfiles.map((profile, index) => (
            <FarmerProfileCard key={profile.name} profile={profile} index={index} />
          ))}
        </div>
      </section>

      <section className="farmers-genesis-section">
        <p className="eyebrow">Genesis block</p>
        <h2>Written into the first block.</h2>
        <div className="lc-short-lines">
          <p>The founding Charter will be anchored in the genesis block of the blockchain infrastructure behind the Living Certificate.</p>
          <p>That means the original principles, founding farms and core standard are part of the permanent record.</p>
          <p>The standard can evolve.</p>
          <p>The founding commitment cannot disappear.</p>
        </div>
        <QuoteBlock>The Charter is not a badge. It is the starting line.</QuoteBlock>
        <Link className="underlined-button" href="/living-certificate">Learn how the Living Certificate works</Link>
      </section>

      <CTASection />

      <section className="interest-form-section" id="contact">
        <div>
          <p className="eyebrow">Register interest</p>
          <h2>Tell us about your farm.</h2>
          <p>This form can be wired up later. For now, it gives us the right shape for farmer interest.</p>
        </div>
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
          <button className="square-button" type="button">Submit interest</button>
        </form>
      </section>
    </>
  );
}
