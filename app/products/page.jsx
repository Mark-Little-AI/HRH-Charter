import Image from "next/image";
import { products } from "@/app/data";
import { ProductCard } from "@/components/ProductCard";

export const metadata = {
  title: "Products",
  description: "The first CHARTER drop: Bone Broth, Bull Shot and Biltong from Scottish farms."
};

export default function ProductsPage() {
  return (
    <>
      <section className="products-hero">
        <Image src="/assets/charter-pack.png" alt="CHARTER packed regenerative beef" fill priority sizes="100vw" />
        <div>
          <p className="eyebrow">Products</p>
          <h1>The first drop</h1>
          <p>Bone Broth, Bull Shot and Biltong. Nourishing cuts, proper proof, no fuss.</p>
        </div>
      </section>
      <section className="shop-section">
        <div className="shop-heading">
          <p className="eyebrow">Shop</p>
          <h2>Regenerative meat, one field at a time.</h2>
        </div>
        <div className="shop-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
