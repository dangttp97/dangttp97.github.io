import { Card } from "@/components";
import styles from "./YearsCard.module.css";

export const YearsCard = ({
  years,
  label,
}: {
  years: string;
  label: string;
}) => (
  <Card className={styles.card}>
    <p className={styles.number}>{years}</p>
    <p className={styles.label}>{label}</p>
  </Card>
);
