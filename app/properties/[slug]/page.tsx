import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/lib/data/properties";
import { PageHero } from "@/components/ui/PageHero";
import { Media } from "@/components/ui/Media";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PropertyCard } from "@/components/property/PropertyCard";
import { CTA } from "@/components/home/CTA";
import styles from "../../inner.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getProperty((await params).slug);
  return property ? { title: property.name, description: property.summary } : {};
}

export default async function PropertyPage({ params }: Props) {
  const property = getProperty((await params).slug);
  if (!property) notFound();

  const index = properties.indexOf(property);
  const next = [1, 2].map((step) => properties[(index + step) % properties.length]);
  const facts = [
    ["Location", property.location],
    ["Type", property.type],
    ["Status", property.status],
    ["Completed", String(property.year)],
    ["Living area", property.area],
    ["Bedrooms", String(property.bedrooms)],
  ];

  return (
    <>
      <PageHero eyebrow={property.location} title={property.name} lead={property.summary} image={property.image}>
        <ArrowLink href="/properties">All properties</ArrowLink>
      </PageHero>

      <section className={`theme-light ${styles.sectionTight}`} data-nav-theme="light" aria-labelledby="about-home">
        <div className={`container grid ${styles.split}`}>
          <div className={styles.headLabel}>
            <SectionLabel>The residence</SectionLabel>
          </div>
          <div className={styles.prose} data-reveal>
            <h2 id="about-home" className="visually-hidden">
              About {property.name}
            </h2>
            {property.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className={`${styles.facts} ${styles.factsCol}`} data-reveal>
            {facts.map(([label, value]) => (
              <div key={label} className={styles.fact}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`theme-light ${styles.sectionTight}`} data-nav-theme="light" aria-label="Gallery">
        <div className={`container grid ${styles.gallery}`}>
          <Media image={property.gallery[0]} sizes="(min-width: 1024px) 55vw, 100vw" className={styles.galleryA} parallax={6} />
          <Media image={property.gallery[1]} sizes="(min-width: 1024px) 30vw, 100vw" className={styles.galleryB} />
        </div>
      </section>

      <section className={`theme-dark ${styles.section}`} data-nav-theme="dark" aria-labelledby="more-homes">
        <div className="container">
          <div className={`grid ${styles.head}`}>
            <SectionLabel className={styles.headLabel}>Continue</SectionLabel>
            <h2 id="more-homes" className={styles.headTitle} data-reveal>
              More homes in our care
            </h2>
          </div>
          <ul className={`grid ${styles.gallery}`}>
            {next.map((p, i) => (
              <li key={p.slug} className={i === 0 ? styles.cardA : styles.cardB}>
                <PropertyCard property={p} index={properties.indexOf(p)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA title={`Enquire about ${property.name}`} text="Ask for availability, a private viewing or the full particulars. We reply within one working day." linkLabel="Arrange a viewing" />
    </>
  );
}
