import { LaunchSignupButton, LaunchSignupCard } from "@/components/LaunchSignupTrigger";

export const metadata = {
  title: "Field Notes",
  description: "Field Notes from Charter: plain-English writing on regenerative farming, soil, cattle and the record behind the food."
};

const notes = [
  {
    href: "#",
    image: "/assets/charter-home/blog/soil-health.png",
    alt: "Seedlings in dark soil at sunrise",
    meta: "Soil · 6 min read",
    title: "What we actually measure when we measure soil",
    excerpt: "Organic matter, structure, life in the ground. The numbers behind a healthy field.",
    avatar: "/assets/charter-home/blog/thomas-slattery.png",
    author: "Thomas Slattery"
  },
  {
    href: "#",
    image: "/assets/charter-home/blog/whole-animal.png",
    alt: "Beef carcasses hanging in a chill room",
    meta: "Beef · 5 min read",
    title: "Whole animal, and why a butcher thinks in carcasses",
    excerpt: "Where value sits across the animal, and how using more of it changes the maths for a farm.",
    avatar: "/assets/charter-home/farmers/caroline-grindrod.png",
    author: "Caroline Grindrod"
  },
  {
    href: "#",
    image: "/assets/charter-home/products/scanning-product.png",
    alt: "Scanning a Charter pack",
    meta: "The record · 4 min read",
    title: "What happens when you scan the pack and blockchain immutability",
    excerpt: "The evidence that travels with the food, and who checks it before it reaches you.",
    avatar: "/assets/charter-home/blog/henry-rowlands.png",
    author: "Henry Rowlands"
  }
];

export default function BlogPage() {
  return (
    <div className="blog-index">
      <section className="blog-head" data-screen-label="Field Notes">
        <div className="blog-head-inner">
          <span className="eyebrow">Blog</span>
          <h1>Field Notes</h1>
        </div>
      </section>

      <section className="blog-band tight" data-screen-label="Featured">
        <article className="blog-feature">
          <LaunchSignupCard className="blog-feature-shot" ariaLabel="Read: Latest Regenerative Farming Trends in Somerset">
            <img src="/assets/charter-home/blog/regen-somerset.png" alt="Cattle grazing across rolling Somerset pasture" />
          </LaunchSignupCard>
          <div>
            <span className="kicker">Field Notes</span>
            <h2>Latest Regenerative Farming Trends in Somerset</h2>
            <div className="blog-byline">
              <img className="blog-avatar" src="/assets/charter-home/giles-hayward.png" alt="Giles Hayward" />
              <div className="blog-who">Giles Hayward<span>Author</span></div>
            </div>
            <p className="blog-excerpt">A plain-English look at how soil, grass, cattle and records can work together — and why measuring outcomes, not intentions, changes what good farming is worth.</p>
            <LaunchSignupButton className="link-u">Read the note</LaunchSignupButton>
          </div>
        </article>
      </section>

      <section className="blog-band earth tight" data-screen-label="More notes">
        <div className="sec-head">
          <span className="kicker">More field notes</span>
          <h2 className="h-caps">From the farms</h2>
        </div>
        <div className="blog-notes">
          {notes.map((note) => (
            <LaunchSignupCard className="blog-note" ariaLabel={`Read: ${note.title}`} key={note.title}>
              <div className="blog-note-shot"><img src={note.image} alt={note.alt} /></div>
              <div className="blog-meta">{note.meta}</div>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
              <div className="blog-byline">
                <img className="blog-avatar" src={note.avatar} alt={note.author} />
                <div className="blog-who">{note.author}<span>Author</span></div>
              </div>
            </LaunchSignupCard>
          ))}
        </div>
      </section>
    </div>
  );
}
