import "@/styles/global.css";

import { render } from "@renderer";
import { SiteFooter, SiteHeader } from "@/components";
import { IntroCard } from "./components/IntroCard";
import { ProjectsSection } from "./components/ProjectsSection";
import { ToolboxCard } from "./components/ToolboxCard";
import { YearsCard } from "./components/YearsCard";
import styles from "./index.module.css";

export const HomePage = () => (
  <>
    <SiteHeader />
    <main className={styles.home}>
      <div className={styles.stack}>
        <IntroCard />
        <YearsCard
          years="6+"
          label="years shipping production-grade mobile apps"
        />
        <ToolboxCard />
      </div>
      <ProjectsSection />
    </main>
    <SiteFooter />
  </>
);

render(<HomePage />, document.getElementById("root")!);
