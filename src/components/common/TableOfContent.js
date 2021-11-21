import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useScrollSections } from "react-scroll-section";
import styled from "styled-components";

const ExpandedPanel = styled.div`
  transition: height 0.5s;
`;

export default function TableOfContent({
  expandedPanelHeight = "170px",
  outerClassName = "",
  sectionIds,
}) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef();
  const sections = useScrollSections();

  function onPanelBtnClick() {
    setIsPanelOpen(!isPanelOpen);
  }

  const sectionsToShow = useMemo(
    () => sections.filter((section) => sectionIds.includes(section.id)),
    [sections, sectionIds]
  );

  useEffect(() => {
    panelRef.current.style.height = !isPanelOpen ? "0px" : expandedPanelHeight;
  }, [isPanelOpen]);

  return (
    <section className={`app-table-of-content ${outerClassName}`}>
      <div className="block p-4 shadow-sm border-b-2">
        <div className="flex justify-between">
          <p>Table of content</p>
          <button className="block" type="button" onClick={onPanelBtnClick}>
            {isPanelOpen ? (
              <ChevronUpIcon width="16" height="16" />
            ) : (
              <ChevronDownIcon width="16" height="16" />
            )}
          </button>
        </div>
        <ExpandedPanel
          className={`h-0 overflow-hidden ${isPanelOpen ? "mt-4" : ""}`}
          ref={panelRef}
        >
          <ul>
            {sectionsToShow.map((appSection) => (
              <li className="p-4 sm:p-2 text-green-500" key={appSection.id}>
                <a
                  href={`#${appSection.id}`}
                  className={`${appSection.selected ? "active-link" : ""} py-2`}
                  key={appSection.id}
                  onClick={() => {
                    setIsPanelOpen(false);
                  }}
                >
                  {appSection.meta.text}
                </a>
              </li>
            ))}
          </ul>
        </ExpandedPanel>
      </div>
    </section>
  );
}
