/* This example requires Tailwind CSS v2.0+ */
import { first } from "lodash";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/app.css";
import "../utils/i18n";
import {
  scrollWheelHandler,
  touchMoveHandler,
} from "../utils/routeTransitionHandlers";
import { changeTheme, getInitTheme } from "../utils/theme";
import Navbar from "./Navbar";

export default function Layout({ children }) {
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
    <>
      <Helmet>
        <title>Zaw Linn Naing</title>
        <meta
          name="description"
          content="My portfolio website, I am software engineer"
        />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
