import React from "react";
import AppLink from "../components/common/AppLink";
import { TECHNOLOGIES } from "../utils/constants";

export default [
  {
    name: "Portfolio Website (This One)",
    links: [
      {
        text: "source code",
        url: "https://github.com/zawlinnnaing/zawlinnnaing.github.io",
      },
    ],
    logo: {
      text: "Portfolio",
    },
    summary: (
      <>
        This is the first website I built using both{" "}
        <i>Gatsby.js and Tailwind CSS</i>. I also implemented Continuous
        Delivery (CD) mechanism using{" "}
        <AppLink href="https://github.com/features/actions">
          GitHub Actions
        </AppLink>{" "}
        to enable deploying the website to <i>GitHub Page</i> continuously every
        time I push code changes to a specified branch.
      </>
    ),
    technologies: [
      TECHNOLOGIES.gatsbyJs,
      TECHNOLOGIES.tailwindCSS,
      TECHNOLOGIES.githubPage,
    ],
  },
];
