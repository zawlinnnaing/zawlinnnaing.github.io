import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import SEO from "../components/common/SEO";
import TableOfContent from "../components/common/TableOfContent";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import projects from "../data/projects";

const projectIds = projects.map((project) => `project-${project.name}`);

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects - Zaw Linn Naing" />
      <ScrollingProvider>
        <TableOfContent sectionIds={projectIds} outerClassName="12rem" />
        <div className="p-4 pt-16">
          {projects.map((project) => (
            <Section
              id={`project-${project.name}`}
              key={project.name}
              meta={{
                text: project.name,
              }}
            >
              <ProjectSection project={project} key={project.name} />
            </Section>
          ))}
        </div>
      </ScrollingProvider>
    </Layout>
  );
}
