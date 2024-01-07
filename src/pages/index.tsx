import React from "react";
import { Helmet } from "react-helmet";
import Home from "../components/home/Home";
import ThemeProvider from "../components/ThemeProvider";

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Hi, I am Zaw Lin Naing</title>
      </Helmet>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}
