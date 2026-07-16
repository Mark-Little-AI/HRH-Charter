import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product, ctaHref, ctaLabel = "View product" }) {
  const href = ctaHref ?? `/products/${product.slug}`;

  return (
    <article className="product-card">
      <Link href={href} className="product-card-image" aria-label={`View ${product.name}`}>
        <Image src={product.image} alt={`${product.name} from CHARTER`} fill sizes="(max-width: 760px) 100vw, 360px" />
      </Link>
      <div>
        <p className="product-name">{product.name}</p>
        <p>{product.short}</p>
        <div className="product-card-footer">
          <span>{product.price}</span>
          <Link className="text-link" href={href}>{ctaLabel}</Link>
        </div>
      </div>
    </article>
  );
}
