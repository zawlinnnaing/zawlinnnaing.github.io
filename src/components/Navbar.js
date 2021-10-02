/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { createRef, useEffect } from "react";
import { ROUTES } from "../utils/constants";
import { getInitTheme, THEME_MODES } from "../utils/theme";
import ThemeToggle from "./ThemeToggle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navRef = createRef();

  useEffect(() => {}, []);

  return (
    <Disclosure as="nav" className="bg-transparent" ref={navRef}>
      {({ open }) => (
        <>
          <div className="max-w-screen mx-auto px-4 sm:px-0 md:px-2">
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
                    {ROUTES.map((item) => (
                      <AniLink
                        cover
                        bg={
                          getInitTheme() === THEME_MODES.dark
                            ? "#111827"
                            : "#F9FAFB"
                        }
                        duration={1}
                        key={item.name}
                        to={item.href}
                        getProps={({ isCurrent }) => ({
                          className: classNames(
                            "navbar-item",
                            isCurrent && "active-navbar-item"
                          ),
                        })}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </AniLink>
                    ))}
                  </div>
                  <div className="flex flex-none">
                    <div className="py-2 pt-4 flex">
                      <ThemeToggle />
                    </div>
                    {/* <div className="mt-2">
                      <LocalizationMenu />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden transition-all px-4 divide-y divide-black dark:divide-white bg-gray-100 dark:bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {ROUTES.map((item) => (
                <AniLink
                  cover
                  bg={
                    getInitTheme() === THEME_MODES.dark ? "#111827" : "#F9FAFB"
                  }
                  duration={1}
                  key={item.name}
                  to={item.href}
                  getProps={({ isCurrent }) => ({
                    className: classNames(
                      "navbar-item",
                      "block",
                      isCurrent && "active-navbar-item-mobile"
                    ),
                  })}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </AniLink>
              ))}
            </div>
            <div className="flex">
              <div className="flex-auto p-2 pt-4">
                <ThemeToggle />
              </div>
              {/* <div className="p-2">
                <LocalizationMenu />
              </div> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
