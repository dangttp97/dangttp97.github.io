export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

export const getSavedTheme = (): Theme | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
};

export const getTheme = (): Theme =>
  getSavedTheme() ?? (darkQuery.matches ? "dark" : "light");

const syncSwitches = () => {
  const isDark = getTheme() === "dark";
  document.querySelectorAll("[data-theme-switch]").forEach((el) => {
    el.setAttribute("data-checked", String(isDark));
  });
};

export const toggleTheme = () =>
  setTheme(getTheme() === "dark" ? "light" : "dark");

darkQuery.addEventListener("change", () => {
  if (!getSavedTheme()) syncSwitches();
});

export const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (e.g. private mode); the theme still applies for this visit.
  }
  syncSwitches();
};
