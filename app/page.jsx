import Image from "next/image";
import Link from "next/link";
import { article, products } from "@/app/data";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterForm } from "@/components/SiteShell";
import { ProductCard } from "@/components/ProductCard";

const measuredPillars = [
  {
    title: "Farming System",
    text: "Breed, diet, grazing, liveweights and finishing protocol."
  },
  {
    title: "Biodiversity",
    text: "Independent assessment of habitats, species richness and ecological outcomes."
  },
  {
    title: "Soil Health",
    text: "Field evidence that shows whether the biological foundation is improving."
  },
  {
    title: "Nutrient Density",
    text: "Laboratory testing to understand what is actually in the food."
  },
  {
    title: "Eating Quality",
    text: "Flavour, tenderness and eating experience measured with the same seriousness as yield."
  },
  {
    title: "Traceability",
    text: "A record linking farm, animal, processor, test data and final product."
  }
];

const wholeAnimalProducts = ["Bone Broth", "Bullshot", "Biltong", "Tallow", "Liver Capsules", "Nutritional Supplements"];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-institutional">
        <Image src="/assets/cow-hero-3.png" alt="Highland cow in a Scottish landscape" fill priority sizes="100vw" />
        <div className="hero-copy hero-copy-investor" aria-labelledby="home-hero-title">
          <div className="hero-title-block">
            <h1 id="home-hero-title" className="home-hero-title">
              <span>Better Farmers.</span>
              <span>Better Land.</span>
              <span>Better Beef.</span>
            </h1>
          </div>
          <div className="hero-support-block">
            <p className="hero-subheadline">
              A farmer owned food company building the first outcomes based standard for regenerative meat.
            </p>
            <p className="hero-proof-line">Measured in the field. Visible on the pack.</p>
            <div className="hero-actions investor-actions">
              <Link className="square-button" href="/living-certificate">Explore the Living Certificate</Link>
              <Link className="underlined-button hero-link" href="/products">Shop the First Drop</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="values-strip trust-bar" aria-label="CHARTER trust signals">
        <span>Farmer Owned</span><i /><span>Outcomes Based</span><i /><span>Proof, Not Promise</span>
      </section>

      <section className="editorial-section section-block founding-argument">
        <div>
          <p className="eyebrow">Why Charter Exists</p>
          <h2>Why Charter Exists</h2>
        </div>
        <div className="editorial-copy">
          <p>For decades, farmers have largely been rewarded for yield, weight and commodity value. They have rarely been rewarded for rebuilding biodiversity, improving soil health, producing more nutrient dense food or creating exceptional eating quality.</p>
          <p>The farmers creating the greatest long term value for society are often not the farmers receiving the greatest economic reward. Charter exists to correct that misalignment through measurement, ownership and markets.</p>
          <blockquote>
            <p>The future of food should be measured, not marketed.</p>
          </blockquote>
        </div>
      </section>

      <section className="charter-standard-section">
        <div className="charter-standard-image">
          <Image src="/assets/farmer-1.png" alt="Scottish farmer with Highland cattle" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div>
          <p className="eyebrow">The Charter</p>
          <h2>A New Standard For Regenerative Meat</h2>
          <div className="editorial-copy">
            <p>The Charter is a public commitment written by farmers, processors, scientists, butchers, land stewards and practitioners. It defines what good looks like, not as a marketing claim, but as a measurable standard.</p>
            <p>The founding Charter will be permanently recorded within the genesis block of the system's trust infrastructure. The purpose is not technological. The purpose is institutional: the original commitment remains visible as the standard evolves.</p>
          </div>
          <Link className="underlined-button" href="/charter">Read The Charter</Link>
        </div>
      </section>

      <section className="living-proof-section" aria-labelledby="living-proof-title">
        <div className="living-proof-intro">
          <p className="eyebrow">Living Certificate</p>
          <h2 id="living-proof-title">Proof, Not Promise.</h2>
          <p>
            Every participating farm builds a living record of measurable outcomes. The evidence travels with the food, from farm record to batch record to final product.
          </p>
          <Link className="underlined-button" href="/living-certificate">Explore The Living Certificate</Link>
        </div>
        <div className="proof-interface" aria-label="Living Certificate preview">
          <div className="proof-scan-card">
            <div className="proof-qr" aria-hidden="true">
              {Array.from({ length: 25 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <div>
              <p className="proof-label">Scan Record</p>
              <h3>CHARTER-LC-001</h3>
              <p>Measured in the field. Visible on the pack.</p>
            </div>
          </div>
          <div className="proof-record-grid">
            <article>
              <p className="proof-label">Farm Record</p>
              <h3>Dunmaglass Trial Cohort</h3>
              <dl>
                <div><dt>Region</dt><dd>Inverness-shire</dd></div>
                <div><dt>System</dt><dd>Grass and forage finished</dd></div>
                <div><dt>Status</dt><dd>Measurement year open</dd></div>
              </dl>
            </article>
            <article>
              <p className="proof-label">Batch Record</p>
              <h3>First Drop</h3>
              <dl>
                <div><dt>Product</dt><dd>Bone broth</dd></div>
                <div><dt>Evidence</dt><dd>Farm, animal, processor, test</dd></div>
                <div><dt>Claim</dt><dd>Moves only with proof</dd></div>
              </dl>
            </article>
          </div>
          <div className="measured-pillars">
            {measuredPillars.map((pillar) => (
              <article key={pillar.title}>
                <span className="diamond" aria-hidden="true" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <ol className="evidence-trail" aria-label="Evidence trail">
            <li>Farm</li>
            <li>Animal</li>
            <li>Processor</li>
            <li>Test</li>
            <li>Product</li>
          </ol>
        </div>
      </section>

      <section className="whole-animal-section section-block">
        <div className="section-heading">
          <p className="eyebrow">Whole animal. Whole value.</p>
          <h2>
            Whole Animal.
            <br />
            Whole Value.
          </h2>
        </div>
        <div className="whole-animal-grid">
          <div className="whole-animal-copy">
            <p>Most food systems concentrate value within a small number of premium cuts.</p>
            <p>Charter creates value across the whole carcass, from prime cuts to bones, fat and offal.</p>
            <p>When more of the animal is used well, farmers earn more, consumers gain access to highly nutritious foods and the system becomes stronger for everyone involved. This principle sits at the heart of the business model.</p>
          </div>
          <div className="value-flow" aria-label="Animal to products to farmer value">
            <div>Animal</div>
            <span aria-hidden="true" />
            <div>Multiple Products</div>
            <span aria-hidden="true" />
            <div>More Farmer Value</div>
          </div>
        </div>
        <div className="whole-product-list">
          {wholeAnimalProducts.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="farmers" className="story-section founding-preview">
        <div className="story-image">
          <Image src="/assets/library/farmer-3.png" alt="Founding farmers with cattle in upland pasture" fill sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="founding-copy">
          <p className="eyebrow">Founding Farmers</p>
          <h2>The People Writing The Charter</h2>
          <p>The future of regenerative meat will not be written in a boardroom. It will be written by farmers, alongside the people who understand soil, livestock, processing, eating quality and the realities of British land.</p>
          <blockquote className="farmer-quote">
            <p>Every farm is different. The standard should be strong enough to measure outcomes, and flexible enough to respect the land itself.</p>
          </blockquote>
          <p className="founding-note">Founding farms and partners are contributing field evidence, processing controls, eating quality knowledge and practical judgement to the first Charter.</p>
          <Link className="underlined-button" href="/farmers">Meet The Founding Farmers</Link>
        </div>
      </section>

      <section id="products" className="section-block first-products-section">
        <div className="section-heading">
          <p className="eyebrow">First Drop</p>
          <h2>The First Drop</h2>
          <p>Food is where the evidence becomes tangible. The first products are designed to turn whole animal value into something people can hold, cook, drink and scan.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} ctaHref="/products" ctaLabel="View products" />
          ))}
        </div>
      </section>

      <section className="section-block field-notes-section">
        <div className="section-heading">
          <p className="eyebrow">Field Notes</p>
          <h2>Field Notes</h2>
          <p>Stories from farms, kitchens and the people rebuilding food from the soil up.</p>
        </div>
        <BlogCard article={article} />
      </section>

      <section className="newsletter-block">
        <p className="eyebrow">Newsletter</p>
        <h2>Join The Quiet Revolution</h2>
        <p>Notes from farms, new products and occasional useful observations. Nothing breathless.</p>
        <NewsletterForm />
      </section>
    </>
  );
}
