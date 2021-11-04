import React from "react";
import { Helmet } from "react-helmet";
import { ScrollingProvider, Section } from "react-scroll-section";
import styled from "styled-components";
import AboutSidebar from "../components/about/AboutSidebar";
import AppLink from "../components/common/AppLink";
import SEO from "../components/common/SEO";
import Layout from "../components/Layout";
import * as styles from "../css/about.module.css";

const PrimarySpan = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;

const SectionHr = styled.hr`
  margin: 0 1rem;
`;

const SECTIONS = [
  {
    id: "tldr",
    text: "TLDR",
  },
  { id: "backend", text: "Backend Engineering" },
  {
    id: "frontend",
    text: "Frontend Engineering",
  },
];

export default function AboutPage() {
  return (
    <>
      <Layout>
        <SEO title="About me - Zaw Lin Naing" />
        <ScrollingProvider>
          <section className="block">
            <AboutSidebar />
            <div
              className={`flex-grow max-w-screen ${styles.contentHeight} overflow-y-scroll ${styles.aboutContainer}`}
            >
              <Section
                id="tldr"
                className={styles.aboutSection}
                meta={{
                  text: "TLDR",
                }}
              >
                <h1 className={styles.aboutSectionTitle}>TLDR</h1>
                <p>
                  I am <PrimarySpan>a software engineer</PrimarySpan>, who
                  mainly works on <PrimarySpan>web development</PrimarySpan>. I
                  have at least <PrimarySpan>3 years of experience</PrimarySpan>{" "}
                  in <PrimarySpan>backend development</PrimarySpan> using{" "}
                  <AppLink href="https://nodejs.org/en/">Node.js</AppLink> and{" "}
                  <AppLink href="https://laravel.com/">Laravel</AppLink>. For{" "}
                  <PrimarySpan>frontend development</PrimarySpan>, I specialize
                  mainly in{" "}
                  <AppLink href="https://reactjs.org/">React.js</AppLink> and
                  have intermediate experience in{" "}
                  <AppLink href="https://vuejs.org/">Vue.js</AppLink>. I also
                  have hands-on experience in{" "}
                  <PrimarySpan>
                    Docker, Kubernetes, and Deep Learning/Machine Learning
                  </PrimarySpan>
                  . I love to build scalable and maintainable software and
                  always prioritize good software architecture in software
                  development. I am always eager to learn new technologies and
                  concepts depending on requirements.
                </p>
                <p className="italic">What I can offer:</p>

                <ol className="list-disc ml-8">
                  <li>
                    Architect and develop web apps both backend and frontend.
                  </li>
                  <li>
                    Can also work on Deep learning/Machine learning projects if
                    needed.
                  </li>
                  <li>
                    Setup and Deploy web apps on Docker, Kubernetes and
                    DigitalOcean droplets.
                  </li>
                  <li>
                    Research about new technologies to solve particular
                    problems.
                  </li>
                </ol>
              </Section>
              <SectionHr />
              <Section
                id="backend"
                className={styles.aboutSection}
                meta={{
                  text: "Backend Engineering",
                }}
              >
                <h1 className={styles.aboutSectionTitle}>
                  Backend Engineering
                </h1>
                <p className="my-4">
                  I have at least 1 year of experience working with{" "}
                  <AppLink href="https://laravel.com/">PHP(Laravel)</AppLink>{" "}
                  and over 2 years of experience with{" "}
                  <AppLink href="https://nodejs.org/en/">
                    Javascript(Node.js)
                  </AppLink>
                  . I can also design and solve business problems with following
                  data storage technologies.
                </p>
                <ul className="list-disc ml-8">
                  <li>
                    NoSQL database:{" "}
                    <span className="app-link">
                      <AppLink href="https://www.mongodb.com/">MongoDB</AppLink>
                    </span>
                    .
                  </li>
                  <li>
                    SQL databases:{" "}
                    <AppLink href="https://www.mysql.com/">MySQL</AppLink>,{" "}
                    <AppLink href="https://www.postgresql.org/">
                      PostgreSQL
                    </AppLink>
                    .
                  </li>
                  <li>
                    In-memory storage:{" "}
                    <AppLink href="https://redis.io/">Redis</AppLink>.
                  </li>
                  <li>
                    Cloud Storage:{" "}
                    <AppLink href="https://www.digitalocean.com/products/spaces/">
                      DigitalOcean S3
                    </AppLink>
                    .
                  </li>
                </ul>
                <p>
                  I am happy to learn any frameworks, programming languages or
                  technologies as a whole that will help in solving business
                  problems. What I can offer for backend engineering includes:
                </p>
                <ul className="list-disc ml-8">
                  <li>
                    Designing the overall system architecture for web
                    applications.
                  </li>
                  <li>
                    Developing the backend system using Node.js and Laravel.
                  </li>
                  <li>
                    Refactoring existing backend code by improving readability,
                    separating concerns into separate classes/functions/modules,
                    decoupling business logic from request/response layer or
                    framework-specific functions into separate modules. Changing
                    layered architecture into modular architecture for ease of
                    splitting monolithic app into micro-services.
                  </li>
                  <li>
                    Database schema design, including SQL and NoSQL to satisfy
                    business needs.
                  </li>
                  <li>
                    Working with APIs, including integration with third-party
                    APIs, RESTful API development and GraphQL development.
                  </li>
                  <li>Writing unit tests and integration tests</li>
                  <li>
                    Containerization of web applications using{" "}
                    <AppLink href="https://www.docker.com/">Docker</AppLink> and
                    deploying multiple services using{" "}
                    <AppLink href="https://kubernetes.io/">Kubernetes</AppLink>{" "}
                    and Nginx load balancer.
                  </li>
                </ul>
              </Section>
              <SectionHr />
              <Section
                id="frontend"
                className={styles.aboutSection}
                meta={{
                  text: "Frontend Engineering",
                }}
              >
                <h1 className={styles.aboutSectionTitle}>
                  Frontend Engineering
                </h1>
                <p>
                  I have built{" "}
                  <span className="font-bold">3 enterprise-level web apps</span>{" "}
                  and <span className="font-bold">2 websites</span> (including
                  this one) using{" "}
                  <AppLink href="https://reactjs.org/">React.js</AppLink>. I
                  also have experience in building{" "}
                  <span className="font-bold">
                    3+ small to medium sized applications
                  </span>{" "}
                  using <AppLink href="https://vuejs.org/">Vue.js</AppLink>.
                  Even though I am not as experience in Vue.js as React.js, I
                  can transfer my knowledge regarding with architectural
                  patterns and principles from React. Thus, I believe that I can
                  build quality apps with both frameworks. I can also setup{" "}
                  <AppLink href="https://web.dev/progressive-web-apps/">
                    PWA
                  </AppLink>{" "}
                  using above mentioned frameworks. I am currently a fan of
                  writing{" "}
                  <AppLink href="https://blog.logrocket.com/react-pure-components-functional/">
                    pure
                  </AppLink>{" "}
                  components and developing in{" "}
                  <AppLink href="https://redux.js.org/tutorials/fundamentals/part-1-overview">
                    redux architecture
                  </AppLink>
                </p>
                .<br /> On the frontend-side, I can help you with:
                <ul className="list-disc ml-8">
                  <li>
                    Development of enterprise level applications with{" "}
                    <AppLink>React.js</AppLink> and <AppLink>Vue.js</AppLink>.
                  </li>
                  <li>
                    Refactoring codebase to implement Redux architecture and
                    pure components, for better maintainability, separation of
                    concerns, and thus, faster development speed.
                  </li>
                  <li>
                    Adoption of design systems and integration with their
                    components library, such as{" "}
                    <AppLink href="https://www.carbondesignsystem.com/">
                      Carbon
                    </AppLink>
                    , <AppLink href="https://ant.design/">Ant.design</AppLink>.
                  </li>
                  <li>Writing unit tests and behavioral driven tests.</li>
                  <li>
                    Deployment of static websites,{" "}
                    <AppLink href="https://en.wikipedia.org/wiki/Single-page_application#:~:text=A%20single%2Dpage%20application%20(SPA,browser%20loading%20entire%20new%20pages.">
                      SPA
                    </AppLink>
                    , and{" "}
                    <AppLink href="https://web.dev/progressive-web-apps/">
                      PWA
                    </AppLink>{" "}
                    using containerization technologies or web server.
                  </li>
                </ul>
              </Section>
            </div>
          </section>
        </ScrollingProvider>
      </Layout>
    </>
  );
}
