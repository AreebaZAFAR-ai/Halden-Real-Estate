import type { ImageKey } from "@/lib/media";
import { Media } from "./Media";
import { SectionLabel } from "./SectionLabel";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: ImageKey;
  /** Symmetrical layout: centred text and a centred, arched photograph. */
  centered?: boolean;
  /** Two columns: text on the left, the photograph on the right. */
  split?: boolean;
  /** With `split`: a smaller square photograph, kept under its native size. */
  small?: boolean;
  /** Show the eyebrow as a centred page heading at the top, in forest green. */
  topLabel?: boolean;
  /** Extra content under the lead — facts, links. */
  children?: React.ReactNode;
};

function TopLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <p className={styles.topLabel}>{children}</p>
    </div>
  );
}

/** Opening of every inner page: a large serif title, a quiet lead, one wide photograph. */
export function PageHero({ eyebrow, title, lead, image, centered, split, small, topLabel, children }: PageHeroProps) {
  if (split) {
    return (
      <section className={`theme-light ${styles.hero}`} data-nav-theme="light">
        {topLabel && <TopLabel>{eyebrow}</TopLabel>}
        <div className={`container ${styles.split}`}>
          <div className={styles.splitText}>
            {!topLabel && <SectionLabel>{eyebrow}</SectionLabel>}
            <h1 className={styles.title}>{title}</h1>
            {lead && <p className={styles.lead}>{lead}</p>}
            {children}
          </div>
          {image && (
            <Media
              image={image}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className={`${styles.media} ${styles.splitMedia} ${small ? styles.splitSmall : ""}`}
            />
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`theme-light ${styles.hero} ${centered ? styles.centered : ""}`} data-nav-theme="light">
      {topLabel && <TopLabel>{eyebrow}</TopLabel>}
      <div className={`container grid ${styles.grid}`}>
        {!topLabel && <SectionLabel className={styles.label}>{eyebrow}</SectionLabel>}
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
          <Media
            image={image}
            sizes="100vw"
            priority
            parallax={centered ? undefined : 6}
            className={styles.media}
          />
        </div>
      )}
    </section>
  );
}
