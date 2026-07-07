"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { LaunchSignupContext } from "@/components/SiteShell";
import { ProductCard } from "@/components/ProductCard";

export function ProductPage({ product, related }) {
  const [quantity, setQuantity] = useState(1);
  const { openLaunchSignup } = useContext(LaunchSignupContext);

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero-image">
          <Image src={product.lifestyleImage ?? product.image} alt={`${product.name} from CHARTER`} fill priority sizes="(max-width: 900px) 100vw, 52vw" />
        </div>
        <div className="product-buy-box">
          <p className="eyebrow">First Drop</p>
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <p className="large-copy">{product.description}</p>
          <div className="quantity-control" aria-label="Quantity">
            <button onClick={() => setQuantity((value) => Math.max(1, value - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((value) => value + 1)}>+</button>
          </div>
          <button className="underlined-button" onClick={openLaunchSignup}>
            Add to cart
          </button>
        </div>
      </section>
      <section className="detail-grid">
        <article>
          <p className="eyebrow">Ingredients</p>
          <p>{product.ingredients}</p>
        </article>
        <article>
          <p className="eyebrow">Provenance</p>
          <p>{product.provenance}</p>
        </article>
        <article>
          <p className="eyebrow">Proof record</p>
          <p>{product.certificate}</p>
          <Link className="text-link" href="/living-certificate">See Our Standard</Link>
        </article>
      </section>
      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Also from the first drop</p>
          <h2>Related products</h2>
        </div>
        <div className="product-grid">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </section>
    </div>
  );
}
