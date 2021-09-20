/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Debug from "../utils/logging";
import { changeTheme, getInitTheme } from "../utils/theme";
import Navbar from "./Navbar";
import "../css/app.css";

export default function Layout({ children }) {
  useEffect(() => {
    Debug.log("current theme", getInitTheme());
    changeTheme(getInitTheme());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Zaw Linn Naing</title>
        <meta
          name="description"
          content="My portfolio website, I am software engineer"
        />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
