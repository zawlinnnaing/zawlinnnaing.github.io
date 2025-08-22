import React from "react";
import {
  SummaryList,
  SummaryListItem,
  SummarySection,
  SummaryTitle,
} from "./summary";

export default function SertisSummary() {
  return (
    <div>
      <SummarySection>
        <SummaryTitle title="CONTRIBUTIONS" />
        <SummaryList>
          <SummaryListItem>
            Implemented a PDF viewer with annotation features, compare two
            documents side-by-side, intelligent searching and detection of
            tables, and assets within documents by integrating with AI services.
          </SummaryListItem>
          <SummaryListItem>
            Spear-headed in the research for the PDF viewer integration and
            became a go-to person for the team in the domain.
          </SummaryListItem>
          <SummaryListItem>
            Designed and developed a large language model (LLM) conversational
            AI platform by integrating in-house AI services, adopted internally
            by a leading bank in Thailand.
          </SummaryListItem>
          <SummaryListItem>
            Wrote frontend best practices and guidelines for the team to follow.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
      <SummarySection>
        <SummaryTitle title="CHALLENGES" />
        <SummaryList>
          <SummaryListItem>
            Managed frequently changing client requirements and consistently
            delivered solutions within accelerated timelines.
          </SummaryListItem>
          <SummaryListItem>
            Faced with a monolithic legacy codebase causing high CPU usage,
            re-architected the system into modular components and applied
            specialized technologies for each, achieving 80% improvement in
            performance and resource efficiency.
          </SummaryListItem>
          <SummaryListItem>
            Shared technical knowledge within the team and enabled team members
            to be up-to-date with the latest industry best practices.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
    </div>
  );
}
