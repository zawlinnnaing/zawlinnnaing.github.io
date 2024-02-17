import React from "react";
import {
  SummaryList,
  SummaryListItem,
  SummarySection,
  SummaryTitle,
} from "./summary";
import AppLink from "../common/AppLink";

export default function OozouSummary() {
  return (
    <div>
      <SummarySection>
        <SummaryTitle title="CONTRIBUTIONS" />
        <SummaryList>
          <SummaryListItem>
            Core developer of{" "}
            <AppLink href="https://beta.slimwiki.com" openInNewWindow>
              beta.slimwiki.com
            </AppLink>
            , implementing rich-text editor with ability to format texts, insert
            images, videos, links and create interactive tables.
          </SummaryListItem>
          <SummaryListItem>
            Developed editor version history, wiki search and super-admin
            dashboard features.
          </SummaryListItem>
          <SummaryListItem>
            Improved editing experience by implementing a real-time
            collaboration feature with Conflict-Free Replicated Date Type(CRDT).
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
      <SummarySection>
        <SummaryTitle title="CHALLENGES" />
        <SummaryList>
          <SummaryListItem>
            Research and benchmarked various WYSIWYG editor libraries that offer
            stability, maintainability and extensibility.
          </SummaryListItem>
          <SummaryListItem>
            Setup client codebase structure to streamline feature development
            for other developers, enabling seamless implementation of optimistic
            updates, data caching, and cache validation by integrating state
            management with data fetching.
          </SummaryListItem>
          <SummaryListItem>
            Reduced API calls and page load performance for the new editor;
            providing better user experience.
          </SummaryListItem>
        </SummaryList>
      </SummarySection>
    </div>
  );
}
