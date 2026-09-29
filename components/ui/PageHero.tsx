import type { ImageKey } from "@/lib/media";
import { Media } from "./Media";
import { SectionLabel } from "./SectionLabel";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: ImageKey;
  /** Extra content under the lead — facts, links. */
  children?: React.ReactNode;
};

/** Opening of every inner page: a large serif title, a quiet lead, one wide photograph. */
export function PageHero({ eyebrow, title, lead, image, children }: PageHeroProps) {
  return (
    <section className={`theme-light ${styles.hero}`} data-nav-theme="light">
      <div className={`container grid ${styles.grid}`}>
        <SectionLabel className={styles.label}>{eyebrow}</SectionLabel>
        <h1 className={styles.title}>{title}</h1>
        {(lead || children) && (
          <div className={styles.aside}>
            {lead && <p className={styles.lead}>{lead}</p>}
            {children}
          </div>
        )}
      </div>
      {image && (
        <div className={`container ${styles.mediaWrap}`}>
          <Media image={image} sizes="100vw" priority parallax={6} className={styles.media} />
        </div>
      )}
    </section>
  );
}
