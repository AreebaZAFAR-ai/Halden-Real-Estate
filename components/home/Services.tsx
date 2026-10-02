import type { ImageKey } from "@/lib/media";
import { services } from "@/lib/data/services";
import { Cusp } from "@/components/ui/Cusp";
import { Media } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServicesAccordion } from "./ServicesAccordion";
import styles from "./Services.module.css";

const arcs: ImageKey[] = ["lanternSteps", "litGardenPath", "timberFacade"];

export function Services() {
  return (
    <section className={`theme-dark ${styles.services}`} data-nav-theme="dark" aria-labelledby="services-title">
      <div className={`container ${styles.frame}`}>
        <span className={styles.guide} aria-hidden="true" />
        <Cusp shape="hourglass" className={styles.cusp} />

        <div className={`grid ${styles.grid}`}>
          <aside className={styles.aside}>
            <SectionLabel>Our services</SectionLabel>
            <div className={styles.arcs} aria-hidden="true">
              {arcs.map((image) => (
                <Media key={image} image={image} sizes="160px" className={styles.arc} decorative />
              ))}
            </div>
          </aside>

          <div className={styles.main}>
            <h2 id="services-title" className={styles.title} data-reveal>
              OUR SERVICES
            </h2>
            <ServicesAccordion services={services} />
          </div>
        </div>
      </div>
    </section>
  );
}
