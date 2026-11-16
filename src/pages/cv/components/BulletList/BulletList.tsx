import styles from "./BulletList.module.css";

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className={styles.list}>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);
