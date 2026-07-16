import Image from "next/image";
import Link from "next/link";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

const pillars = [
  {
    title: "Soil Health",
    image: "/assets/charter-home/optimised/soil-health-card.webp",
    alt: "Soil health in regenerative pasture",
    imageClassName: "measured-evidence-image",
    body: "Indicators of soil improvement tracked over time, forming the biological foundation beneath the claim."
  },
  {
    title: "Biodiversity",
    image: "/assets/charter-home/optimised/biodiversity-card.webp",
    alt: "Biodiversity on regenerative farmland",
    imageClassName: "measured-evidence-image",
    body: "Ecological assessment of habitats, species richness and resilience, connected to the farm itself."
  },
  {
    title: "Nutrient Density",
    image: "/assets/charter-home/optimised/nutrient-density-card.webp",
    alt: "Nutrient density and food quality evidence",
    imageClassName: "measured-evidence-image",
    body: "Laboratory testing used to understand what is actually in the food and how that changes over time."
  },
  {
    title: "Eating Quality",
    image: "/assets/charter-home/optimised/eating-quality-card.webp",
    alt: "Sliced beef served on a plate",
    body: "Assessment of flavour, tenderness and the experience on the plate, because a standard has to matter to the person eating the food."
  }
];

const steps = [
  ["Methodology", "The Regenerative Hubs Standard combines biodiversity measurement, nutrient density analysis and full farm-to-shelf traceability."],
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
    "Charter is the consumer face of the Regenerative Hubs Standard, connecting British regenerative meat, nutrient-rich food and transparent proof from farm to shelf.",
  openGraph: {
    title: "Our Standard | CHARTER",
    description:
      "The Regenerative Hubs Standard combines biodiversity measurement, nutrient density analysis and full farm-to-shelf traceability.",
    images: [{ url: "/og-charter.png" }]
  }
};

export default function LivingCertificatePage() {
  return (
    <div className="home-below">
      <section className="hero sub-hero">
        <Image src="/assets/charter-home/optimised/our-standard-qr-hero.webp" alt="A Charter QR code being scanned to reveal its provenance record" fill priority sizes="100vw" />
        <div className="sub-hero-inner">
          <span className="kicker lc-kicker-rust">Our Standard</span>
          <h1 className="h-caps">Proof on the pack.</h1>
          <p className="sub-hero-sub">
            Charter is the consumer face of the Regenerative Hubs Standard — connecting British regenerative meat, nutrient-rich food and transparent proof from farm to shelf.
          </p>
          <Link className="hero-shop-button" href="#methodology">How it works</Link>
        </div>
      </section>

      <section className="band" id="methodology">
        <div className="ft-block">
          <div className="col">
            <span className="kicker">Roots of Nature methodology</span>
            <h2 className="h-caps">Built through expert collaboration.</h2>
            <p className="dek">The Regenerative Hubs Standard brings together Edacious for nutrient density, SGS for biodiversity measurement and GoTrace (Chainparency) for full farm-to-shelf traceability.</p>
            <p className="dek">Charter makes this evidence visible in the market, helping consumers understand what matters to them while enabling individual farmers and Charter fifth-quarter products to demonstrate ongoing improvements in nature-friendly outcomes and nutrient-rich final products.</p>
          </div>
          <div className="media figure">
            <div className="ft-figure">
              <Image src="/assets/charter-home/optimised/measured-ground.webp" alt="Measured ground on a regenerative farm" fill sizes="(max-width: 1020px) 100vw, 540px" />
              <div className="scrim" />
              <div className="ghost">Measured<br />Ground</div>
            </div>
          </div>
          <div className="col">
            <div className="rail">
              <p className="rail-intro">The current system measures what farmers <em>do</em>. The Living Certificate is designed to help show what farming <strong>creates</strong>.</p>
              <h4>The distinction</h4>
              <ul className="shiftlist">
                <li>Regenerative Hubs Standard</li>
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
                <Image className={p.imageClassName} src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 260px" />
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
              <Image src="/assets/charter-home/optimised/our-standard-qr-hero.webp" alt="Scanning a Charter QR code to open its record" fill sizes="(max-width: 1020px) 100vw, 540px" />
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
              <Image src="/assets/charter-home/optimised/farmer-with-cow.webp" alt="Farmer with cow in a regenerative farming field" fill sizes="(max-width: 1020px) 100vw, 540px" />
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
          <NewsletterSignupForm inputId="our-standard-newsletter-email" source="our-standard-newsletter" />
        </div>
      </section>
    </div>
  );
}
