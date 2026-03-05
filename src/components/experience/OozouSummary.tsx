import React from "react";
import AppLink from "../common/AppLink";

export default function OozouSummary() {
  return (
    <div>
      <div>
        <ul>
          <li>
            Core developer of{" "}
            <AppLink href="https://slimwiki.com" openInNewWindow>
              slimwiki.com
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
            collaboration feature with Conflict-Free Replicated Data Type
            (CRDT).
          </li>
          <li>
            Setup frontend codebase to streamline feature development, enabling
            seamless implementation of optimistic updates, data caching, and
            cache validation by integrating state management with data fetching.
          </li>
          <li>
            Reduced API calls by 70% and improved page load performance for the new editor;
            providing better user experience.
          </li>
        </ul>
      </div>
    </div>
  );
}
