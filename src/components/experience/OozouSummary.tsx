import React from "react";
import AppLink from "../common/AppLink";

export default function OozouSummary() {
  return (
    <div>
      <div>
        <h4>CONTRIBUTIONS</h4>
        <ul>
          <li>
            Core developer of{" "}
            <AppLink href="https://beta.slimwiki.com" openInNewWindow>
              beta.slimwiki.com
            </AppLink>
            , implementing rich-text editor with ability to format texts, insert
            images, videos, links and create interactive tables.
          </li>
          <li>
            Developed editor version history, wiki search and super-admin
            dashboard features.
          </li>
          <li>
            Improved editing experience by implementing a real-time
            collaboration feature with Conflict-Free Replicated Date Type(CRDT).
          </li>
        </ul>
      </div>
      <div>
        <h4>CHALLENGES & IMPACT</h4>
        <ul>
          <li>
            Research and benchmarked various WYSIWYG editor libraries that offer
            stability, maintainability and extensibility.
          </li>
          <li>
            Setup client codebase structure to streamline feature development
            for other developers, enabling seamless implementation of optimistic
            updates, data caching, and cache validation by integrating state
            management with data fetching.
          </li>
          <li>
            Reduced API calls and page load performance for the new editor;
            providing better user experience.
          </li>
        </ul>
      </div>
    </div>
  );
}
