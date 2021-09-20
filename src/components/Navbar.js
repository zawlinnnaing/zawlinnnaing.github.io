/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import LocalizationMenu from "./LocalizationMenu";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About me", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "My Experience", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * @returns
 */
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-screen mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-center w-full">
                <div className="hidden sm:flex sm:mx-6 w-full">
                  <div className="flex flex-auto space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                            : "text-gray-500 dark:hover:text-white hover:text-black",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-none">
                    <div className="py-2 pt-4 flex">
                      <ThemeToggle />
                    </div>
                    <div className="mt-2">
                      <LocalizationMenu />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden transition-all px-4 divide-y divide-black dark:divide-white bg-gray-100 dark:bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
                      : "text-gray-500  hover:text-gray-800 dark:hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium text-white"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex">
              <div className="flex-auto p-2 pt-4">
                <ThemeToggle />
              </div>
              <div className="p-2">
                <LocalizationMenu />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
