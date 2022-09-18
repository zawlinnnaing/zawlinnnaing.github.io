import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/outline";

function LocalizationItem({ lang }) {
  return (
    <div className="px-1 py-1">
      <Menu.Item>
        {({ active }) => (
          <button
            type="button"
            className={`${
              active
                ? "bg-violet-900 text-white"
                : "text-gray-900 dark:text-white"
            } dark:hover:text-white hover:text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm`}
          >
            {lang.text}
          </button>
        )}
      </Menu.Item>
    </div>
  );
}

const AVAILABLE_LANGUAGES = [
  { key: "EN", text: "English" },
  { key: "MY", text: "Burmese" },
  { key: "CN", text: "Chinese" },
];

export default function LocalizationMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Options
              {open ? (
                <ChevronUpIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-36 mt-2 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {AVAILABLE_LANGUAGES.map((lang) => (
                <LocalizationItem key={lang.key} lang={lang} />
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
