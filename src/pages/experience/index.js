import React from "react";
import SEO from "../../components/common/SEO";
import ExperienceSection from "../../components/experience/ExperienceSection";
import Layout from "../../components/Layout";
import experiences from "../../data/experiences";

export default function ExperiencePage() {
  return (
    <Layout>
      <SEO title="My Experience - Zaw Linn Naing" />
      <div className="py-4">
        {experiences.map((experience) => (
          <ExperienceSection experience={experience} key={experience.id} />
        ))}
      </div>
    </Layout>
  );
}
