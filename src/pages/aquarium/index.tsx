import "@/styles/global.css";

import { AquariumScene } from "@/components";
import { route } from "@/utils";
import { render } from "@renderer";

import { Controls } from "./components/Controls";
import styles from "./index.module.css";

export const AquariumPage = () => (
  <main className={styles.page}>
    <AquariumScene scene="day" />

    <a className={styles.back} href={route("")}>
      ← Home
    </a>
    <Controls musicSrc={route("aquarium/music.mp3")} />
  </main>
);

render(<AquariumPage />, document.getElementById("root")!);
