import { Card } from "@/components";
import { profile } from "@/data";
import styles from "./IntroCard.module.css";

export const IntroCard = () => (
  <Card className={styles.intro}>
    <p className={styles.eyebrow}>Hello, I'm</p>
    <h1 className={styles.name}>Phương Đăng</h1>
    {profile.title && <p className={styles.role}>{profile.title}</p>}
    <p className={styles.bio}>
      A Senior Mobile Engineer dedicated to building production-grade mobile
      platforms across Fintech, Cryptocurrency, and MarTech domains.
    </p>
  </Card>
);
