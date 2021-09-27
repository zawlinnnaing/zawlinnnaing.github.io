/* This example requires Tailwind CSS v2.0+ */
import React, { createRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/app.css";
import { changeTheme, getInitTheme } from "../utils/theme";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const ref = createRef();

  useEffect(() => {
    changeTheme(getInitTheme());
  }, []);

  // useEffect(() => {
  //   window.addEventListener("wheel", throttledHandler, { capture: true });
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
      <main className="h-full w-full" ref={ref}>
        {children}
      </main>
    </>
  );
}
