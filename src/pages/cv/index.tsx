import "@/styles/cv.css";

import { render } from "@renderer";
import { cvData } from "@/data";
import {
  CvHeader,
  EducationList,
  ExperienceList,
  Skills,
  Summary,
} from "./components";
import styles from "./index.module.css";

export const CvPage = () => (
  <main className={styles.page}>
    <CvHeader profile={cvData.profile} />
    <Summary paragraphs={cvData.profile.summary} />
    <Skills hardSkills={cvData.skills} softSkills={cvData.softSkills} />
    <ExperienceList experiences={cvData.experiences} />
    <EducationList items={[cvData.education]} />
  </main>
);

render(<CvPage />, document.getElementById("root")!);
