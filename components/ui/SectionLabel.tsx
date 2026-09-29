import { BuildingIcon } from "./Icons";
import styles from "./SectionLabel.module.css";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h2";
  id?: string;
};

export function SectionLabel({ children, className, as: Tag = "p", id }: SectionLabelProps) {
  return (
    <Tag id={id} className={[styles.label, className].filter(Boolean).join(" ")}>
      <BuildingIcon className={styles.icon} />
      <span>{children}</span>
    </Tag>
  );
}
