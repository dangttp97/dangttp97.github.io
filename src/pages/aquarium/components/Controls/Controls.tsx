import { type Scene, scenes, Switch } from "@/components";

import styles from "./Controls.module.css";

const sceneLabels: Record<Scene, string> = {
  day: "☀️ Day",
  sunset: "🌅 Sunset",
  night: "🌙 Night",
  deep: "🫧 Deep sea",
};

const getAquarium = () =>
  document.querySelector<HTMLElement>("[data-aquarium]");
const getMusic = () =>
  document.getElementById("aquarium-music") as HTMLAudioElement | null;

const changeScene = (event: MouseEvent) => {
  const aquarium = getAquarium();
  if (!aquarium) return;
  const current = aquarium.dataset.scene as Scene;
  const next = scenes[(scenes.indexOf(current) + 1) % scenes.length];
  aquarium.dataset.scene = next;
  (event.currentTarget as HTMLElement).textContent = sceneLabels[next];
};

const toggleMusic = (on: boolean) => {
  const music = getMusic();
  const hint = document.getElementById("music-hint");
  if (!music) return;

  if (!on) {
    music.pause();
    return;
  }
  music.play().catch(() => {
    document
      .querySelector("[data-music-switch]")
      ?.setAttribute("data-checked", "false");
    hint?.removeAttribute("hidden");
  });
};

export const Controls = ({ musicSrc }: { musicSrc: string }) => (
  <div className={styles.controls}>
    <button type="button" className={styles.sceneButton} onClick={changeScene}>
      {sceneLabels.day}
    </button>

    <label className={styles.music}>
      <span>Music</span>
      <Switch
        onChange={toggleMusic}
        checkedIcon={"♪"}
        uncheckedIcon={"✕"}
        data-music-switch
      />
    </label>

    <p id="music-hint" className={styles.hint} hidden>
      Add a music file at public/aquarium/music.mp3
    </p>

    <audio id="aquarium-music" src={musicSrc} loop preload="none" />
  </div>
);
