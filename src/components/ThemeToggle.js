import { Switch, Transition } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { changeTheme, getInitTheme, THEME_MODES } from "../utils/theme";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(getInitTheme() === THEME_MODES.dark);
  }, []);

  function onToggleChange(value) {
    setIsDarkMode(value);
    changeTheme(value ? THEME_MODES.dark : THEME_MODES.light);
  }

  return (
    <Switch.Group>
      <Switch
        onChange={onToggleChange}
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
