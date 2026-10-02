import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Property management, tenant and owner care, financial stewardship, maintenance and advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        topLabel
        title="Everything a well‑kept property needs."
        lead="One accountable team for the whole life of your home — from daily care to long-term planning."
        image="modernHouse"
        split
        small
      />

      <section className={`theme-light ${styles.sectionTight}`} data-nav-theme="light" aria-labelledby="services-list">
        <div className="container">
          <div className={`grid ${styles.head}`}>
            <SectionLabel className={styles.headLabel}>What we do</SectionLabel>
            <h2 id="services-list" className={styles.headTitle} data-reveal>
              Five disciplines, one point of contact
            </h2>
          </div>
          <ServicesIndex services={services} />
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
