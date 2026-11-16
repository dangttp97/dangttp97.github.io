import { Card, Tags } from "@/components";
import { cvData, toolbox } from "@/data";
import styles from "./ToolboxCard.module.css";

const PREVIEW_ITEMS = 3;

export const ToolboxCard = () => (
  <Card>
    <h2>Toolbox &amp; skills</h2>
    <Tags items={toolbox} />
    <div className={styles.skills}>
      {cvData.skills.map((group) => (
        <div>
          <h3 className={styles.title}>{group.category}</h3>
          <p className={styles.items}>
            {group.items.slice(0, PREVIEW_ITEMS).join(" · ")}
          </p>
        </div>
      ))}
    </div>
  </Card>
);
