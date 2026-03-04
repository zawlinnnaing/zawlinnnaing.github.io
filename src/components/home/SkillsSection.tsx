import React from "react";
import { SKILL_CATEGORIES } from "./constants";
import { SectionHeading } from "./SectionHeading";
import { TechTag } from "./TechTag";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <SectionHeading number="01" title="Skills & Technologies" />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.name}>
            <h3 className="font-mono text-green-500 text-xs uppercase tracking-widest mb-3">
              {cat.name}
            </h3>
            <div className="flex flex-wrap">
              {cat.skills.map((skill) => (
                <TechTag key={skill.text} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
