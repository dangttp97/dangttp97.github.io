import { getProvider } from "@/data/service-provider-metadata";
import { cx } from "@/utils";

import styles from "./ExternalProjectPreview.module.css";

type Props = {
  url: string;
};

export const ExternalProjectPreview = ({ url }: Props) => {
  const provider = getProvider(url);

  const renderIcons = () => {
    if (!provider) {
      return <div className={cx(styles.preview, styles.other)}>#</div>;
    }

    const hasBothThemes = provider.icons.length > 1;

    return provider.icons.map((e) => (
      <img
        className={cx(
          styles.icon,
          hasBothThemes &&
            (e.type === "dark" ? styles.iconDark : styles.iconLight),
        )}
        src={e.path}
      />
    ));
  };

  return (
    <div className={styles.preview}>
      <div className={cx(styles.badge, styles[provider?.name ?? "other"])}>
        {renderIcons()}
      </div>
    </div>
  );
};
