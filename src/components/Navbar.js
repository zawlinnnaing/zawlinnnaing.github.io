/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useEffect } from "react";
import { ROUTES } from "../utils/constants";
import { getInitTheme, THEME_MODES } from "../utils/theme";
import AppAniLink from "./common/AppAniLink";
import AppLink from "./common/AppLink";
import ThemeToggle from "./ThemeToggle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ResumeLink({ className }) {
  return (
    <AppLink
      href="https://docs.google.com/document/d/1h_xXqL4aGX7d1TeOchFUuPUt7CXGGj7j3J7zKJeKXGc/edit?usp=sharing"
      openInNewWindow
      className={`px-3 py-2 text-base font-medium mx-2 ${className}`}
    >
      Resume
    </AppLink>
  );
}

export default function Navbar({ className }) {
  useEffect(() => {}, []);

  return (
    <Disclosure
      as="nav"
      className={`dark:bg-gray-900 bg-white ${className} border-b-2 z-50 shadow-sm sticky top-0`}
    >
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
                  <div className="flex flex-auto space-x-2 items-center">
                    <AppAniLink to="/">
                      <h1 className="text-xl text-green-500 font-bold">
                        Zaw Linn Naing
                      </h1>
                    </AppAniLink>
                  </div>
                  <div className="flex flex-none items-center">
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
                    <ResumeLink />
                    <div className="mt-2">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden transition-all px-4 divide-y divide-black dark:divide-white bg-gray-100 dark:bg-gray-800">
            <div className="p-2 space-y-1">
              <AppAniLink
                cover
                key="home"
                to="/"
                getProps={({ isCurrent }) => ({
                  className: classNames(
                    "navbar-item",
                    "block",
                    isCurrent && "active-navbar-item-mobile"
                  ),
                })}
              >
                Home
              </AppAniLink>
              {ROUTES.map((item) => (
                <AppAniLink
                  cover
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
                >
                  {item.name}
                </AppAniLink>
              ))}
              <ResumeLink className="mb-2 inline-block" />
            </div>
            <div className="flex">
              <div className="flex-auto p-2 pt-4">
                <ThemeToggle />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
