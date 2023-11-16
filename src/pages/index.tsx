import React from "react";
import { Helmet } from "react-helmet";
import HomeV2 from "../components/home/HomeV2";
import ThemeProvider from "../components/ThemeProvider";

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Hi, I am Zaw Lin Naing</title>
      </Helmet>
      <ThemeProvider>
        <HomeV2 />
      </ThemeProvider>
    </>
  );
}
