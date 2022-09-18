import React from "react";
import ExpaAI from "../assets/logos/expa-ai.png";
import Mounts from "../assets/logos/mounts.jpg";
import Nexlabs from "../assets/logos/nexlabs.jpg";
import Taskworld from "../assets/logos/taskworld.png";
import TaskworldSummary from "../components/experience/TaskworldSummary";
import { TECHNOLOGIES } from "../utils/constants";
import { formatDuration } from "../utils/dateTime";
import { IExperience } from "./types";

const experiences: IExperience[] = [
  {
    id: "taskworld",
    companyName: "Taskworld",
    url: "/experience/taskworld",
    role: "Full Stack Engineer",
    employmentPeriod: {
      start: new Date(2022, 0),
      get duration() {
        return formatDuration(this.start);
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
    summary: (
      <>
        <div className="py-2">
          <h4 className="text-xl pb-1 font-light">CONTRIBUTIONS</h4>
          <ul className="list-disc pl-6">
            <li>
              Revamped and extended a social commerce platform (using{" "}
              <i>Node.js</i> and <i>React.js</i>) which integrates with Facebook
              API and enables SME users to sell products via Facebook Messenger.
            </li>
            <li>
              Developed live chat plugin (using React.js) that can be used on
              websites even without React.js.
            </li>
            <li>
              Built <i>an analytics solution</i> for the social commerce
              platform (with <i>Node.js</i> and{" "}
              <i>open-source data visualization library</i>) which enables users
              to gain insight into their storefronts.
            </li>
            <li>
              Coded <i>an AI-driven feature</i> that delivers automated
              responses, on behalf of businesses, to customers’ queries, and
              enables businesses to improve AI models iteratively using
              real-world conversations over time.
            </li>
            <li>
              Worked on the AI management server which allows businesses to
              deploy their own models instantly on the dashboard, and
              automatically scales those models depending on the usage.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl pb-1 font-light">CHALLENGES</h4>
          <ul className="list-disc pl-6">
            <li>
              Ensured product quality through rapid iterations of the
              development process
            </li>
            <li>
              Implemented Event-Driven Architecture for storing user activity
              logs.
            </li>
            <li>Solved N+1 problems and implemented IAM on GraphQL server.</li>
          </ul>
        </div>
      </>
    ),
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
    summary: (
      <>
        <div className="py-2">
          <h4 className="text-xl pb-1 font-light">CONTRIBUTIONS</h4>
          <ul className="app-list pl-6">
            <li>
              Developed backend system for ERP solutions using{" "}
              <i>Laravel and MySQL</i>.
            </li>
            <li>
              Built a location tracking feature for the delivery management
              platform by integrating with{" "}
              <i>Firebase and Google Map&lsquo;s API</i>.
            </li>
            <li>
              Developed video chatting feature by integrating with{" "}
              <i>open-source library and using Javascript</i>.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl pb-1 font-light">CHALLENGES</h4>
          <ul className="app-list pl-6">
            <li>
              Designing DB schema for ERP systems that fit business needs.
            </li>
            <li>
              Ensuring consistency and robustness for cascading writes across
              multiple tables.
            </li>
            <li>
              Writing and debugging complex and performant queries that span
              across multiple tables.
            </li>
            <li>
              Designing REST APIs for multiple platforms including web, android
              and ios.
            </li>
          </ul>
        </div>
      </>
    ),
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
    summary: (
      <>
        <div className="py-2">
          <h4 className="text-xl pb-1 font-light">CONTRIBUTIONS</h4>
          <ul className="app-list pl-6">
            <li>
              Reviewed code for a project to learn about code architecture,
              coding styles from senior developers.
            </li>
            <li>
              Collaborated with senior developers in debugging process and
              removing dead code.
            </li>
            <li>
              Developed a blog app <i>(with Nuxt.js and Laravel)</i> to put my
              learned skills into use.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

export default experiences;
