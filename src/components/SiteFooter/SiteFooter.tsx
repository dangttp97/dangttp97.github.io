import { profile } from "@/data";
import { GitHubIcon, MailIcon } from "../Icons";
import styles from "./SiteFooter.module.css";

export const SiteFooter = () => (
  <footer className={styles.footer}>
    <p className={styles.label}>Find me on:</p>
    <ul className={styles.links}>
      <li>
        <a href={profile.github} target="_blank" rel="noopener">
          <GitHubIcon />
          GitHub
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`}>
          <MailIcon />
          Email
        </a>
      </li>
    </ul>
    <p>
      © 2026 Trần Thành Phương Đăng · Built with heart and a hand-written JSX
      renderer and Vite
    </p>
  </footer>
);
