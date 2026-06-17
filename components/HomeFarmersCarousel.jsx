"use client";

import { useEffect, useRef, useState } from "react";

export function HomeFarmersCarousel({ farmers }) {
  const carouselRef = useRef(null);
  const startingScrollLeftRef = useRef(0);
  const [canScrollBack, setCanScrollBack] = useState(false);

  const scrollByCard = (direction) => {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector(".fcard");
    if (!carousel || !card) return;

    const step = card.getBoundingClientRect().width + 28;
    carousel.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    startingScrollLeftRef.current = carousel.scrollLeft;

    const updateScrollState = () => {
      setCanScrollBack(carousel.scrollLeft > startingScrollLeftRef.current + 8);
    };

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div className="carousel-wrap">
      <div className="carousel" ref={carouselRef}>
        {farmers.map((farmer) => (
          <article className="fcard" key={`${farmer.farm}-${farmer.name}`}>
            <div className="frame">
              <img src={farmer.image} alt={farmer.alt} />
              <div className="photo-scrim" />
              <div className="quote">
                <div className="qmark">&ldquo;</div>
                <p>{farmer.quote}</p>
                <div className="who">{farmer.who}</div>
              </div>
            </div>
            <div className="meta">
              <div className="region script">{farmer.region}</div>
              <div className="farm">{farmer.farm}</div>
              <div className="name">{farmer.name}</div>
              <div className="role">{farmer.role}</div>
              <div className="status">{farmer.status}</div>
            </div>
          </article>
        ))}
      </div>
      {canScrollBack ? (
        <button className="scroll-arrow scroll-arrow-left" onClick={() => scrollByCard(-1)} aria-label="Scroll back">
          &larr;
        </button>
      ) : null}
      <button className="scroll-arrow" onClick={() => scrollByCard(1)} aria-label="See more farms">
        &rarr;
      </button>
      <div className="carousel-nav">
        <button className="cbtn" onClick={() => scrollByCard(-1)} aria-label="Previous farmers">
          &larr;
        </button>
        <button className="cbtn" onClick={() => scrollByCard(1)} aria-label="More farmers">
          &rarr;
        </button>
      </div>
    </div>
  );
}
