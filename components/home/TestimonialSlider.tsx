"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/data/content";
import { ArrowRight } from "@/components/ui/Icons";
import styles from "./TestimonialSlider.module.css";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

/** One quote at a time, changed only by the reader (no autoplay). */
export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  const go = (step: number) => setActive((i) => (i + step + count) % count);

  return (
    <div className={styles.slider} data-reveal>
      <div className={styles.stage} aria-live="polite">
        {testimonials.map((t, i) => (
          <figure key={t.name} className={styles.slide} data-active={i === active ? "" : undefined} aria-hidden={i !== active}>
            <blockquote className={styles.quote}>
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption className={styles.author}>
              <span className={styles.avatar} aria-hidden="true">
                {initials(t.name)}
              </span>
              <span>
                <span className={styles.name}>{t.name}</span> — <span className={styles.role}>{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.button} onClick={() => go(-1)} aria-label="Previous story">
          <ArrowRight className={styles.flip} />
        </button>
        <span className={styles.count}>
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <button type="button" className={styles.button} onClick={() => go(1)} aria-label="Next story">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
