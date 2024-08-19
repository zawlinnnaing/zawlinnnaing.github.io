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
            Wrote frontend best practices and guidelines for the team to follow.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
      <SummarySection>
        <SummaryTitle title="CHALLENGES" />
        <SummaryList>
          <SummaryListItem>
            Shared technical knowledge within the team and enabled team members
            to be up-to-date with the latest industry best practices.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
    </div>
  );
}
