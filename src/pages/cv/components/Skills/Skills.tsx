import type { Skill } from "@/data";

import { BulletList } from "../BulletList";
import { Section } from "../Section";
import styles from "./Skills.module.css";

export const Skills = ({
  hardSkills,
  softSkills = [],
}: {
  hardSkills: Skill[];
  softSkills?: string[];
}) => (
  <div className={styles.columns}>
    <Section title="Hard Skills" plainTitle>
      {hardSkills.map((group) => (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>{group.category}</h3>
          <BulletList items={group.items} />
        </div>
      ))}
    </Section>

    {softSkills.length > 0 && (
      <Section title="Soft Skills" plainTitle>
        <BulletList items={softSkills} />
      </Section>
    )}
  </div>
);
