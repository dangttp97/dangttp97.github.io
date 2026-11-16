import type { Education } from "@/data";
import styles from "./EducationList.module.css";
import { Section } from "../Section";

export const EducationList = ({ items }: { items: Education[] }) => (
  <Section title="Education">
    {items.map((edu) => (
      <div className={styles.item}>
        <span className={styles.school}>{edu.school}</span>
        {edu.period && <span>{edu.period}</span>}
      </div>
    ))}
  </Section>
);
