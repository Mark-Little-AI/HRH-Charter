import { article } from "@/app/data";
import { BlogCard } from "@/components/BlogCard";

export const metadata = {
  title: "Blog",
  description: "Field notes from CHARTER on regenerative farming, proof and real food."
};

export default function BlogPage() {
  return (
    <section className="subpage-section">
      <div className="section-heading">
        <p className="eyebrow">Blog</p>
        <h1>Field notes</h1>
      </div>
      <BlogCard article={article} />
    </section>
  );
}
