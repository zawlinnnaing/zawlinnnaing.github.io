/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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

  // useEffect(() => {
  //   let yDown = null;
  //   window.addEventListener("wheel", scrollWheelHandler, { capture: true });
  //   window.addEventListener("touchstart", (event) => {
  //     yDown = first(event.touches).clientY;
  //   });
  //   window.addEventListener("touchmove", (event) => {
  //     touchMoveHandler(event, yDown);
  //   });
  // }, []);

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <section className="flex flex-col h-screen">
        <Helmet>
          <title>Zaw Linn Naing</title>
          <meta
            name="description"
            content="My portfolio website, I am software engineer"
          />
        </Helmet>
        <Navbar />
        <main className="flex-auto container mx-auto xl:px-8">{children}</main>
        {showFooter && <Footer className="flex-shrink-0" />}
      </section>
    </AppContext.Provider>
  );
}
