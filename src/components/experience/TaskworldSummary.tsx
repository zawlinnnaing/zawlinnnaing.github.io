import React from "react";
import AppLink from "../common/AppLink";

export default function TaskworldSummary() {
  return (
    <div>
      <div>
        <h4>CONTRIBUTIONS</h4>
        <ul>
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
            <AppLink href="https://help.taskworld.com/en/articles/6357351-project-templates">
              project templates
            </AppLink>
            , starter templates, and{" "}
            <AppLink href="https://help.taskworld.com/en/articles/6521209-pin-task-note-and-subtask-to-tasklist">
              pinned task
            </AppLink>{" "}
            features in a timely manner.
          </li>
        </ul>
      </div>
      <div>
        <h4>CHALLENGES & IMPACT</h4>
        <ul>
          <li>
            Developed and modified complex features on the platform with little
            or no regression.
          </li>
          <li>
            Navigated through complex and legacy codebase to identify
            performance bottlenecks and implemented optimization solutions.
          </li>
        </ul>
      </div>
    </div>
  );
}
