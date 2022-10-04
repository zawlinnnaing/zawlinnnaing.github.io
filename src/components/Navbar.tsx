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
      href="https://docs.google.com/document/d/1PLzmX_DR6wARbjrEMneYnTu-hg0xR0Tmlpk0D0nPFA0/export?format=pdf&attachment=false"
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
      className={`dark:bg-gray-900 bg-white ${className} border-b-2 z-50 shadow-sm fixed top-0`}
    >
      {({ open }) => (
        <>
          <div className="max-w-screen mx-auto">
            <div className="relative pt-4 h-16">
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-none items-center justify-around w-full">
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

          <Disclosure.Panel className="md:hidden transition-all px-4 divide-y divide-black dark:divide-white bg-gray-100 dark:bg-gray-800">
            <div className="p-2 space-y-1">
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
