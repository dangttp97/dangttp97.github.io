import { getTheme, setTheme } from "@/utils";

import { Switch } from "../Switch";

export const ThemeToggle = () => (
  <Switch
    checked={getTheme() === "dark"}
    onChange={(isDark) => setTheme(isDark ? "dark" : "light")}
    checkedIcon={"🌙"}
    uncheckedIcon={"☀️"}
    data-theme-switch
  />
);
