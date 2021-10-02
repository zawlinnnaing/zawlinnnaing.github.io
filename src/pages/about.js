import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";
import * as styles from "../css/about.module.css";

const PrimarySpan = styled.span`
  color: var(--accent-color);
`;

const SectioNHr = styled.hr`
  margin: 0 1rem;
`;

const SECTIONS = [
  {
    id: "tldr",
    text: "TLDR",
  },
  { id: "backend", text: "Backend Engineering" },
];

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About me, Zaw Lin Naing</title>
      </Helmet>
      <section className="lg:flex block lg:gap-4 break-all">
        <div className="lg:border-r-2 lg:border-b-0 border-b-2 border-gray-900 dark:border-white p-4 min-w-200">
          <p>Table of content</p>
          <ul className="my-8">
            {SECTIONS.map((appSection) => (
              <li className="p-4 sm:p-2" key={appSection.id}>
                <a
                  href={`#${appSection.id}`}
                  key={appSection.id}
                  className="text-green-500"
                >
                  {appSection.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow max-w-screen">
          <section id="tldr" className={styles.aboutSection}>
            <h1 className={styles.aboutSectionTitle}>TLDR</h1>
            <p className="my-4">
              I am <span className="text-green-500">a software engineer</span>,
              who mainly works on{" "}
              <span className="text-green-500">web development</span>. I have at
              least{" "}
              <span className="text-green-500">3 years of experience</span> in{" "}
              <span className="text-green-500">backend development </span>. I
              also have hands-on experience on{" "}
              <PrimarySpan>
                Docker, Kubernetes, and Deep Learning/Machine Learning
              </PrimarySpan>
              . I love to build scalable and maintainable software and always
              prioritize good software architecture in software development. I
              am always eager to learn new technologies and concepts depending
              on requirements.
            </p>
            <p className="italic">What I can offer:</p>

            <ol className="list-disc list-inside ml-4">
              <li>
                Developed and maintained web apps both backend and frontend.
              </li>
              <li>
                Can also work on Deep learning/Machine learning if needed.
              </li>
              <li>Setup and Deploy web apps on Docker and Kubernetes.</li>
              <li>
                Research about new technologies to solve particular problems.
              </li>
            </ol>
          </section>
          <SectioNHr />
          <section id="backend" className={styles.aboutSection}>
            <h1 className={styles.aboutSectionTitle}>Backend Engineering</h1>
            <p className="my-4">
              I have at least 1 year of experience working with{" "}
              <PrimarySpan>PHP(Laravel)</PrimarySpan> and over 2 years of
              experience with <PrimarySpan>Javascript(Node.js)</PrimarySpan>. I
              can also design and solve business problems with following data
              storage technologies.
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                NoSQL database: <span className="font-bold">MongoDB</span>.
              </li>
              <li>
                SQL databases:{" "}
                <span className="font-bold">MySQL, PostgreSQL</span>.
              </li>
              <li>
                In-memory storage: <span className="font-bold">Redis</span>.
              </li>
              <li>
                Cloud Storage:{" "}
                <span className="font-bold">
                  Amazon S3, DigitalOcean Block Storage
                </span>
                .
              </li>
            </ul>
            <p>
              My current skill sets and experience for backend Engineering
              include:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li></li>
            </ul>
          </section>
        </div>
      </section>
    </Layout>
  );
}
