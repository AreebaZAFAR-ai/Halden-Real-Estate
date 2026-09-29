import Link from "next/link";
import type { Property } from "@/lib/data/properties";
import { Media } from "@/components/ui/Media";
import { ArrowRight } from "@/components/ui/Icons";
import styles from "./PropertyCard.module.css";

export const cardShapes = ["arch", "corner", "rect", "leaf", "oval", "cornerLeft"] as const;
export type CardShape = (typeof cardShapes)[number];

type PropertyCardProps = {
  property: Property;
  index: number;
  shape?: CardShape;
  sizes?: string;
  className?: string;
};

/** Editorial property entry: a masked photograph with a quiet caption beneath. */
export function PropertyCard({
  property,
  index,
  shape = cardShapes[index % cardShapes.length],
  sizes = "(min-width: 1024px) 28vw, (min-width: 600px) 45vw, 80vw",
  className,
}: PropertyCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")}>
      <Link href={`/properties/${property.slug}`} className={styles.link}>
        <Media image={property.image} sizes={sizes} className={`${styles.media} ${styles[shape]}`} />
        <div className={styles.meta}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.status}>{property.status}</span>
        </div>
        <h3 className={styles.name}>{property.name}</h3>
        <p className={styles.details}>
          {property.location}
          <span aria-hidden="true"> · </span>
          <span className="visually-hidden">, </span>
          {property.type}
        </p>
        <span className={styles.cta}>
          View residence <ArrowRight />
        </span>
      </Link>
    </article>
  );
}
