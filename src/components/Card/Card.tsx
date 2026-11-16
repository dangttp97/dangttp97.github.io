import { cx } from "@/utils";
import type { Child } from "@renderer";

import styles from "./Card.module.css";

type CardProps = {
  href?: string;
  external?: boolean;
  className?: string;
  children?: Child;
};

export const Card = ({ href, external, className, children }: CardProps) =>
  href ? (
    <a
      className={cx(styles.card, styles.link, className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ) : (
    <section className={cx(styles.card, className)}>{children}</section>
  );
