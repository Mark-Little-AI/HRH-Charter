import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";

export const metadata = {
  title: "Shop",
  description: "The first products from Charter begin with the fifth quarter: Bone Broth, Bull Shot and Biltong made from overlooked value across the animal."
};

const shopProducts = [
  {
    name: "Bone Broth",
    price: "£39.99",
    image: "/assets/charter-home/optimised/pack-bonebroth-approved.webp",
    alt: "Charter Bone Broth pouch",
    description: "Made from beef bones simmered slowly over many hours, creating depth, collagen and a better use for a valuable part of the animal."
  },
  {
    name: "Bull Shot",
    price: "£9.99",
    image: "/assets/charter-home/optimised/pack-bullshot-cutout.webp",
    alt: "Charter Bull Shot box",
    description: "A savoury beef drink made from slow-cooked stock: warming, restorative and built from the fifth-quarter logic behind Charter.",
    box: true
  },
  {
    name: "Biltong",
    price: "£9.99",
    image: "/assets/charter-home/optimised/pack-biltong-cutout.webp",
    alt: "Charter Biltong pouch",
    description: "Air-dried beef with a firm bite and deep, savoury flavour, made as part of a wider commitment to value more of every animal."
  }
];

export default function ProductsPage() {
  return (
    <div className="shop-page">
      <section className="shop-hero" data-screen-label="Hero">
        <Image
          className="shop-hero-image"
          src="/assets/charter-home/optimised/shop-hero-v3.webp"
          alt="Charter beef marbling and cattle on the hill"
          fill
          priority
          sizes="100vw"
        />
        <div className="shop-hero-scrim" />
        <div className="shop-hero-inner">
          <span className="kicker-light">Products</span>
          <h1>The first drop</h1>
          <p>Bone Broth, Bull Shot and Biltong — Charter’s first expressions of fifth-quarter value.</p>
        </div>
      </section>

      <section className="shop-band" id="shop" data-screen-label="Products">
        <div className="shop-head">
          <span className="eyebrow">Shop</span>
          <h2>Fifth-quarter value,<br />one animal at a time.</h2>
        </div>

        <div className="shop-product-grid">
          {shopProducts.map((product) => (
            <article className="shop-product-card" key={product.name}>
              <div className="shop-pack">
                <img
                  className={product.box ? "shop-pack-image is-box" : "shop-pack-image"}
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="shop-product-name">{product.name}</div>
              <p className="shop-product-description">{product.description}</p>
              <div className="shop-product-row">
                <span className="shop-price">{product.price}</span>
                <AddToCartButton productName={product.name} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
