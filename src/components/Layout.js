/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import "../css/app.css";
import "../utils/i18n";
import { changeTheme, getInitTheme, THEME_MODES } from "../utils/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  children,
  showFooter = true,
  header = <></>,
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    changeTheme(getInitTheme());
    setIsDarkMode(getInitTheme() === THEME_MODES.dark);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <section className="max-w-2xl mx-auto">
        <Navbar className="nav-bar" />
        {header}
        <main className="relative container mx-auto app-content">
          {children}
        </main>
        {showFooter && <Footer className="flex-shrink-0" />}
      </section>
    </AppContext.Provider>
  );
}
