export const THEME_MODES = Object.freeze({
  light: "light",
  dark: "dark",
});

export function changeTheme(themMode) {
  if (themMode === THEME_MODES.dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  if (localStorage) {
    localStorage.setItem("theme", themMode);
  }
}

/**
 * Get initial theme for app, return dark if it exists
 *
 * @returns {String}
 */
export function getInitTheme() {
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME_MODES.dark
    : THEME_MODES.light;
  if (!localStorage || !("theme" in localStorage)) {
    return defaultTheme;
  }
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : defaultTheme;
}
