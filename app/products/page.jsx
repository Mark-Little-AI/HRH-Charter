import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";

export const metadata = {
  title: "Shop",
  description: "The first products from Charter: Bone Broth, Bull Shot and Biltong. Regenerative meat, one field at a time."
};

const shopProducts = [
  {
    name: "Bone Broth",
    price: "£39.99",
    image: "/assets/charter-home/products/pack-bonebroth-approved.svg",
    alt: "Charter Bone Broth pouch",
    description: "Made from beef bones simmered slowly over many hours, creating a rich stock with depth of flavour and natural collagen."
  },
  {
    name: "Bull Shot",
    price: "£9.99",
    image: "/assets/charter-home/products/pack-bullshot-cutout.png",
    alt: "Charter Bull Shot box",
    description: "A savoury beef drink made from slow-cooked stock. Warming and restorative, on its own or as part of a meal.",
    box: true
  },
  {
    name: "Biltong",
    price: "£9.99",
    image: "/assets/charter-home/products/pack-biltong-cutout.png",
    alt: "Charter Biltong pouch",
    description: "Air-dried beef with a firm bite and deep, savoury flavour, made from carefully selected cuts."
  }
];

export default function ProductsPage() {
  return (
    <div className="shop-page">
      <section className="shop-hero" data-screen-label="Hero">
        <Image
          className="shop-hero-image"
          src="/assets/charter-home/products/shop-hero.png"
          alt="Charter beef marbling and cattle on the hill"
          fill
          priority
          sizes="100vw"
        />
        <div className="shop-hero-scrim" />
        <div className="shop-hero-inner">
          <span className="kicker-light">Products</span>
          <h1>The first drop</h1>
          <p>Bone Broth, Bull Shot and Biltong — the first products from Charter.</p>
        </div>
      </section>

      <section className="shop-band" id="shop" data-screen-label="Products">
        <div className="shop-head">
          <span className="eyebrow">Shop</span>
          <h2>Regenerative meat,<br />one field at a time.</h2>
        </div>

        <div className="shop-product-grid">
          {shopProducts.map((product) => (
            <article className="shop-product-card" key={product.name}>
              <div className="shop-pack">
                <img
                  className={product.box ? "shop-pack-image is-box" : "shop-pack-image"}
                  src={product.image}
                  alt={product.alt}
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
