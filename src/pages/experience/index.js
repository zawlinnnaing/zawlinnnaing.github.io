import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import SEO from "../../components/common/SEO";
import TableOfContent from "../../components/common/TableOfContent";
import ExperienceSection from "../../components/experience/ExperienceSection";
import Layout from "../../components/Layout";
import experiences from "../../data/experiences";

const experienceIds = experiences.map(
  (experience) => `experience-${experience.id}`
);

export default function ExperiencePage() {
  return (
    <ScrollingProvider>
      <Layout>
        <SEO title="My Experience - Zaw Linn Naing" />
        <TableOfContent
          expandedPanelHeight="12rem"
          sectionIds={experienceIds}
        />
        <div className="xl:px-8">
          <div className="py-4 pt-16">
            {experiences.map((experience) => (
              <Section
                id={`experience-${experience.id}`}
                key={`${experience.id}-${experience.companyName}`}
                meta={{
                  text: experience.companyName,
                }}
              >
                <ExperienceSection
                  experience={experience}
                  key={experience.id}
                />
              </Section>
            ))}
          </div>
        </div>
      </Layout>
    </ScrollingProvider>
  );
}
