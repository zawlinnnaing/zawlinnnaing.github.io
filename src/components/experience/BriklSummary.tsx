import React from "react";

export default function BriklSummary() {
  return (
    <div>
      <div>
        <h4>CONTRIBUTIONS</h4>
        <ul>
          <li>
            Mentored a fellow engineer, providing guidance and better solution
            suggestions.
          </li>
          <li>
            Improved integration testing flow enabling developers to seed and
            cleanup test data with ease. Reducing lines of code to write tests
            by half.
          </li>
          <li>
            Implemented scalable bulk upload products feature that can import
            multiple data points for products using serverless framework.
          </li>
          <li>
            Enhanced pricing feature adding price markups, tiered pricing and
            cost configurations; allowing merchants to update price and
            automatically propagated to all micro-stores.
          </li>
          <li>
            Enabled data collection for merchants from their customers in
            checkout flow using custom data fields.
          </li>
        </ul>
      </div>
      <div>
        <h4>CHALLENGES & IMPACT</h4>
        <ul>
          <li>
            Solved n + 1 issues on GraphQL queries, reducing latency, database
            calls and inter-service communication.
          </li>
          <li>
            Optimized batch operations with complex business logic to be
            executed under constant time.
          </li>
        </ul>
      </div>
    </div>
  );
}
