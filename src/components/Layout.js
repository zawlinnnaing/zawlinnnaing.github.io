/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/app.css";
import "../utils/i18n";
import { changeTheme, getInitTheme } from "../utils/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, showFooter = true }) {
  useEffect(() => {
    changeTheme(getInitTheme());
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
    <section className="flex flex-col h-screen">
      <Helmet>
        <title>Zaw Linn Naing</title>
        <meta
          name="description"
          content="My portfolio website, I am software engineer"
        />
      </Helmet>
      <Navbar />
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </section>
  );
}
