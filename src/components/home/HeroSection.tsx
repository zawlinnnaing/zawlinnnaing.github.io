import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { CONTACT_INFO, RESUME_LINK } from "../../utils/constants";
import { CONTACT_ICONS } from "./constants";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-16"
    >
      <p className="font-mono text-green-500 mb-5 text-base">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 leading-tight">
        Zaw Lin Naing.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-8 leading-tight">
        I build things for the web.
      </h2>
      <p className="text-gray-400 max-w-xl leading-relaxed mb-10 text-lg">
        Results-driven full-stack software engineer with 7+ years of experience
        in the JavaScript ecosystem. I build reliable, scalable, and
        maintainable systems, and effectively leverage AI coding agents to boost
        productivity and code quality.
      </p>
      <div className="flex flex-wrap gap-4 mb-12">
        <a
          href="#experience"
          className="font-mono text-green-500 border border-green-500 px-6 py-3 rounded hover:bg-green-500/10 transition-colors"
        >
          View my work
        </a>
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-gray-400 border border-gray-600 px-6 py-3 rounded hover:border-gray-400 hover:text-gray-200 transition-colors"
        >
          Download Resume
        </a>
      </div>
      <div className="flex gap-5">
        {CONTACT_INFO.map((contact) => {
          const iconData = CONTACT_ICONS[contact.name];
          return (
            <a
              key={contact.name}
              href={contact.uri}
              target={contact.uri.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={contact.name}
              className="flex items-center gap-2 font-mono text-sm text-gray-500 hover:text-green-500 transition-colors"
            >
              {iconData && (
                <iconData.Icon
                  size={20}
                  style={{ color: "inherit" }}
                  aria-hidden="true"
                />
              )}
              {contact.name}
            </a>
          );
        })}
      </div>

      {/* Scroll-down arrow */}
      <button
        onClick={() =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to Skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-green-500 hover:text-green-400 transition-colors focus:outline-none"
      >
        {/* @ts-expect-error */}
        <FaArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
