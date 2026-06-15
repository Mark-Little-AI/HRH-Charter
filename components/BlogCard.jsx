import Image from "next/image";
import Link from "next/link";

export function BlogCard({ article }) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${article.slug}`} className="blog-image" aria-label={article.title}>
        <Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 45vw" />
      </Link>
      <div>
        <p className="eyebrow">Field Notes</p>
        <h2>{article.title}</h2>
        <div className="author-row">
          <Image src={article.avatar} alt="Giles Hayward" width={48} height={48} />
          <span>{article.author}</span>
        </div>
        <p>{article.excerpt}</p>
        <Link className="text-link" href={`/blog/${article.slug}`}>Read article</Link>
      </div>
    </article>
  );
}
