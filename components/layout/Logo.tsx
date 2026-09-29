import Link from "next/link";
import { LogoMark } from "@/components/ui/Icons";
import { site } from "@/lib/data/site";
import styles from "./Logo.module.css";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link href="/" className={[styles.logo, className].filter(Boolean).join(" ")} onClick={onClick}>
      <LogoMark className={styles.mark} />
      <span className={styles.word}>{site.name}</span>
      <span className="visually-hidden">— home</span>
    </Link>
  );
}
