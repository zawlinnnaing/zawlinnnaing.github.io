import React from "react";
import {
  SummaryList,
  SummaryListItem,
  SummarySection,
  SummaryTitle,
} from "./summary";

export default function BriklSummary() {
  return (
    <div>
      <SummarySection>
        <SummaryTitle title="CONTRIBUTIONS" />
        <SummaryList>
          <SummaryListItem>
            Mentored a fellow engineer, providing guidance and better solution
            suggestions.
          </SummaryListItem>
          <SummaryListItem>
            Implemented scalable bulk upload products feature that can import
            multiple data points for products using serverless framework.
          </SummaryListItem>
          <SummaryListItem>
            Enhanced pricing feature adding price markups, and allowing
            merchants to add costs for products.
          </SummaryListItem>
          <SummaryListItem>
            Enabled data collection for merchants from their customers in
            checkout flow using custom data fields.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
      <SummarySection>
        <SummaryTitle title="CHALLENGES" />
        <SummaryListItem>
          Solved n + 1 issues on GraphQL queries, reducing latency, database
          calls and inter-service communication.
        </SummaryListItem>
      </SummarySection>
    </div>
  );
}
