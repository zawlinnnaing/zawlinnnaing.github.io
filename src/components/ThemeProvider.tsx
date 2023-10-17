import React, { useEffect, useState } from "react";
import { THEME_MODES, changeTheme, getInitTheme } from "../utils/theme";
import AppContext from "../contexts/AppContext";

export default function ThemeProvider(props: React.PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initTheme = getInitTheme();
    changeTheme(initTheme);
    setIsDarkMode(initTheme === THEME_MODES.dark);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
