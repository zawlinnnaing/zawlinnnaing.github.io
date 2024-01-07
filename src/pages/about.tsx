import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import styled from "styled-components";
import AppLink from "../components/common/AppLink";
import SEO from "../components/common/SEO";
import TableOfContent from "../components/common/TableOfContent";
import Layout from "../components/Layout";
import * as styles from "../css/about.module.css";
import { TECHNOLOGIES } from "../utils/constants";

const PrimarySpan = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;

const SectionHr = styled.hr`
  margin: 0 1rem;
`;

const SECTION_MAP = {
  frontend: "frontend",
  backend: "backend",
  tldr: "tldr",
};

export default function AboutPage(props: { location: Location }) {
  return (
    <>
      <Layout location={props.location}>
        <SEO
          title="About me - Zaw Lin Naing"
          description="I am a software engineer with 5 years of professional experience in developing web applications, using Node.js, React.js, Vue.js and Laravel. I also have hands-on experience in Docker, Kubernetes, AWS and Deep Learning/Machine Learning."
        />
        <section className="block">
          <ScrollingProvider>
            <TableOfContent
              sectionIds={Object.values(SECTION_MAP)}
              expandedPanelHeight="12rem"
            />
            <div className={`max-w-screen pt-16 ${styles.aboutContainer}`}>
              <Section
                id={SECTION_MAP.tldr}
                className={styles.aboutSection}
                meta={{
                  text: "TLDR",
                }}
              >
                <h1 className={styles.aboutSectionTitle}>TLDR;</h1>
                <p>
                  I am a software engineer with 5 years of professional
                  experience in developing web applications, using{" "}
                  <AppLink href={TECHNOLOGIES.nodejs.url}>Node.js</AppLink>,{" "}
                  <AppLink href={TECHNOLOGIES.reactJs.url}>React.js</AppLink>,{" "}
                  <AppLink href={TECHNOLOGIES.vue.url}>Vue.js</AppLink> and{" "}
                  <AppLink href={TECHNOLOGIES.laravel.url}>Laravel</AppLink>. I
                  also have hands-on experience in{" "}
                  <PrimarySpan>
                    Docker, Kubernetes, AWS and Deep Learning/Machine Learning
                  </PrimarySpan>
                  . I love to build scalable and maintainable software and
                  always prioritize clean software architecture in software
                  development. I am always eager to learn new technologies and
                  concepts to contribute more.
                </p>
                <p className="italic font-bold text-green-500">
                  What I can offer:
                </p>
                <ol className="list-disc ml-8">
                  <li>
                    Architect and develop web applications both backend and
                    frontend.
                  </li>
                  <li>
                    Setup and Deploy web apps on cloud providers, e.g,{" "}
                    <AppLink href="https://aws.amazon.com/">AWS</AppLink>,{" "}
                    <AppLink href="https://www.digitalocean.com/">
                      Digital Ocean
                    </AppLink>{" "}
                    using Docker, Kubernetes and Serverless.
                  </li>
                  <li>
                    Can work on Deep learning/Machine learning projects if
                    needed.
                  </li>
                  <li>
                    Research about new technologies to solve complex business
                    problems.
                  </li>
                </ol>
              </Section>
              <SectionHr />
              <Section
                id={SECTION_MAP.backend}
                className={styles.aboutSection}
                meta={{
                  text: "Backend Engineering",
                }}
              >
                <h1 className={styles.aboutSectionTitle}>
                  Backend Engineering
                </h1>
                <p className="my-4">
                  I can design and build scalable services with either{" "}
                  <PrimarySpan>microservice</PrimarySpan> or{" "}
                  <PrimarySpan>monolith</PrimarySpan> architectures. I can also
                  provide insights on which architecture to choose depending on
                  business requirements and constraints. I can solve business
                  problems with the following data storage technologies.
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
                    Cloud Object Storage:{" "}
                    <AppLink href="https://aws.amazon.com/s3">S3</AppLink>.
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
                    separation of concerns, decoupling business logic from
                    request/response layer or framework-specific functions into
                    separate modules. Changing layered architecture into modular
                    architecture for ease of splitting monolithic app into
                    micro-services.
                  </li>
                  <li>
                    Migrate monolith applications into micro-services and ensure{" "}
                    <AppLink href="https://en.wikipedia.org/wiki/Eventual_consistency">
                      eventual data consistency
                    </AppLink>{" "}
                    for such distributed services
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
                id={SECTION_MAP.frontend}
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
                  <span className="font-bold">
                    several enterprise-level web apps
                  </span>{" "}
                  using <AppLink href="https://reactjs.org/">React.js</AppLink>{" "}
                  and <AppLink href={TECHNOLOGIES.nextJS.url}>Next.js</AppLink>.
                  I also have experience in building{" "}
                  <span className="font-bold">
                    3+ small to medium sized applications
                  </span>{" "}
                  using <AppLink href="https://vuejs.org/">Vue.js</AppLink>.
                  Even though I am not as experience in Vue.js as React.js, I am
                  confident that I can transfer my knowledge regarding with
                  architectural patterns and principles from React. Thus, I
                  believe that I can build quality apps with both frameworks. I
                  can also setup{" "}
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
                  .
                </p>
                On the frontend-side, I can help you with:
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
          </ScrollingProvider>
        </section>
      </Layout>
    </>
  );
}
