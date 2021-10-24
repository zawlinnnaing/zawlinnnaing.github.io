import ExpaAI from "../assets/logos/expa-ai.png";
import Mounts from "../assets/logos/mounts.jpg";

import { TECHNOLOGIES } from "../utils/constants";

export default [
  {
    id: "expa-ai",
    companyName: "Expa.AI",
    employmentPeriod: {
      start: "Jan 2020",
      end: "Aug 2021",
      duration: "1 yr 8 mos",
    },
    url: "/experience/expa-ai",
    role: "Software Engineer",
    companyUrl: "https://expa.ai/",
    logo: {
      uri: ExpaAI,
      isHorizontal: true,
    },
    technologies: [
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.graphql,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.reactJs,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.redux,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.kubernetes,
    ],
    summary:
      "At Expa.AI, I worked as the core developer of <i>the social commerce platform</i>, which enables SME users to sell products via Facebook Messenger. I have also built <i>an analytics solution</i> for users to gain insight into how their storefronts are doing. " +
      "I was also part of the team that builds <i>custom support and marketing solution</i>, and responsible for the <i>automatic deployment of AI models</i>.<br/>" +
      "<i>Main challenges I overcame during my time in the company includes;</i>" +
      '<ul class="list-disc list-inside"><li>Ensured product quality through rapid iterations of the development process</li><li>Implemented Event-Driven Architecture for storing user activity logs.</li><li>Solved N+1 problems and IAM on GraphQL server.</li></ul>',
  },
  {
    id: "mounts-digital",
    companyName: "Mounts Digital",
    companyUrl: "#",
    employmentPeriod: {
      start: "May 2019",
      end: "Nov 2019",
      duration: "7 mos",
    },
    logo: {
      uri: Mounts,
    },
    role: "Web Developer",
    technologies: [
      TECHNOLOGIES.laravel,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.jquery,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.firebase,
      TECHNOLOGIES.googleMap,
    ],
    summary: "",
    url: "/experience/mounts-digital",
  },
];
