import Image from "next/image";
import { fallbackHeroPlaceholder } from "@/app/image-placeholders";
import { article } from "@/app/data";

export const metadata = {
  title: article.title,
  description: article.excerpt,
  openGraph: {
    title: article.title,
    description: article.excerpt,
    images: [{ url: "/og-charter.png" }]
  }
};

export default function ArticlePage() {
  return (
    <article className="article-page">
      <header className="article-header">
        <p className="eyebrow">Field Notes</p>
        <h1>{article.title}</h1>
        <div className="author-row">
          <Image src={article.avatar} alt="Giles Hayward" width={56} height={56} />
          <span>{article.author}</span>
        </div>
      </header>
      <div className="article-image">
        <Image src={article.image} alt="Highland cattle in a Scottish field" fill priority placeholder="blur" blurDataURL={fallbackHeroPlaceholder} sizes="100vw" />
      </div>
      <div className="article-body">
        <p>
          Regenerative farming gets talked about a lot. Fair enough. The land matters. But talk is cheap, and farmers have heard enough grand claims to fill a shed.
        </p>
        <p>
          CHARTER starts with proof from the ground up: soil health, biodiversity and nutrient density recorded year by year, then linked to the food leaving the farm.
        </p>
        <p>
          The aim is not to make shoppers study a spreadsheet before supper. It is to make the truth easy to find, easy to trust and hard to fiddle with.
        </p>
        <p>
          More detail will follow as the first farms and products come online.
        </p>
      </div>
    </article>
  );
}
