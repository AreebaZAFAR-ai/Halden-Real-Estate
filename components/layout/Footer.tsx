import Link from "next/link";
import { legalNav, primaryNav, site } from "@/lib/data/site";
import { ArrowUpRight, LogoMark } from "@/components/ui/Icons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`theme-dark ${styles.footer}`} data-nav-theme="dark">
      <nav aria-label="Footer" className={styles.navRow}>
        <ul className={`container ${styles.navList}`}>
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`container grid ${styles.body}`}>
        <div className={styles.brand}>
          <LogoMark className={styles.mark} />
          <p className={`h2 ${styles.statement}`}>{site.tagline}</p>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Studio</h2>
          <address className={styles.list}>
            {site.contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span className="muted">{site.contact.hours}</span>
          </address>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Follow</h2>
          <ul className={styles.list}>
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className={styles.social}>
                  {s.label} <ArrowUpRight />
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.wordmarkWrap}`} aria-hidden="true">
        <p className={styles.wordmark}>{site.name}</p>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>
          © {year} {site.legalName}. Established {site.established}.
        </p>
        <ul className={styles.legalLinks}>
          {legalNav.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
