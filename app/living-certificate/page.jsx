import Image from "next/image";
import Link from "next/link";

const pillarCards = [
  {
    title: "Soil Health",
    image: "/assets/library/farmer-8.png",
    body: [
      "Healthy food starts underfoot.",
      "The Living Certificate tracks indicators of soil improvement over time, helping us understand how each farm is rebuilding the biological foundation of food production."
    ]
  },
  {
    title: "Biodiversity",
    image: "/assets/cow-2.png",
    body: [
      "A thriving farm is full of life.",
      "Independent ecological assessments measure biodiversity outcomes and help track how habitats, species richness and ecological resilience improve over time."
    ]
  },
  {
    title: "Nutrient Density",
    image: "/assets/wagyu-collage.png",
    body: [
      "Food should nourish.",
      "Independent laboratory testing measures nutrients within the food itself, creating one of the first datasets of its kind for British grass-fed beef."
    ]
  },
  {
    title: "Eating Quality",
    image: "/assets/farmer-1.png",
    body: [
      "Good food should taste exceptional.",
      "Independent eating-quality assessments evaluate flavour, tenderness and overall eating experience, ensuring the food performs on the plate as well as on the land."
    ]
  }
];

const timeline = [
  {
    title: "Farm",
    body: "Breed, grazing system, forage, pasture management and finishing protocols are documented throughout the year."
  },
  {
    title: "Independent Measurement",
    body: "Specialist partners measure biodiversity, nutrient density and eating quality using recognised methodologies."
  },
  {
    title: "Verification",
    body: "The results are reviewed and linked directly to the individual farm and production batch."
  },
  {
    title: "Permanent Record",
    body: "Each result is recorded through Charter's digital infrastructure, creating a transparent and tamper-resistant history of improvement."
  }
];

export const metadata = {
  title: "Living Certificate",
  description:
    "Proof, not promise. The Living Certificate measures soil health, biodiversity and nutrient density on Charter farms.",
  openGraph: {
    title: "The Living Certificate | CHARTER",
    description:
      "Most food labels tell you what a farmer says they did. The Living Certificate shows what actually happened.",
    images: [{ url: "/og-charter.png" }]
  }
};

