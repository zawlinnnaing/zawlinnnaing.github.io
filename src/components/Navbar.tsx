import { Disclosure } from "@headlessui/react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import { RESUME_LINK, ROUTES } from "../utils/constants";
import AppAniLink from "./common/AppAniLink";
import AppLink from "./common/AppLink";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

function ResumeLink({ className }: { className?: string }) {
  return (
    <AppLink
      href={RESUME_LINK}
      openInNewWindow
      className={`font-mono text-sm text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500/10 transition-colors ${className ?? ""}`}
    >
      Resume
    </AppLink>
  );
}

export default function Navbar({ className }: { className?: string }) {
  return (
    <Disclosure
      as="nav"
      className={`bg-gray-900/95 backdrop-blur border-b border-gray-800 z-50 shadow-sm fixed top-0 ${className ?? ""}`}
    >
      {({ open }) => (
        <>
          <div className="max-w-screen mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo monogram */}
              <AniLink
                swipe
                direction="right"
                bg="#111827"
                duration={1}
                to="/"
                className="font-mono text-green-500 font-bold text-xl hover:text-green-400 transition-colors"
              >
                &lt;Zaw/&gt;
              </AniLink>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6">
                {ROUTES.filter((r) => r.href !== "/").map((item) => (
                  <AniLink
                    swipe
                    direction="left"
                    bg="#111827"
                    duration={1}
                    key={item.name}
                    to={item.href}
                    getProps={({ isCurrent }) => ({
                      className: classNames(
                        "font-mono text-sm transition-colors",
                        isCurrent
                          ? "text-green-500"
                          : "text-gray-400 hover:text-green-500"
                      ),
                    })}
                  >
                    {item.name}
                  </AniLink>
                ))}
                <ResumeLink />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-2">
            {ROUTES.filter((r) => r.href !== "/").map((item) => (
              <AppAniLink
                swipe
                direction="left"
                duration={1}
                key={item.name}
                to={item.href}
                getProps={({ isCurrent }) => ({
                  className: classNames(
                    "block font-mono text-sm py-2 transition-colors",
                    isCurrent
                      ? "text-green-500"
                      : "text-gray-400 hover:text-green-500"
                  ),
                })}
              >
                {item.name}
              </AppAniLink>
            ))}
            <ResumeLink className="mt-2 inline-block" />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
