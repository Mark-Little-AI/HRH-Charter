import { pillars } from "@/app/data";
import Image from "next/image";

export function CertificatePanel() {
  return (
    <section className="certificate-panel" aria-labelledby="certificate-title">
      <div>
        <p className="eyebrow">Our Standard</p>
        <h2 id="certificate-title">Proof on the pack.</h2>
        <p className="large-copy">
          Charter connects farm, batch and product evidence to the food itself, so the proof sits with the pack rather than the promise.
        </p>
        <p>
          The point is not the technology. The point is evidence that can travel with the product and be understood by the person buying it.
        </p>
      </div>
      <div className="certificate-image" aria-label="Proof record scan preview">
        <Image src="/assets/scanning-product.png" alt="A product being scanned to show provenance records" fill sizes="(max-width: 900px) 100vw, 360px" />
      </div>
      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <article key={pillar.title}>
            <span className="diamond" aria-hidden="true" />
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
