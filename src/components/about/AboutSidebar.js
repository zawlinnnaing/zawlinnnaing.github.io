import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useScrollSections } from "react-scroll-section";
import * as styles from "../../css/about.module.css";

const SECTIONS = [
  {
    id: "tldr",
    text: "TLDR",
  },
  { id: "backend", text: "Backend Engineering" },
  {
    id: "frontend",
    text: "Frontend Engineering",
  },
];

const SECTIONS_MAP = {
  tldr: "TLDR",
  backend: "Backend",
  frontend: "Frontend",
};

export default function AboutSidebar({ activeId }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef();
  const sections = useScrollSections();

  function onPanelBtnClick() {
    setIsPanelOpen(!isPanelOpen);
  }

  useEffect(() => {
    panelRef.current.style.height = !isPanelOpen ? "0px" : "170px";
  }, [isPanelOpen]);

  return (
    <>
      <div className="lg:border-r-2 lg:border-b-0 border-b-2 border-gray-900 dark:border-white p-4 min-w-200 hidden lg:block">
        <p>Table of content</p>
        <ul className="my-8">
          {sections.map((appSection) => (
            <li
              className={`p-4 sm:p-2 inline-block ${
                appSection.selected ? "active-link" : ""
              } `}
              key={appSection.id}
            >
              <a
                href={`#${appSection.id}`}
                key={appSection.id}
                className="text-green-500"
                onClick={appSection.onClick}
              >
                {appSection.meta.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden block p-4">
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
        <div
          className={`h-0 ${styles.aboutMobileSidebarPanel} overflow-hidden ${
            isPanelOpen ? "mt-4" : ""
          }`}
          ref={panelRef}
        >
          <ul>
            {sections.map((appSection) => (
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
        </div>
      </div>
    </>
  );
}
