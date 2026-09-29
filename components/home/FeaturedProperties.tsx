"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { properties } from "@/lib/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import styles from "./FeaturedProperties.module.css";

/**
 * Residences in our care. On larger screens the section pins and the row of
 * homes travels horizontally with the scroll; on phones it is a swipeable row.
 */
export function FeaturedProperties() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const el = track.current;
      if (!el) return;
      const distance = () => el.scrollWidth - window.innerWidth;

      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress.current) progress.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={section} className={`theme-light ${styles.section}`} data-nav-theme="light" aria-labelledby="featured-title">
      <div ref={track} className={styles.track}>
        <header className={styles.intro}>
          <SectionLabel>Selected residences</SectionLabel>
          <h2 id="featured-title" className={styles.title}>
            Homes we look after
          </h2>
          <p className={styles.lead}>
            A few of the residences in our care — each managed to a calendar written for its materials, its
            setting and the people who live there.
          </p>
          <ArrowLink href="/properties" variant="rule">
            View all properties
          </ArrowLink>
          <div className={styles.progress} aria-hidden="true">
            <span ref={progress} className={styles.progressBar} />
          </div>
        </header>

        <ul className={styles.list}>
          {properties.map((property, i) => (
            <li key={property.slug} className={styles.item}>
              <PropertyCard property={property} index={i} sizes="(min-width: 1024px) 26vw, (min-width: 600px) 45vw, 78vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
