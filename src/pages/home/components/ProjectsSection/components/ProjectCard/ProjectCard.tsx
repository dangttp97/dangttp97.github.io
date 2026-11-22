import type { ProjectMeta } from "@/data";
import { route } from "@/utils";
import type { Child } from "@renderer";

import { Card } from "../../../../../../components/Card";
import { Tags } from "../../../../../../components/Tags";
import { ExternalProjectPreview } from "../ExternalProjectPreview";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: ProjectMeta;
  index: number;
  media?: Child;
};

export const ProjectCard = ({ project, index, media }: ProjectCardProps) => {
  const isLive = project.status === "live";
  const isExternal = "url" in project;
  const href = isExternal ? project.url : route(project.path);
  const preview =
    media ?? ("url" in project && <ExternalProjectPreview url={project.url} />);

  return (
    <Card className={styles.card} href={href} external={isExternal}>
      <div className={styles.media}>{preview}</div>
      <div className={styles.body}>
        <p className={styles.eyebrow}>
          Project {String(index).padStart(2, "0")}
        </p>
        <h3>
          {project.title}
          {!isLive && <span className={styles.badge}>Coming soon</span>}
        </h3>
        <p className={styles.description}>{project.description}</p>
        <Tags items={project.tags} className={styles.tags} />
      </div>
      {isLive && <span className={styles.arrow}>→</span>}
    </Card>
  );
};
