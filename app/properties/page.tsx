import type { Metadata } from "next";
import { properties } from "@/lib/data/properties";
import { PageHero } from "@/components/ui/PageHero";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { CTA } from "@/components/home/CTA";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Properties",
  description: "Residences in our care, and homes currently available to let.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Residences in our care"
        lead="Private homes we manage across Europe — a few of them available to let, all of them looked after to the same standard."
      />
      <section className={`theme-light ${styles.sectionTight}`} data-nav-theme="light" aria-label="Properties">
        <div className="container">
          <PropertyGrid properties={properties} />
        </div>
      </section>
      <CTA title="Would you like us to care for your home?" linkLabel="Talk to us" />
    </>
  );
}
