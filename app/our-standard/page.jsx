import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Soil Health",
    image: "/assets/charter-home/updated-pics-v2/Soil Health.jpg",
    alt: "Soil health in regenerative pasture",
    body: "Indicators of soil improvement tracked over time, forming the biological foundation beneath the claim."
  },
  {
    title: "Biodiversity",
    image: "/assets/charter-home/updated-pics-v2/biodiversity.jpg",
    alt: "Biodiversity on regenerative farmland",
    body: "Ecological assessment of habitats, species richness and resilience, connected to the farm itself."
  },
  {
    title: "Nutrient Density",
    image: "/assets/charter-home/updated-pics-v2/Nutrient Density.jpg",
    alt: "Nutrient density and food quality evidence",
    body: "Laboratory testing used to understand what is actually in the food and how that changes over time."
  },
  {
    title: "Eating Quality",
    image: "/assets/living-certificate/eating-quality-plate.png",
    alt: "Sliced beef served on a plate",
    body: "Assessment of flavour, tenderness and the experience on the plate, because a standard has to matter to the person eating the food."
  }
];

const steps = [
  ["Methodology", "The Living Certificate methodology is built by Caroline Grindrod of Roots of Nature."],
  ["Farm evidence", "Breed, grazing, forage, biodiversity, soil and product evidence are gathered through the year."],
  ["Review", "Results are reviewed and connected to the farm, batch and product."],
  ["Consumer proof", "Charter helps the evidence travel to consumers through product, pack and traceability."]
];

const foundingFarms = [
  ["Roots of Nature", "Methodology lead · Caroline Grindrod"],
  ["Belmont Farms", "Bristol"],
  ["Dunmaglass Estate", "Inverness-shire"],
  ["Edinvale Farm", "Moray"]
];

export const metadata = {
  title: "Our Standard",
  description:
    "Charter is the consumer face of the Living Certificate: British regenerative meat with proof on the pack. The methodology is built by Caroline Grindrod of Roots of Nature, supported by Charter.",
  openGraph: {
    title: "Our Standard | CHARTER",
    description:
      "The Living Certificate methodology is built by Caroline Grindrod of Roots of Nature and supported by Charter as the consumer-facing route to market.",
    images: [{ url: "/og-charter.png" }]
  }
};

export default function LivingCertificatePage() {
  return (
    <div className="home-below">
      <section className="hero sub-hero">
        <Image src="/assets/charter-home/updated-pics-v2/QR Code scanning.png" alt="A Charter QR code being scanned to reveal its provenance record" fill priority sizes="100vw" />
        <div className="sub-hero-inner">
          <span className="kicker lc-kicker-rust">Our Standard</span>
          <h1 className="h-caps">Proof on the pack.</h1>
          <p className="sub-hero-sub">
            Charter is the consumer face of the Living Certificate — British regenerative meat, with the proof on the pack.
          </p>
          <Link className="hero-shop-button" href="#methodology">How it works</Link>
        </div>
      </section>

      <section className="band" id="methodology">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">Roots of Nature methodology</span>
            <h2 className="h-caps">Built by Caroline Grindrod.</h2>
            <p className="dek">The Living Certificate is a methodology built by Caroline Grindrod of Roots of Nature.</p>
            <p className="dek">Charter’s role is to help make the evidence visible in the market: connecting British regenerative meat, fifth-quarter products, product packaging and consumer traceability.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/charter-home/updated-pics-v2/measured-ground.jpg" alt="Measured ground on a regenerative farm" fill sizes="(max-width: 1020px) 100vw, 42vw" />
              <div className="scrim" />
              <div className="ghost">Measured<br />Ground</div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <p className="rail-intro">The current system measures what farmers <em>do</em>. The Living Certificate is designed to help show what farming <strong>creates</strong>.</p>
              <h4>The distinction</h4>
              <ul className="shiftlist">
                <li>Methodology by Roots of Nature</li>
                <li>Supported by Charter</li>
                <li>Evidence connected to farms, batches and products</li>
                <li>Proof made visible on the pack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band earth" id="measured">
        <div className="sec-head">
          <span className="kicker">What gets measured</span>
          <h2 className="h-caps">Evidence before claims</h2>
          <p className="home-first-drop-copy">The standard is designed to connect farming practice, measurable outcomes and the food itself. As the evidence improves, the claim becomes clearer.</p>
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

      <section className="band">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">How it works</span>
            <h2 className="h-caps">Measured. Reviewed. Made visible.</h2>
            <p className="dek">The purpose is not to create another badge. The purpose is to connect the farm, the animal, the product and the evidence in a way consumers can understand.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/charter-home/updated-pics-v2/QR Code scanning.png" alt="Scanning a Charter QR code to open its record" fill sizes="(max-width: 1020px) 100vw, 42vw" />
              <div className="scrim" />
              <div className="ghost">Proof on<br />Pack</div>
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

      <section className="band earth">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">Founding group</span>
            <h2 className="h-caps">Built with the people doing the work</h2>
            <p className="dek">The methodology and market application are being shaped with farmers and practitioners who understand that a claim has to hold up in the field, not just on a label.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/charter-home/updated-pics-v2/farmer with cow.png" alt="Farmer with cow in a regenerative farming field" fill sizes="(max-width: 1020px) 100vw, 42vw" />
              <div className="scrim" />
              <div className="ghost">One Field<br />at a Time</div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <h4>Founding participants</h4>
              <ul className="small-list">
                {foundingFarms.map(([f, loc]) => (<li key={f}><b>{f}</b> {loc}</li>))}
              </ul>
            </div>
            <Link className="link-u" href="/farmers" style={{ marginTop: "28px" }}>Meet the founding farmers</Link>
          </div>
        </div>
      </section>

      <section className="band slim">
        <div className="nl">
          <div className="nl-copy">
            <h2 className="h-caps">Follow the work</h2>
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
