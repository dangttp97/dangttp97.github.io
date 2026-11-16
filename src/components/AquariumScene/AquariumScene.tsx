import { cx, route } from "@/utils";

import styles from "./AquariumScene.module.css";
import { Seaweed } from "./Seaweed";

export const scenes = ["day", "sunset", "night", "deep"] as const;
export type Scene = (typeof scenes)[number];

const swimmers = [
  { name: "faint", src: "aquarium/faintSchool.png", facesLeft: true },
  { name: "gold", src: "aquarium/goldFishSchool.png" },
  { name: "shark", src: "aquarium/shark.png" },
  { name: "turtle", src: "aquarium/turtle.png" },
  { name: "diver1", src: "aquarium/diver1.png", dive: true },
  { name: "diver2", src: "aquarium/diver2.png", dive: true },
  { name: "diver3", src: "aquarium/diver3.png", dive: true },
];

export const AquariumScene = ({
  scene = "day",
  className,
}: {
  scene?: Scene;
  className?: string;
}) => (
  <div
    className={cx(styles.aquarium, className)}
    data-aquarium
    data-scene={scene}
  >
    <span className={cx(styles.water, styles.waterDay)} />
    <span className={cx(styles.water, styles.waterSunset)} />
    <span className={cx(styles.water, styles.waterNight)} />
    <span className={cx(styles.water, styles.waterDeep)} />
    <span className={styles.sky} />
    <Seaweed className={styles.seaweedLeft} />
    <Seaweed className={styles.seaweedRight} />

    {swimmers.map((s) => (
      <div className={cx(styles.lane, styles[s.name])}>
        <div className={cx(s.dive && styles.dive)}>
          <div className={styles.face}>
            <img
              className={cx(styles.img, s.facesLeft && styles.facesLeft)}
              src={route(s.src)}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    ))}

    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <span className={cx(styles.bubble, styles[`bubble${i}`])} />
    ))}

    <span className={styles.sand} />
  </div>
);
