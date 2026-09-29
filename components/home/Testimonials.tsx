import type { ImageKey } from "@/lib/media";
import { testimonials } from "@/lib/data/content";
import { Media } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialSlider } from "./TestimonialSlider";
import styles from "./Testimonials.module.css";

const circles: ImageKey[] = ["lanternSteps", "limestoneWall", "glassStoneHouse", "archedResidenceDay"];

export function Testimonials() {
  return (
    <section className={`theme-light ${styles.section}`} data-nav-theme="light" aria-labelledby="stories-title">
      <div className={`container grid ${styles.grid}`}>
        <div className={styles.content}>
          <span className={styles.watermark} aria-hidden="true" />
          <SectionLabel>Client stories</SectionLabel>
          <h2 id="stories-title" className={styles.title} data-reveal>
            Confidence built through better management
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>

        <div className={styles.column} aria-hidden="true">
          <div className={styles.columnTrack} data-parallax="12">
            {circles.map((image, i) => (
              <div key={image} className={styles.circleWrap}>
                <Media image={image} sizes="(min-width: 1024px) 30vw, 50vw" className={styles.circle} decorative reveal={false} />
                {i === 1 && <span className={styles.crosshair} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
