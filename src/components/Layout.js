/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";
import "../css/app.css";
import "../utils/i18n";
import { changeTheme, getInitTheme, THEME_MODES } from "../utils/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, showFooter = true }) {
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
        
        <main className="relative container mx-auto xl:px-8 app-content">{children}</main>
        {showFooter && <Footer className="flex-shrink-0" />}
      </section>
    </AppContext.Provider>
  );
}
