import React from "react";
import { Helmet } from "react-helmet";

const DEFAULT_DESCRIPTION =
  "I am a software engineer with 3 years of experience in backend development and over 1 year of experience in React.js. I am always eager to learn new things. Welcome to my portfolio website";

// const DEFAULT_KEYWORDS = [
//   "Software Engineer",
//   "Backend developer",
//   "Frontend developer",
//   "Software developer",
//   "Web developer",
//   "Programmer",
//   "Developer",
//   "Full-stack developer",
// ];

export default function SEO({
  title = "Hi, I am Zaw Linn Naing",
  description = DEFAULT_DESCRIPTION,
  //   keywords = [],
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content="Zaw Linn Naing" />
        <meta name="robot" content="index nofollow" />
      </Helmet>
    </>
  );
}
