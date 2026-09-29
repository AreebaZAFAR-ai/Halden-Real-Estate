import type { Property } from "@/lib/data/properties";
import { PropertyCard } from "./PropertyCard";
import styles from "./PropertyGrid.module.css";

/** Staggered editorial grid — alternate columns sit lower, like a printed spread. */
export function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <ul className={`grid ${styles.grid}`}>
      {properties.map((property, i) => (
        <li key={property.slug} className={styles.item} data-reveal>
          <PropertyCard property={property} index={i} />
        </li>
      ))}
    </ul>
  );
}
