import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiPrisma,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiTerraform,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiAnthropic,
  SiDatabricks,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { NavLink, Skill } from "./types";

export const FEATURED_COUNT = 2;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Get in Touch", href: "#contact" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CONTACT_ICONS: Record<string, { Icon: any; color: string }> = {
  LinkedIn: { Icon: FaLinkedin, color: "#0077B5" },
  Github: { Icon: SiGithub, color: "#e2e8f0" },
  Email: { Icon: FaEnvelope, color: "#EA4335" },
};

export const SKILL_CATEGORIES: { name: string; skills: Skill[] }[] = [
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
        text: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
        link: "https://graphql.org/",
      },
      { text: "REST APIs", color: "#94a3b8", link: "https://restfulapi.net/" },
      {
        text: "Prisma",
        icon: SiPrisma,
        color: "#a78bfa",
        link: "https://www.prisma.io/",
      },
      {
        text: "Express",
        icon: SiExpress,
        color: "#e2e8f0",
        link: "https://expressjs.com/",
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
        link: "https://www.databricks.com/",
      },
      {
        text: "AI/LLM Integration",
        color: "#94a3b8",
        link: "https://platform.openai.com/docs/",
      },
    ],
  },
];
