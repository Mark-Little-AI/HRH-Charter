import Image from "next/image";
import Link from "next/link";

const pillars = [
  { title: "Soil Health", image: "/assets/living-certificate/soil-health-principles-clean.png", alt: "Soil health principles diagram",
    body: "Indicators of soil improvement tracked over time, the biological foundation of better food." },
  { title: "Biodiversity", image: "/assets/living-certificate/biodiversity-diagram.png", alt: "Biodiversity diagram showing genetic, species and ecosystem diversity",
    body: "Independent ecological assessment of habitats, species richness and resilience." },
  { title: "Nutrient Density", image: "/assets/living-certificate/nutrient-density-lab.png", alt: "Meat sample being tested in a laboratory",
    body: "Laboratory testing of what is actually in the food. A first-of-its-kind dataset for British grass-fed beef." },
  { title: "Eating Quality", image: "/assets/living-certificate/eating-quality-plate.png", alt: "Sliced beef served on a plate",
    body: "Independent assessment of flavour, tenderness and the overall experience on the plate." }
];

const steps = [
  ["Farm", "Breed, grazing, forage and finishing documented through the year."],
  ["Independent measurement", "Biodiversity, nutrient density and eating quality, by specialists."],
  ["Verification", "Results reviewed and linked to the farm and batch."],
  ["Permanent record", "Anchored to a tamper-resistant ledger."]
];

const foundingFarms = [
  ["Belmont Farms", "Bristol"],
  ["Dunmaglass Estate", "Inverness-shire"],
  ["Edinvale Farm", "Moray"]
];

export const metadata = {
  title: "Living Certificate",
  description:
    "Proof, not promise. The Living Certificate measures soil health, biodiversity and nutrient density on Charter farms — every year, independently verified.",
  openGraph: {
    title: "The Living Certificate | CHARTER",
    description:
      "Most food labels tell you what a farmer says they did. The Living Certificate shows what actually happened.",
    images: [{ url: "/og-charter.png" }]
  }
};

export default function LivingCertificatePage() {
  return (
    <div className="home-below">
      {/* HERO */}
      <section className="hero sub-hero">
        <Image src="/assets/scanning-product.png" alt="A Charter pack being scanned to reveal its provenance record" fill priority sizes="100vw" />
        <div className="sub-hero-inner">
          <span className="kicker lc-kicker-rust">The Living Certificate</span>
          <h1 className="h-caps">Proof, not promise.</h1>
          <p className="sub-hero-sub">
            Most labels tell you what a farmer says they did. The Living Certificate shows what
            actually happened, measured every year, independently verified and recorded for good.
          </p>
          <Link className="hero-shop-button" href="#measured">See what we measure</Link>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="band">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">The problem</span>
            <h2 className="h-caps">Most labels reward process, not proof</h2>
            <p className="dek">A farm can tick every approved box and still have degraded soil. Another can rebuild biodiversity and nutrient density through regenerative farming best practices and be paid exactly the same. Buying Charter Beef products changes that and supports better farming practices.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/cow-2.png" alt="Cattle on diverse grassland" fill sizes="(max-width: 1020px) 100vw, 42vw" />
              <div className="scrim" />
              <div className="ghost">Measured<br />Ground</div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <p className="rail-intro">The current system measures what farmers <em>do</em>. It rarely measures what they <strong>create</strong>.</p>
              <h4>The shift</h4>
              <ul className="shiftlist">
                <li>From process to outcomes</li>
                <li>From claims to evidence</li>
                <li>From measured once to every year</li>
                <li>From promises to proof on the pack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GETS MEASURED */}
      <section className="band earth" id="measured">
        <div className="sec-head">
          <span className="kicker">What gets measured</span>
          <h2 className="h-caps">Independent verification</h2>
          <p className="home-first-drop-copy">Every Charter farm is assessed against measurable outcomes every year. As the land improves, the evidence improves and so do the rewards.</p>
        </div>
        <div className="measure-grid">
          {pillars.map((p) => (
            <article className="mcard" key={p.title}>
              <div className="ft-figure">
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 25vw" />
                <div className="scrim" />
              </div>
              <div className="pname">{p.title}</div>
              <p className="pdesc">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="band">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">How it works</span>
            <h2 className="h-caps">Measured. Verified. Published.</h2>
            <p className="dek">Each result is linked directly to the farm and the production batch, then anchored to a tamper-resistant record: a living history of regenerative farming practices.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/scanning-product.png" alt="Scanning a Charter pack to open its record" fill sizes="(max-width: 1020px) 100vw, 42vw" />
              <div className="scrim" />
              <div className="ghost">Verified</div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <h4>The four steps</h4>
              <ul className="small-list">
                {steps.map(([t, d]) => (<li key={t}><b>{t}</b> {d}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING FARMERS */}
      <section className="band earth">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">Founding Farmers</span>
            <h2 className="h-caps">Built with the people doing the work</h2>
            <p className="dek">The Living Certificate is being shaped alongside a growing group of farmers who believe outcomes matter more than labels. Quietly, patiently, one field at a time.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/library/farmer-3.png" alt="Founding farmers with Highland cattle" fill sizes="(max-width: 1020px) 100vw, 42vw" />
              <div className="scrim" />
              <div className="ghost">One Field<br />at a Time</div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <h4>Founding farms</h4>
              <ul className="small-list">
                {foundingFarms.map(([f, loc]) => (<li key={f}><b>{f}</b> {loc}</li>))}
              </ul>
            </div>
            <Link className="link-u" href="/farmers" style={{ marginTop: "28px" }}>Meet the founding farmers</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="band slim">
        <div className="nl">
          <div className="nl-copy">
            <h2 className="h-caps">Join the Quiet Revolution</h2>
            <p>If you&rsquo;d like to follow our progress, join the mailing list below. We&rsquo;ll share occasional updates as we go.</p>
          </div>
          <form className="nl-form">
            <div className="field">
              <label htmlFor="nl-email">Email address</label>
              <input id="nl-email" type="email" placeholder="name@example.com" required />
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </section>
    </div>
  );
}
