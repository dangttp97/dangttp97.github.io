import styles from "./CvPreview.module.css";

export const CvPreview = ({ name }: { name: string }) => (
  <div className={styles.preview}>
    <div className={styles.paper}>
      <span className={styles.name}>{name}</span>
      <span className={styles.line} />
      <span className={styles.lineShort} />
      <span className={styles.line} />
      <span className={styles.lineShort} />
    </div>
  </div>
);
