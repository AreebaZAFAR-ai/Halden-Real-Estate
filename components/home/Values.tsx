"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { values } from "@/lib/data/content";
import { Cusp } from "@/components/ui/Cusp";
import { Media } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./Values.module.css";

/**
 * Pinned storytelling: the photograph and detail image stay in place while the
 * principles scroll past; whichever principle is centred becomes active.
 */
export function Values() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = gsap.utils.toArray<HTMLElement>("[data-value]", list);

    const triggers = items.map((item, i) =>
      ScrollTrigger.create({
        trigger: item,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (self) => self.isActive && setActive(i),
      }),
    );

    const rail = ScrollTrigger.create({
      trigger: list,
      start: "top 55%",
      end: "bottom 55%",
      onUpdate: (self) => {
        if (progress.current) progress.current.style.transform = `scaleY(${self.progress})`;
      },
    });

    return () => {
      triggers.forEach((t) => t.kill());
      rail.kill();
    };
  }, []);

  return (
    <section className={`theme-dark ${styles.section}`} data-nav-theme="dark" aria-labelledby="values-title">
      <div className={`container ${styles.frame}`}>
        <span className={styles.guide} aria-hidden="true" />
        <Cusp shape="hourglass" className={styles.cusp} />

        <div className={`grid ${styles.head}`}>
          <SectionLabel className={styles.label}>Core values</SectionLabel>
          <h2 id="values-title" className={styles.title} data-reveal>
            The principles behind every property we manage
          </h2>
        </div>

        <div className={`grid ${styles.story}`}>
          <div className={styles.stickyMedia} aria-hidden="true">
            {values.map((v, i) => (
              <div key={v.title} className={styles.layer} data-active={i === active ? "" : undefined}>
                <Media image={v.image} sizes="(min-width: 1024px) 30vw, 1px" className={styles.layerMedia} decorative reveal={false} />
              </div>
            ))}
          </div>

          <div className={styles.rail} aria-hidden="true">
            <span ref={progress} className={styles.railFill} />
          </div>

          <ol ref={listRef} className={styles.list}>
            {values.map((v, i) => (
              <li key={v.title} className={styles.item} data-value data-active={i === active ? "" : undefined}>
                <Media image={v.image} sizes="100vw" className={styles.inlineMedia} />
                <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.itemTitle}>{v.title}</h3>
                <p className={styles.itemText}>{v.text}</p>
              </li>
            ))}
          </ol>

          <div className={styles.detail} aria-hidden="true">
            {values.map((v, i) => (
              <div key={v.title} className={styles.layer} data-active={i === active ? "" : undefined}>
                <Media image={v.detail} sizes="(min-width: 1024px) 16vw, 1px" className={styles.layerMedia} decorative reveal={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
