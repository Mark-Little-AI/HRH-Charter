import Link from "next/link";

const charterPrinciples = [
  {
    title: "Farmers First",
    text: "Charter is owned by farmers and built to reward the people who create measurable value on the land."
  },
  {
    title: "Outcomes Matter",
    text: "The standard is built around what farming creates: biodiversity, soil health, nutrient density, eating quality and traceability."
  },
  {
    title: "Evidence Travels",
    text: "Claims must stay connected to the farm, animal, batch and product they describe."
  },
  {
    title: "Whole Animal Value",
    text: "A stronger system uses more of the animal well, creating more value for farmers and better food for consumers."
  }
];

export const metadata = {
  title: "The Charter",
  description:
    "The founding public commitment behind Charter's outcomes based standard for regenerative meat.",
  openGraph: {
    title: "The Charter | CHARTER",
    description:
      "A founding document for a measurable, farmer owned standard for regenerative meat.",
    images: [{ url: "/og-charter.png" }]
  }
};

export default function CharterPage() {
  return (
    <>
      <section className="charter-page-hero">
        <p className="eyebrow">The Charter</p>
        <h1>A founding document for measurable farming.</h1>
        <p>
          The Charter is the public commitment beneath Our Standard. It is not a certification badge or a campaign line. It is the standard against which Charter farms, products and claims are expected to stand.
        </p>
      </section>

      <section className="charter-document-section">
        <div className="charter-document-intro">
          <p className="eyebrow">Public commitment</p>
          <h2>What good looks like.</h2>
        </div>
        <div className="editorial-copy">
          <p>The founding Charter is being written with farmers, processors, scientists, butchers and land stewards. Its purpose is simple: define a British standard for regenerative meat that can be measured in practice, not merely described in principle.</p>
          <p>The standard can improve as the evidence improves, but the founding commitment remains visible: useful in a field, credible in a market and clear enough for the person buying the food.</p>
          <blockquote>
            <p>A standard has to be useful in a field, credible in a market and clear enough for the person buying the food.</p>
          </blockquote>
        </div>
      </section>

      <section className="charter-principles-section">
        <div className="section-heading">
          <p className="eyebrow">Founding principles</p>
          <h2>The principles beneath the standard.</h2>
        </div>
        <div className="difference-grid">
          {charterPrinciples.map((principle) => (
            <article key={principle.title}>
              <span className="diamond" aria-hidden="true" />
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lc-final-cta">
        <p className="eyebrow">Our Standard</p>
        <h2>Where the Charter becomes visible.</h2>
        <p className="large-copy">
          Our Standard connects the Charter to an evidence record for each farm, batch and product.
        </p>
        <div className="lc-actions">
          <Link className="underlined-button" href="/our-standard">Explore Our Standard</Link>
          <Link className="underlined-button" href="/farmers">Meet The Founding Farmers</Link>
        </div>
      </section>
    </>
  );
}
