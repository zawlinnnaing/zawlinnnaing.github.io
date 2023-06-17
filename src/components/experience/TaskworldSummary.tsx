import React from "react";
import {
  SummaryList,
  SummaryListItem,
  SummarySection,
  SummaryTitle,
} from "./summary";
import AppLink from "../common/AppLink";

export default function TaskworldSummary() {
  return (
    <div>
      <SummarySection>
        <SummaryTitle title="CONTRIBUTIONS" />
        <SummaryList>
          <SummaryListItem>
            Optimized Kanban board performance and memory usage (from linear
            space complexity to constant space complexity), enabling smooth user
            interaction and experience even when there are thousands of items
            inside the board.
          </SummaryListItem>
          <SummaryListItem>
            Extracted and deployed a micro service from legacy monolith
            codebase, allowing easier maintenance and faster development speed.
          </SummaryListItem>
          <SummaryListItem>
            Developed{" "}
            <AppLink href="https://help.taskworld.com/en/articles/6357351-project-templates">
              project templates
            </AppLink>
            , starter templates, and{" "}
            <AppLink href="https://help.taskworld.com/en/articles/6521209-pin-task-note-and-subtask-to-tasklist">
              pinned task
            </AppLink>{" "}
            features in a timely manner.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
      <SummarySection>
        <SummaryTitle title="CHALLENGES" />
        <SummaryList>
          <SummaryListItem>
            Developed and modified complex features on the platform with little
            or no regression.
          </SummaryListItem>
          <SummaryListItem>
            Navigated through complex and legacy codebase to identify
            performance bottlenecks and implemented optimization solutions.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
    </div>
  );
}
