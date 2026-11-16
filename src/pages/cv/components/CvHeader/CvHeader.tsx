import type { Profile } from "@/data";
import styles from "./CvHeader.module.css";

export const CvHeader = ({ profile }: { profile: Profile }) => (
  <header className={styles.header}>
    <h1 className={styles.name}>{profile.name}</h1>
    {profile.title && <p className={styles.title}>{profile.title}</p>}
    <ul className={styles.contact}>
      <li>
        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </li>
      <li>
        <a href={profile.github} target="_blank" rel="noopener">
          {profile.github.replace(/^https?:\/\//, "")}
        </a>
      </li>
    </ul>
  </header>
);
