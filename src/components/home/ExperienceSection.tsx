import moment from "moment";
import React from "react";
import experiences from "../../data/experiences";
import { SectionHeading } from "./SectionHeading";
import { TechTag } from "./TechTag";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <SectionHeading number="02" title="Experience" />
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group grid md:grid-cols-[200px_1fr] gap-2 md:gap-8 p-4 md:p-6 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors border border-gray-700/50 hover:border-green-500/30"
          >
            {/* Date range */}
            <div className="font-mono text-xs text-gray-500 pt-1 shrink-0 uppercase tracking-wide">
              {moment(exp.employmentPeriod.start).format("MMM YYYY")}
              {" — "}
              {exp.employmentPeriod.end
                ? moment(exp.employmentPeriod.end).format("MMM YYYY")
                : "PRESENT"}
            </div>

            {/* Role, company, summary, techs */}
            <div>
              <h3 className="text-gray-100 font-semibold text-base leading-snug">
                {exp.role}
                {exp.companyUrl ? (
                  <span>
                    {" · "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      {exp.companyName}
                    </a>
                  </span>
                ) : (
                  <span className="text-gray-400">
                    {" · "}
                    {exp.companyName}
                  </span>
                )}
              </h3>
              {exp.summary && (
                <div className="mt-3 text-sm text-gray-400 leading-relaxed experience-summary">
                  {exp.summary}
                </div>
              )}
              <div className="flex flex-wrap mt-3">
                {exp.technologies.map((tech) => (
                  <TechTag key={tech.text} text={tech.text} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
