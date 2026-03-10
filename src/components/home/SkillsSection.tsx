import React from "react";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import {
  SiAngular,
  SiAnthropic,
  SiDatabricks,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPhp,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSvelte,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { SectionHeading } from "./SectionHeading";
import { TechTag } from "./TechTag";
import { Skill } from "./types";

const SKILL_CATEGORIES: { name: string; skills: Skill[] }[] = [
  {
    name: "Languages",
    skills: [
      {
        text: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        link: "https://www.typescriptlang.org/",
      },
      {
        text: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        text: "Python",
        icon: SiPython,
        color: "#3776AB",
        link: "https://www.python.org/",
      },
      { text: "Golang", icon: SiGo, color: "#00ADD8", link: "https://go.dev/" },
      {
        text: "PHP",
        icon: SiPhp,
        color: "#777BB4",
        link: "https://www.php.net/",
      },
      {
        text: "SQL",
        icon: SiPostgresql,
        color: "#336791",
        link: "https://www.postgresql.org/",
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        text: "React.js",
        icon: SiReact,
        color: "#61DAFB",
        link: "https://react.dev/",
      },
      {
        text: "Next.js",
        icon: SiNextdotjs,
        color: "#e2e8f0",
        link: "https://nextjs.org/",
      },
      {
        text: "Angular",
        icon: SiAngular,
        color: "#DD0031",
        link: "https://angular.dev/",
      },
      {
        text: "Svelte",
        icon: SiSvelte,
        color: "#FF3E00",
        link: "https://svelte.dev/",
      },
      {
        text: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        link: "https://tailwindcss.com/",
      },
      {
        text: "Redux",
        icon: SiRedux,
        color: "#764ABC",
        link: "https://redux.js.org/",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        text: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
        link: "https://nodejs.org/",
      },
      {
        text: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        link: "https://nestjs.com/",
      },
      {
        text: "Express",
        icon: SiExpress,
        color: "#e2e8f0",
        link: "https://expressjs.com/",
      },
      {
        text: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
        link: "https://fastapi.tiangolo.com/",
      },
      {
        text: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
        link: "https://graphql.org/",
      },
      { text: "REST APIs", color: "#94a3b8" },
      {
        text: "Prisma",
        icon: SiPrisma,
        color: "#a78bfa",
        link: "https://www.prisma.io/",
      },
    ],
  },
  {
    name: "Tools & Infra",
    skills: [
      {
        text: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        link: "https://www.docker.com/",
      },
      {
        text: "Kubernetes",
        icon: SiKubernetes,
        color: "#326CE5",
        link: "https://kubernetes.io/",
      },
      {
        text: "AWS",
        icon: FaAws,
        color: "#FF9900",
        link: "https://aws.amazon.com/",
      },
      {
        text: "GCP",
        icon: SiGooglecloud,
        color: "#4285F4",
        link: "https://cloud.google.com/",
      },
      {
        text: "Azure",
        icon: FaMicrosoft,
        color: "#0078D4",
        link: "https://azure.microsoft.com/",
      },
      {
        text: "Terraform",
        icon: SiTerraform,
        color: "#844FBA",
        link: "https://www.terraform.io/",
      },
      {
        text: "Redis",
        icon: SiRedis,
        color: "#DC382D",
        link: "https://redis.io/",
      },
      {
        text: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
        link: "https://www.postgresql.org/",
      },
      {
        text: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        link: "https://www.mongodb.com/",
      },
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      {
        text: "Claude Code",
        icon: SiAnthropic,
        color: "#d97757",
        link: "https://claude.ai/code",
      },
      {
        text: "GitHub Copilot",
        icon: SiGithub,
        color: "#e2e8f0",
        link: "https://github.com/features/copilot",
      },
      {
        text: "AI Agent Tooling",
        icon: SiDatabricks,
        color: "#FF3621",
      },
      {
        text: "AI/LLM Integration",
        color: "#94a3b8",
      },
    ],
  },
];

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
