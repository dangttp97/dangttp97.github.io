import { cx } from "@/utils";
import styles from "./Tags.module.css";

export const Tags = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => (
  <div className={cx(styles.tags, className)}>
    {items.map((item) => (
      <span className={styles.tag}>{item}</span>
    ))}
  </div>
);
