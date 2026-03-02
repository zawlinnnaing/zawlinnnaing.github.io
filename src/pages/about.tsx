import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import AppLink from "../components/common/AppLink";
import SEO from "../components/common/SEO";
import TableOfContent from "../components/common/TableOfContent";
import Layout from "../components/Layout";
import * as styles from "../css/about.module.css";
import { TECHNOLOGIES } from "../utils/constants";

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
          description="I am a software engineer with over 7 years of professional experience in developing web applications, using Node.js, React.js, Vue.js and Laravel. I also have hands-on experience in Docker, Kubernetes, AWS and Deep Learning/Machine Learning."
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
                  I am a software engineer with over 7 years of professional
                  experience building web applications across multiple
                  technology stacks. I have strong expertise in the JavaScript
                  ecosystem (
                  <AppLink href={TECHNOLOGIES.nodejs.url}>Node.js</AppLink>,{" "}
                  <AppLink href={TECHNOLOGIES.reactJs.url}>React</AppLink>,{" "}
                  etc), and solid experience working with{" "}
                  <AppLink href={TECHNOLOGIES.python.url}>Python</AppLink> and{" "}
                  <AppLink href={TECHNOLOGIES.golang.url}>Golang</AppLink> for
                  backend services, APIs, and system-level tasks. I am
                  comfortable working with a wide range of technologies and
                  tools. My experience includes both{" "}
                  <span className="font-bold text-green-500">SQL</span> and{" "}
                  <span className="font-bold text-green-500">
                    NoSQL databases
                  </span>
                  , containerization and orchestration (
                  <AppLink href={TECHNOLOGIES.docker.url}>Docker</AppLink>,{" "}
                  <AppLink href={TECHNOLOGIES.kubernetes.url}>
                    Kubernetes
                  </AppLink>
                  ), and deploying and operating systems on major cloud
                  platforms such as{" "}
                  <AppLink href={TECHNOLOGIES.aws.url}>AWS</AppLink>,{" "}
                  <AppLink href={TECHNOLOGIES.gcloud.url}>Google Cloud</AppLink>
                  , and <AppLink href={TECHNOLOGIES.azure.url}>Azure</AppLink>.
                  I adapt quickly to different stacks and architectures, and I
                  am confident working across diverse technical environments to
                  deliver scalable, maintainable, and production-ready
                  solutions.{" "}
                </p>
                <h2 className="font-bold text-lg my-2">What I can offer</h2>
                <ol className="list-disc ml-8">
                  <li>
                    Design and develop scalable, maintainable backend and
                    frontend systems across multiple tech stacks.
                  </li>
                  <li>
                    Architect clean, well-structured systems with long-term
                    maintainability in mind.
                  </li>
                  <li>
                    Build and deploy cloud-native applications on AWS, Google
                    Cloud, and Azure.
                  </li>
                  <li>
                    Work with SQL and NoSQL databases, optimizing performance
                    and reliability.
                  </li>
                  <li>
                    Contribute to AI/ML initiatives and integrate AI
                    capabilities into production systems.
                  </li>
                  <li>
                    Use AI agents and automation tools to streamline development
                    workflows and increase team productivity.
                  </li>
                  <li>
                    Research and evaluate new technologies to solve complex
                    business problems efficiently.
                  </li>
                </ol>
              </Section>
              <hr className="mx-4" />
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
                <p>
                  I design and build scalable backend systems using both
                  monolithic and microservices architectures. I can evaluate
                  business requirements, team size, operational complexity, cost
                  constraints, and long-term scalability goals to recommend the
                  most suitable architecture. I focus on building systems that
                  are maintainable today and adaptable tomorrow. I have strong
                  experience working with a wide range of data storage
                  technologies and choosing the right tool based on consistency,
                  scalability, query patterns, and performance requirements.{" "}
                </p>
                <p className="font-bold">Data Technologies I Work With</p>
                <ul className="list-disc ml-8">
                  <li>
                    <span className="font-bold">NoSQL:</span>{" "}
                    <AppLink href={TECHNOLOGIES.mongodb.url}>MongoDB</AppLink>,{" "}
                    <AppLink href={TECHNOLOGIES.elasticsearch.url}>
                      Elasticsearch
                    </AppLink>
                    ,{" "}
                    <AppLink href={TECHNOLOGIES.dynamodb.url}>DynamoDB</AppLink>
                    , <AppLink href={TECHNOLOGIES.athena.url}>Athena</AppLink>
                  </li>
                  <li>
                    <span className="font-bold">SQL:</span>{" "}
                    <AppLink href={TECHNOLOGIES.sqlite.url}>SQLite</AppLink>,{" "}
                    <AppLink href={TECHNOLOGIES.mysql.url}>MySQL</AppLink>,{" "}
                    <AppLink href={TECHNOLOGIES.postgresql.url}>
                      PostgreSQL
                    </AppLink>
                  </li>
                  <li>
                    <span className="font-bold">
                      In-memory storage & caching:
                    </span>{" "}
                    <AppLink href={TECHNOLOGIES.redis.url}>Redis</AppLink>
                  </li>
                  <li>
                    <span className="font-bold">Cloud object storage:</span>{" "}
                    <AppLink href={TECHNOLOGIES.aws.url}>AWS S3</AppLink>,{" "}
                    <AppLink href={TECHNOLOGIES.azure.url}>
                      Azure Blob Storage
                    </AppLink>
                    ,{" "}
                    <AppLink href={TECHNOLOGIES.gcloud.url}>
                      Google Cloud Storage
                    </AppLink>
                  </li>
                </ul>
                <p>
                  I am comfortable learning new frameworks, languages, and
                  technologies whenever they are the right fit for solving
                  business problems.
                </p>
                <h2 className="text-lg font-bold my-2">
                  What I can offer for backend engineering
                </h2>
                <ul className="list-disc ml-8">
                  <li>
                    <span className="font-bold">
                      System Architecture Design
                    </span>
                    <p>
                      Design end-to-end backend architecture for web
                      applications, including service boundaries, communication
                      patterns, data flow, and deployment strategy.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Backend Development</span>
                    <p>
                      Build production-ready backend systems using Node.js and
                      Laravel, with clean architecture and clear separation of
                      concerns.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">
                      Codebase Refactoring & Modernization
                    </span>
                    <p>Improve existing backend systems by:</p>
                    <ul className="list-disc ml-8">
                      <li>Enhancing readability and maintainability</li>
                      <li>
                        Decoupling business logic from framework-specific layers
                      </li>
                      <li>Extracting domain logic into modular components</li>
                      <li>
                        Transforming tightly coupled layered architectures into
                        modular designs
                      </li>
                      <li>
                        Preparing monolithic systems for gradual microservices
                        migration
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      Monolith to Microservices Migration
                    </span>
                    <p>
                      Plan and execute service decomposition strategies, handle
                      distributed data management, and implement eventual
                      consistency where appropriate.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">
                      Database Design & Optimization
                    </span>
                    <p>
                      Design efficient schemas for both SQL and NoSQL systems
                      based on access patterns and business requirements,
                      including indexing, performance tuning, and data modeling.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">API Design & Integration</span>
                    <p>
                      Develop and maintain RESTful and GraphQL APIs, integrate
                      third-party services, and design stable, versioned API
                      contracts.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Testing & Reliability</span>
                    <p>
                      Write unit and integration tests to ensure system
                      correctness, stability, and long-term maintainability.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">
                      Containerization & Deployment
                    </span>
                    <p>
                      Containerize applications using Docker and orchestrate
                      multi-service environments with Kubernetes, including load
                      balancing with Nginx and cloud-native deployment
                      strategies.
                    </p>
                  </li>
                </ul>
                <p>
                  I approach backend engineering with a strong focus on
                  scalability, maintainability, reliability, and alignment with
                  real-world business constraints.
                </p>
              </Section>
              <hr className="mx-4" />
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
                  I have extensive experience building enterprise-grade web
                  applications using modern JavaScript frontend frameworks,
                  including{" "}
                  <AppLink href={TECHNOLOGIES.reactJs.url}>React</AppLink>,{" "}
                  <AppLink href={TECHNOLOGIES.nextJS.url}>Next.js</AppLink>, and{" "}
                  <AppLink href={TECHNOLOGIES.vue.url}>Vue</AppLink>. I design{" "}
                  <strong>
                    scalable, high-performance, and maintainable frontend
                    systems
                  </strong>
                  that support complex business requirements and long-term
                  growth.
                  <br />
                  My frontend work is grounded in strong architectural
                  principles. I prioritize clean structure, predictable state
                  management, separation of concerns, and long-term
                  maintainability. I am experienced in building{" "}
                  <AppLink href={TECHNOLOGIES.pwa.url}>
                    Progressive Web Applications (PWA)
                  </AppLink>
                  , optimizing performance, and ensuring production readiness
                  for large-scale systems.
                  <br />I strongly advocate writing pure, reusable components
                  and designing applications around well-structured,
                  unidirectional data flow architectures such as{" "}
                  <AppLink href={TECHNOLOGIES.redux.url}>Redux</AppLink> and
                  similar state management patterns.
                </p>
                <h2 className="text-lg font-bold my-2">
                  What I Offer in Frontend Engineering
                </h2>
                <ul className="list-disc ml-8">
                  <li>
                    <span className="font-bold">
                      Enterprise Frontend Development
                    </span>
                    <p>
                      Architect and build large-scale, production-ready
                      applications using popular JavaScript frameworks such as
                      React, Next.js, and Vue.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">
                      Frontend Architecture & Refactoring
                    </span>
                    <p>
                      Refactor and restructure existing codebases to improve
                      modularity, maintainability, and scalability. Implement
                      predictable state management patterns and clean component
                      hierarchies to support faster feature development.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">
                      Design System Adoption & Integration
                    </span>
                    <p>
                      Integrate and customize enterprise design systems and
                      component libraries to ensure consistency and scalability
                      across products.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Testing & Code Quality</span>
                    <p>
                      Write unit tests and behavior-driven tests to improve
                      system reliability and reduce regression risks.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">Performance Optimization</span>
                    <p>
                      Enhance application performance through bundle
                      optimization, code splitting, rendering improvements, and
                      efficient state management.
                    </p>
                  </li>
                  <li>
                    <span className="font-bold">PWA & Deployment</span>
                    <p>
                      Build and deploy static sites, SPAs, and PWAs using modern
                      build pipelines, containerization, and scalable hosting
                      configurations.
                    </p>
                  </li>
                </ul>
                <p>
                  I approach frontend engineering as system design; ensuring
                  that applications remain robust, scalable, and adaptable as
                  business and product requirements evolve.
                </p>
              </Section>
            </div>
          </ScrollingProvider>
        </section>
      </Layout>
    </>
  );
}
