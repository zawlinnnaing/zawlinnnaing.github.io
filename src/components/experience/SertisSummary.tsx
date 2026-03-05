import React from "react";
import AppLink from "../common/AppLink";

export default function SertisSummary() {
  return (
    <div>
      <div>
        <ul>
          <li>
            Led the adoption of{" "}
            <AppLink href="https://agentskills.io/home" openInNewWindow>
              AI Agent Skills
            </AppLink>{" "}
            to embed structured engineering expertise into AI agents (e.g.,
            Claude Code, Copilot), and built supporting tools.
          </li>
          <li>
            Implementeda production-grade PDF platform with annotation, document
            comparison, intelligent search, and AI-based table and asset
            detection.
          </li>
          <li>
            Designed and delivered a large-scale LLM-based conversational AI
            platform by integrating internal AI services, ensuring robustness,
            maintainability, and production readiness for enterprise adoption.
          </li>
          <li>
            Defined engineering standards, code review practices, and
            architectural guidelines to raise overall code quality and long-term
            maintainability.
          </li>
          <li>
            Re-architected a monolithic system into modular components,
            improving performance by <i>80%</i>.
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
