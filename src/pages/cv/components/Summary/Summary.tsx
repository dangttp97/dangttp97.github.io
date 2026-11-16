import { Section } from "../Section";
import styles from "./Summary.module.css";

export const Summary = ({ paragraphs }: { paragraphs: string[] }) => (
  <Section title="Professional Summary">
    {paragraphs.map((p) => (
      <p className={styles.text}>{p}</p>
    ))}
  </Section>
);
