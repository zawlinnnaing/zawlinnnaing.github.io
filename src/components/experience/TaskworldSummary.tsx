import React from "react";
import AppLink from "../common/AppLink";

export default function TaskworldSummary() {
  return (
    <div>
      <div>
        <ul>
          <li>
            Optimized Kanban board memory usage from linear to constant
            complexity, supporting thousands of items smoothly.
          </li>
          <li>
            Extracted a microservice from a legacy monolith, improving
            maintainability and development speed.
          </li>
          <li>
            Delivered{" "}
            <AppLink href="https://help.taskworld.com/en/articles/6357351-project-templates">
              project templates
            </AppLink>
            , starter templates, and{" "}
            <AppLink href="https://help.taskworld.com/en/articles/6521209-pin-task-note-and-subtask-to-tasklist">
              pinned task
            </AppLink>{" "}
            features.
          </li>
          <li>
            Identified performance bottlenecks in a legacy codebase and
            implemented optimizations.
          </li>
        </ul>
      </div>
    </div>
  );
}
