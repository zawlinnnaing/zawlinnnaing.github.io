import React from "react";
import AppLink from "../common/AppLink";

export default function SertisSummary() {
  return (
    <div>
      <div>
        <h4>CONTRIBUTIONS</h4>
        <ul>
          <li>
            Led the adoption of{" "}
            <AppLink href="https://agentskills.io/home">
              AI Agent Skills
            </AppLink>{" "}
            to embed structured engineering expertise into AI agents (e.g.,
            Claude Code, Copilot), aligning agent behavior with internal
            standards for estimation, feature discovery, and code review, and
            built the necessary CLI tooling to be used by AI agents.
          </li>
          <li>
            Implemented a production-grade PDF platform with annotation,
            dual-document comparison, intelligent search, and AI-powered
            detection of tables and document assets, with strong focus on
            performance, scalability, and clean architecture.
          </li>
          <li>
            Led technical research and architectural decisions for PDF viewer
            integration, defining implementation standards and serving as the
            domain authority for the team.
          </li>
          <li>
            Designed and delivered a large-scale LLM-based conversational AI
            platform by integrating in-house AI services, ensuring robustness,
            maintainability, and production readiness for enterprise adoption.
          </li>
          <li>
            Defined and enforced frontend engineering standards, code review
            practices, and architectural guidelines to raise overall code
            quality and long-term maintainability.
          </li>
        </ul>
      </div>
      <div>
        <h4>CHALLENGES & IMPACT</h4>
        <ul>
          <li>
            Delivered complex features under frequently changing requirements
            while maintaining high engineering standards, strong test coverage,
            and system reliability.
          </li>
          <li>
            Re-architected a resource-intensive monolithic system into modular,
            purpose-driven components with clear separation of concerns,
            achieving 80% performance improvement and significantly better
            resource efficiency.
          </li>
          <li>
            Proactively identified technical risks, drove refactoring
            initiatives, and balanced delivery speed with sustainable design to
            prevent long-term technical debt.
          </li>
          <li>
            Mentored engineers and promoted knowledge sharing to ensure
            consistent application of modern engineering practices across the
            team.
          </li>
        </ul>
      </div>
    </div>
  );
}
