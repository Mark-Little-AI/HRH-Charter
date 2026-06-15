import { pillars } from "@/app/data";
import Image from "next/image";

export function CertificatePanel() {
  return (
    <section className="certificate-panel" aria-labelledby="certificate-title">
      <div>
        <p className="eyebrow">Living Certificate</p>
        <h2 id="certificate-title">Proof, not promise.</h2>
        <p className="large-copy">
          Every Charter farm receives a Living Certificate: a continuously updated record of measurable outcomes, connected directly to the food itself and visible on the pack.
        </p>
        <p>
          The permanent record sits underneath the experience. The point is not the technology. The point is proof that travels with the product.
        </p>
      </div>
      <div className="certificate-image" aria-label="Living Certificate scan preview">
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
