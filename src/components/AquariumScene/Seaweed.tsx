import { cx } from "@/utils";

import styles from "./AquariumScene.module.css";

export const Seaweed = ({ className }: { className?: string }) => (
  <svg
    className={cx(styles.seaweed, className)}
    viewBox="0 0 60 100"
    preserveAspectRatio="none"
  >
    <path
      className={styles.blade}
      d="M14 100 C4 75 22 55 10 30 C6 18 14 8 12 0 C22 22 26 48 18 72 C15 84 20 94 18 100 Z"
    />
    <path
      className={cx(styles.blade, styles.bladeSlow)}
      d="M30 100 C24 80 40 62 32 40 C28 28 36 16 34 8 C44 30 46 56 38 76 C35 88 38 96 36 100 Z"
    />
    <path
      className={styles.blade}
      d="M46 100 C40 84 54 70 48 52 C45 42 52 34 50 26 C58 44 58 64 52 80 C50 90 52 96 51 100 Z"
    />
  </svg>
);
