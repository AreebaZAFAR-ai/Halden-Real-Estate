"use client";

import { useId, useState } from "react";
import type { Service } from "@/lib/data/services";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Media } from "@/components/ui/Media";
import { PlusIcon } from "@/components/ui/Icons";
import styles from "./ServicesAccordion.module.css";

export function ServicesAccordion({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ol className={styles.list}>
      {services.map((service, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={service.slug} className={styles.item} data-open={isOpen ? "" : undefined} data-reveal>
            <h3 className={styles.heading}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.title}>{service.title}</span>
                <PlusIcon className={styles.icon} />
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel} inert={!isOpen}>
              <div className={styles.panelInner}>
                <div className={styles.copy}>
                  <p className={styles.summary}>{service.summary}</p>
                  <ArrowLink href={`/services/${service.slug}`}>Learn more</ArrowLink>
                </div>
                <Media image={service.image} sizes="(min-width: 1024px) 14vw, 40vw" className={styles.image} reveal={false} />
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
