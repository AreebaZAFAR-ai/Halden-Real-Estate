import Link from "next/link";
import { ArrowRight } from "./Icons";
import styles from "./ArrowLink.module.css";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  /** `rule` draws a full-width hairline under the link, as in the editorial layouts. */
  variant?: "rule" | "inline";
  className?: string;
};

export function ArrowLink({ href, children, variant = "inline", className }: ArrowLinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  const classes = [styles.link, styles[variant], className].filter(Boolean).join(" ");
  const content = (
    <>
      <span className={styles.text}>{children}</span>
      <ArrowRight className={styles.arrow} />
    </>
  );

  return isExternal ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
