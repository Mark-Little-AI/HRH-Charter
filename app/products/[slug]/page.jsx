import { notFound } from "next/navigation";
import { products } from "@/app/data";
import { ProductPage } from "@/components/ProductPage";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) return {};

  return {
    title: product.name,
    description: `${product.name} from CHARTER. Regenerative meat from Scottish farms, verified one field at a time.`,
    openGraph: {
      title: `${product.name} | CHARTER`,
      description: product.short,
      images: [{ url: product.image }]
    }
  };
}

export default async function ProductRoute({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return <ProductPage product={product} related={products.filter((item) => item.slug !== slug)} />;
}
