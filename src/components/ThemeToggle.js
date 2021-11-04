import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React from "react";
import useAppContext from "../hooks/useAppContext";
import { changeTheme, THEME_MODES } from "../utils/theme";

export default function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useAppContext();

  function onToggleChange(isDark) {
    setIsDarkMode(isDark);
    changeTheme(isDark ? THEME_MODES.dark : THEME_MODES.light);
  }

  return (
    // <button
    //   type="button"
    //   onClick={() => {
    //     onToggleChange(!isDarkMode);
    //   }}
    // >
    //   {isDarkMode ? (
    //     <MoonIcon className="w-8 h-8 text-blue-500 hover:pointer" />
    //   ) : (
    //     <SunIcon className="w-8 h-8 text-yellow-500" />
    //   )}
    // </button>
    <Switch.Group>
      <Switch
        onChange={(value) => {
          onToggleChange(value);
        }}
        checked={isDarkMode}
        className={`${isDarkMode ? "bg-blue-900" : "bg-yellow-500"}
        relative inline-flex items-center h-6 rounded-full w-11
        `}
      >
        <span className="sr-only">Change Theme mode</span>

        {isDarkMode ? (
          <MoonIcon className="translate-x-1 transform theme-icon " />
        ) : (
          <SunIcon className="translate-x-6 transform theme-icon  mr-4" />
        )}
      </Switch>
    </Switch.Group>
  );
}
