import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import React, { Fragment, useRef, useState } from "react";
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

export default function AboutSidebar({ activeId }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef();

  function onPanelBtnClick() {
    setIsPanelOpen(!isPanelOpen);
    panelRef.current.style.height = !isPanelOpen ? "170px" : "0px";
  }

  return (
    <>
      <div className="lg:border-r-2 lg:border-b-0 border-b-2 border-gray-900 dark:border-white p-4 min-w-200 hidden lg:block">
        <p>Table of content</p>
        <ul className="my-8">
          {SECTIONS.map((appSection) => (
            <li className="p-4 sm:p-2" key={appSection.id}>
              <a
                href={`#${appSection.id}`}
                key={appSection.id}
                className="text-green-500"
              >
                {appSection.text}
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
            {SECTIONS.map((appSection) => (
              <li className="p-4 sm:p-2 text-green-500" key={appSection.id}>
                <a href={`#${appSection.id}`} key={appSection.id}>
                  {appSection.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
