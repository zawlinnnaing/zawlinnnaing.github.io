import React from "react";
import SEO from "../components/common/SEO";
import Layout from "../components/Layout";
import ProjectSection from "../components/projects/ProjectSection";
import projects from "../data/projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects - Zaw Linn Naing" />
      <div className="p-4">
        {projects.map((project) => (
          <ProjectSection project={project} key={project.name} />
        ))}
      </div>
    </Layout>
  );
}