export default function LivingCertificatePage() {
  return (
    <>
      <section className="lc-hero" id="proof">
        <Image src="/assets/scanning-product.png" alt="A product being scanned to show provenance records" fill priority sizes="100vw" />
        <div className="lc-hero-copy">
          <p className="eyebrow">The Living Certificate</p>
          <h1>Proof, not promise.</h1>
          <p className="lc-subheadline">
            Most food labels tell you what a farmer says they did. The Living Certificate shows what actually happened.
          </p>
          <p>
            Every Charter farm is measured annually for the outcomes that matter: soil health, biodiversity, and nutrient density. The results are independently verified, permanently recorded, and linked directly to the food you buy.
          </p>
          <div className="lc-actions">
            <Link className="underlined-button" href="#four-pillars">See the proof</Link>
            <Link className="underlined-button" href="#founding-farmers">Meet the farmers</Link>
          </div>
        </div>
      </section>

      <section className="lc-editorial-split">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>The problem with food labels.</h2>
        </div>
        <div className="lc-copy-stack">
          <p>Most certifications reward process.</p>
          <p>Tick the right boxes. Follow the approved practices. Receive the label.</p>
          <p>But a farm can follow every approved process and still have degraded soil.</p>
          <p>Another farm can restore biodiversity, improve nutrient density, and build healthier land year after year without receiving any additional reward.</p>
          <p>The current system measures what farmers do.</p>
          <p>It rarely measures what they create.</p>
          <p>For the farmers rebuilding Britain's food system from the soil up, that's a problem.</p>
          <blockquote>
            <p>A farmer restoring biodiversity and finishing cattle on diverse grassland is often paid exactly the same as a farmer producing beef in a conventional intensive system.</p>
          </blockquote>
        </div>
      </section>

      <section className="lc-statement-section">
        <p className="eyebrow">Something different</p>
        <h2>An outcomes-based system.</h2>
        <p className="lc-big-statement">The Living Certificate measures results, not intentions.</p>
        <div className="lc-short-lines">
          <p>Every Charter farm is assessed against measurable outcomes.</p>
          <p>Not once.</p>
          <p>Every year.</p>
          <p>The result is a living record of progress that grows alongside the farm itself.</p>
          <p>As the land improves, the evidence improves.</p>
          <p>And the reward improves too.</p>
        </div>
      </section>

      <section className="lc-pillars-section" id="four-pillars">
        <div className="section-heading">
          <p className="eyebrow">The four pillars</p>
          <h2>What gets measured.</h2>
        </div>
        <div className="lc-pillar-grid">
          {pillarCards.map((card) => (
            <article key={card.title} className="lc-pillar-card">
              <div className="lc-pillar-image">
                <Image src={card.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div>
                <h3>{card.title}</h3>
                {card.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lc-timeline-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Measured. Verified. Published.</h2>
        </div>
        <ol className="lc-timeline">
          {timeline.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="lc-charter-section">
        <div className="lc-charter-image">
          <Image src="/assets/scanning-product.png" alt="A tamper-resistant product record shown on a phone" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div>
          <p className="eyebrow">The foundation</p>
          <h2>The Charter.</h2>
          <p>The Living Certificate begins with a promise.</p>
          <p>Not a marketing promise.</p>
          <p>A public commitment.</p>
          <p>The Charter forms the foundation of the system and is permanently anchored in the genesis block of the Living Certificate infrastructure.</p>
          <p>It sets out the principles that guide every farm, every measurement and every claim we make.</p>
          <p>Because trust is earned through transparency.</p>
          <p>Not branding.</p>
          <Link className="underlined-button" href="#proof">Read the Charter</Link>
        </div>
      </section>

      <section className="lc-evidence-section">
        <p className="eyebrow">From farm to fork</p>
        <h2>Follow the evidence.</h2>
        <div className="lc-short-lines">
          <p>Every measurement.</p>
          <p>Every assessment.</p>
          <p>Every batch.</p>
          <p>Connected from farm to final product.</p>
          <p>The Living Certificate creates a direct line between the people producing food and the people eating it.</p>
          <p>A claim only moves if the evidence moves with it.</p>
        </div>
        <blockquote>
          <p>Food you can trust. Land you can name.</p>
        </blockquote>
      </section>

      <section className="lc-farmers-section" id="founding-farmers">
        <div className="lc-wide-image">
          <Image src="/assets/farmer-2.png" alt="A farmer with Highland cattle in Scotland" fill sizes="100vw" />
        </div>
        <div className="lc-farmers-copy">
          <p className="eyebrow">Founding Farmers</p>
          <h2>Founding Farmers</h2>
          <p>The Living Certificate is being built alongside a growing group of farmers who believe that outcomes matter more than labels.</p>
          <p>These are the people doing the work.</p>
          <p>Quietly.</p>
          <p>Patiently.</p>
          <p>One field at a time.</p>
          <Link className="square-button lc-square-button" href="/farmers">Meet the Founding Farmers</Link>
          <p className="lc-supporting">Interested in becoming part of the next cohort? Learn more on the Farmers page.</p>
        </div>
      </section>

      <section className="lc-final-cta">
        <p className="eyebrow">One field at a time</p>
        <h2>Join the Quiet Revolution.</h2>
        <div className="lc-short-lines">
          <p>The future of food isn't a promise.</p>
          <p>It's measurable.</p>
          <p>It's visible.</p>
          <p>And it's already happening.</p>
          <p>One field at a time.</p>
        </div>
        <div className="lc-actions">
          <Link className="underlined-button" href="/products">Shop Charter</Link>
          <Link className="underlined-button" href="/farmers">Learn about our Farmers</Link>
        </div>
      </section>
    </>
  );
}
