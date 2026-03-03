import React from "react";
import {
  SummaryList,
  SummaryListItem,
  SummarySection,
  SummaryTitle,
} from "./summary";
import AppLink from "../common/AppLink";

export default function SertisSummary() {
  return (
    <div>
      <SummarySection>
        <SummaryTitle title="CONTRIBUTIONS" />
        <SummaryList>
          <SummaryListItem>
            Led the adoption of{" "}
            <AppLink href="https://agentskills.io/home">
              AI Agent Skills
            </AppLink>{" "}
            to embed structured engineering expertise into AI agents (e.g.,
            Claude Code, Copilot), aligning agent behavior with internal
            standards for estimation, feature discovery, and code review, and
            built the necessary CLI tooling to be used by AI agents.
          </SummaryListItem>
          <SummaryListItem>
            Implemented a production-grade PDF platform with annotation,
            dual-document comparison, intelligent search, and AI-powered
            detection of tables and document assets, with strong focus on
            performance, scalability, and clean architecture.
          </SummaryListItem>
          <SummaryListItem>
            Led technical research and architectural decisions for PDF viewer
            integration, defining implementation standards and serving as the
            domain authority for the team.
          </SummaryListItem>
          <SummaryListItem>
            Designed and delivered a large-scale LLM-based conversational AI
            platform by integrating in-house AI services, ensuring robustness,
            maintainability, and production readiness for enterprise adoption.
          </SummaryListItem>
          <SummaryListItem>
            Defined and enforced frontend engineering standards, code review
            practices, and architectural guidelines to raise overall code
            quality and long-term maintainability.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
      <SummarySection>
        <SummaryTitle title="CHALLENGES & IMPACT" />
        <SummaryList>
          <SummaryListItem>
            Delivered complex features under frequently changing requirements
            while maintaining high engineering standards, strong test coverage,
            and system reliability.
          </SummaryListItem>
          <SummaryListItem>
            Re-architected a resource-intensive monolithic system into modular,
            purpose-driven components with clear separation of concerns,
            achieving 80% performance improvement and significantly better
            resource efficiency.
          </SummaryListItem>
          <SummaryListItem>
            Proactively identified technical risks, drove refactoring
            initiatives, and balanced delivery speed with sustainable design to
            prevent long-term technical debt.
          </SummaryListItem>
          <SummaryListItem>
            Mentored engineers and promoted knowledge sharing to ensure
            consistent application of modern engineering practices across the
            team.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
    </div>
  );
}
