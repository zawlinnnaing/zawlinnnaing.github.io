import React from "react";
import { CONTACT_INFO } from "../../utils/constants";
import { CONTACT_ICONS } from "./constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 text-center">
      <p className="font-mono text-green-500 text-sm mb-4">
        04. What&apos;s Next?
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
        Let&apos;s Work Together
      </h2>
      <p className="text-gray-400 max-w-lg mx-auto leading-relaxed mb-10 text-lg">
        I&apos;m currently open to new opportunities. Whether you have a
        project in mind, a question, or just want to connect — my inbox is
        always open.
      </p>
      <a
        href="mailto:zawlinnnaing0018@gmail.com"
        className="font-mono text-green-500 border border-green-500 px-8 py-4 rounded hover:bg-green-500/10 transition-colors text-base inline-block"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-8 mt-12">
        {CONTACT_INFO.map((contact) => {
          const iconData = CONTACT_ICONS[contact.name];
          return (
            <a
              key={contact.name}
              href={contact.uri}
              target={
                contact.uri.startsWith("mailto") ? undefined : "_blank"
              }
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-gray-500 hover:text-green-500 transition-colors"
              aria-label={contact.name}
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
    </section>
  );
}
