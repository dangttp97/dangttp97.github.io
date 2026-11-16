import { cx } from "@/utils";
import type { Child } from "@renderer";

import styles from "./Section.module.css";

export const Section = ({
  title,
  className,
  plainTitle,
  children,
}: {
  title: string;
  className?: string;
  plainTitle?: boolean;
  children?: Child;
}) => (
  <section className={cx(styles.section, className)}>
    <h2 className={cx(styles.title, plainTitle && styles.plain)}>{title}</h2>
    {children}
  </section>
);
