import React from "react";
import BriklLogo from "../assets/logos/brikl.jpg";
import ExpaAI from "../assets/logos/expa-ai.png";
import Mounts from "../assets/logos/mounts.jpg";
import Nexlabs from "../assets/logos/nexlabs.jpg";
import OozouLogo from "../assets/logos/oozou.jpg";
import SertisLogo from "../assets/logos/sertis.png";
import Taskworld from "../assets/logos/taskworld.png";
import BriklSummary from "../components/experience/BriklSummary";
import ExpaSummary from "../components/experience/ExpaSummary";
import MountsSummary from "../components/experience/MountsSummary";
import NexlabsSummary from "../components/experience/NexlabsSummary";
import OozouSummary from "../components/experience/OozouSummary";
import SertisSummary from "../components/experience/SertisSummary";
import TaskworldSummary from "../components/experience/TaskworldSummary";
import { TECHNOLOGIES } from "../utils/constants";
import { formatDuration } from "../utils/dateTime";
import { IExperience } from "./types";

function createEmploymentPeriod(
  start: Date,
  end?: Date
): IExperience["employmentPeriod"] {
  return {
    start,
    end,
    get duration() {
      return formatDuration(this.start, this.end);
    },
  };
}

const experiences: IExperience[] = [
  {
    id: "Sertis",
    companyName: "Sertis",
    companyUrl: "https://www.sertiscorp.com",
    employmentPeriod: createEmploymentPeriod(new Date(2024, 6)),
    logo: {
      uri: SertisLogo,
      isHorizontal: true,
    },
    url: "https://www.sertiscorp.com",
    role: "Senior Software Engineer",
    technologies: [
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.python,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.reactJs,
      TECHNOLOGIES.nextJS,
      TECHNOLOGIES.angular,
      TECHNOLOGIES.svelte,
      TECHNOLOGIES.nestJs,
      TECHNOLOGIES.golang,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.kubernetes,
      TECHNOLOGIES.terraform,
      TECHNOLOGIES.aws,
      TECHNOLOGIES.azure,
      TECHNOLOGIES.gcloud,
    ],
    summary: <SertisSummary />,
  },
  {
    id: "oozou",
    companyName: "Oozou",
    employmentPeriod: createEmploymentPeriod(
      new Date(2023, 8),
      new Date(2024, 6)
    ),
    logo: {
      uri: OozouLogo,
      isHorizontal: false,
    },
    role: "Full-stack Engineer",
    technologies: [
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nextJS,
      TECHNOLOGIES.reactJs,
      TECHNOLOGIES.tailwindCSS,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.aws,
      TECHNOLOGIES.websocket,
      TECHNOLOGIES.yjs,
    ],
    url: "https://oozou.com",
    companyUrl: "https://oozou.com",
    summary: <OozouSummary />,
  },
  {
    id: "brikl",
    companyName: "Brikl",
    url: "/experience/brikl",
    companyUrl: "https://www.brikl.com/",
    role: "Software Engineer - Backend",
    employmentPeriod: createEmploymentPeriod(
      new Date(2023, 1),
      new Date(2023, 7)
    ),
    logo: {
      uri: BriklLogo,
      isHorizontal: false,
    },
    technologies: [
      TECHNOLOGIES.graphql,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.prisma,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.aws,
      TECHNOLOGIES.serverless,
    ],
    summary: <BriklSummary />,
  },
  {
    id: "taskworld",
    companyName: "Taskworld",
    companyUrl: "https://taskworld.com/",
    url: "/experience/taskworld",
    role: "Full Stack Engineer",
    employmentPeriod: {
      start: new Date(2022, 0),
      end: new Date(2023, 1),
      get duration() {
        return formatDuration(this.start, this.end);
      },
    },
    logo: {
      uri: Taskworld,
      isHorizontal: true,
    },
    technologies: [
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.elasticsearch,
      TECHNOLOGIES.reactJs,
      TECHNOLOGIES.redux,
      TECHNOLOGIES.redis,
      TECHNOLOGIES.websocket,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.kubernetes,
    ],
    summary: <TaskworldSummary />,
  },
  {
    id: "expa-ai",
    companyName: "Expa.AI",
    employmentPeriod: {
      start: new Date(2020, 0),
      end: new Date(2021, 7),
      get duration() {
        return formatDuration(this.start, this.end);
      },
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
    summary: <ExpaSummary />,
  },
  {
    id: "mounts-digital",
    companyName: "Mounts Digital",
    companyUrl: "#",
    employmentPeriod: {
      start: new Date(2019, 4),
      end: new Date(2019, 10),
      get duration() {
        return formatDuration(this.start, this.end);
      },
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
    summary: <MountsSummary />,
    url: "/experience/mounts-digital",
  },
  {
    id: "nexlabs",
    companyName: "Nexlabs",
    companyUrl: "https://www.nexlabs.co/",
    url: "/experience/nexlabs",
    role: "Intern",
    employmentPeriod: {
      start: new Date(2018, 11),
      end: new Date(2019, 1),
      get duration() {
        return formatDuration(this.start, this.end);
      },
    },
    logo: {
      uri: Nexlabs,
      isHorizontal: true,
    },
    technologies: [
      TECHNOLOGIES.laravel,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.vue,
      TECHNOLOGIES.nuxt,
    ],
    summary: <NexlabsSummary />,
  },
];

export default experiences;
