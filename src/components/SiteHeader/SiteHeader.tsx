import { ThemeToggle } from "../ThemeToggle";
import { route } from "@/utils";
import styles from "./SiteHeader.module.css";

export const SiteHeader = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <a className={styles.brand} href={route("")}>
        <span className={styles.mark}>PĐ</span>
        Welcome to my GitHub Page
      </a>
      <ThemeToggle />
    </div>
  </header>
);
