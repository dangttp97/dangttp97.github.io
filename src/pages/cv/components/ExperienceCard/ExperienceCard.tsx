import type { Experience } from "@/data";
import styles from "./ExperienceCard.module.css";

export const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <article className={styles.item}>
    <div className={styles.header}>
      <div>
        <h3 className={styles.company}>{exp.company}</h3>
        <span className={styles.role}>{exp.role}</span>
      </div>
      <span className={styles.period}>{exp.period}</span>
    </div>

    {exp.summary && <p className={styles.summary}>{exp.summary}</p>}

    {exp.highlights && (
      <ul className={styles.list}>
        {exp.highlights.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    )}

    {exp.subProjects?.map((proj) => (
      <div className={styles.subProject}>
        <h4 className={styles.subProjectName}>
          {proj.name} — <small>{proj.role}</small>
        </h4>
        <ul className={styles.list}>
          {proj.highlights.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    ))}

    <div className={styles.tags}>
      {exp.technologies.map((tech) => (
        <span className={styles.tag}>{tech}</span>
      ))}
    </div>
  </article>
);
