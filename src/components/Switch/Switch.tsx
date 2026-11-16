import { cx } from "@/utils";
import type { Child } from "@renderer";

import styles from "./Switch.module.css";

type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  checkedIcon?: Child;
  uncheckedIcon?: Child;
  className?: string;
  disabled?: boolean;
  [attr: `data-${string}`]: unknown;
};

export const Switch = ({
  checked = false,
  onChange,
  checkedIcon,
  uncheckedIcon,
  className,
  disabled,
  ...rest
}: SwitchProps) => {
  const handleClick = (event: MouseEvent) => {
    const button = event.currentTarget as HTMLButtonElement;
    const next = button.getAttribute("data-checked") !== "true";
    button.setAttribute("data-checked", String(next));
    onChange?.(next);
  };

  return (
    <button
      {...rest}
      type="button"
      className={cx(styles.switch, className)}
      data-checked={String(checked)}
      disabled={disabled}
      onClick={handleClick}
    >
      <span className={styles.thumb}>
        {uncheckedIcon && (
          <span className={cx(styles.icon, styles.off)}>{uncheckedIcon}</span>
        )}
        {checkedIcon && (
          <span className={cx(styles.icon, styles.on)}>{checkedIcon}</span>
        )}
      </span>
    </button>
  );
};
