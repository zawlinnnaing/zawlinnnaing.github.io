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
            Improved integration testing flow enabling developers to seed and
            cleanup test data with ease. Reducing lines of code to write tests
            by half.
          </SummaryListItem>
          <SummaryListItem>
            Implemented scalable bulk upload products feature that can import
            multiple data points for products using serverless framework.
          </SummaryListItem>
          <SummaryListItem>
            Enhanced pricing feature adding price markups, tiered pricing and
            cost configurations; allowing merchants to update price and
            automatically propagated to all micro-stores.
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
        <SummaryListItem>
          Optimized batch operations with complex business logic to be executed
          under constant time.
        </SummaryListItem>
      </SummarySection>
    </div>
  );
}
