import { AquariumScene } from "@/components";
import { profile, PROJECTS_REGISTRY } from "@/data";
import { ProjectId } from "@/data/projects-metadata";
import type { Child } from "@renderer";

import { ProjectCard } from "./components";
import { CvPreview } from "./components/CvPreview";
import styles from "./ProjectsSection.module.css";

const projectMedia: Partial<Record<ProjectId, Child>> = {
  cv: <CvPreview name={profile.name} />,
  aquarium: <AquariumScene />,
};

export const ProjectsSection = () => (
  <section className={styles.projects}>
    <h2 className={styles.title}>My Recent Projects</h2>
    <div className={styles.grid}>
      {PROJECTS_REGISTRY.map((project, i) => (
        <ProjectCard
          project={project}
          index={i + 1}
          media={projectMedia[project.id]}
        />
      ))}
    </div>
  </section>
);
