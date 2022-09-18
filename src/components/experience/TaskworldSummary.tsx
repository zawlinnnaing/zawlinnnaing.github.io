import React from "react";
import * as SummaryStyles from "./summary.module.css";

export default function TaskworldSummary() {
  return (
    <div>
      <section className="py-2">
        <h1 className={SummaryStyles.sectionTitle}>CONTRIBUTIONS</h1>
        <ul className={SummaryStyles.list}>
          <li>
            Optimized Kanban board performance and memory usage (from linear
            space complexity to constant space complexity), enabling smooth user
            interaction and experience even when there are thousands of items
            inside the board.
          </li>
          <li>
            Extracted and deployed a micro service from legacy monolith
            codebase, allowing easier maintenance and faster development speed.
          </li>
          <li>
            Developed{" "}
            <a
              href="https://help.taskworld.com/en/articles/6357351-project-templates"
              target="_blank"
            >
              project templates
            </a>
            , starter templates, and{" "}
            <a
              href="https://help.taskworld.com/en/articles/6521209-pin-task-note-and-subtask-to-tasklist"
              target="_blank"
            >
              pinned task
            </a>{" "}
            features in a timely manner.
          </li>
        </ul>
      </section>
      <section>
        <h1 className={SummaryStyles.sectionTitle}>CHALLENGES</h1>
        <ul className={SummaryStyles.list}>
          <li>
            Developed and modified complex features on the platform with little
            or no regression.
          </li>
          <li>
            Navigated through complex and legacy codebase to identify
            performance bottlenecks and implemented optimization solutions.
          </li>
        </ul>
      </section>
    </div>
  );
}
