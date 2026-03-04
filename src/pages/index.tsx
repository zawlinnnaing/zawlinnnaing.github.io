import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
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
import { FaAws, FaMicrosoft, FaArrowDown } from "react-icons/fa";
import experiences from "../data/experiences";
import projects from "../data/projects";
import { CONTACT_INFO, RESUME_LINK } from "../utils/constants";

// ── Skill categories ────────────────────────────────────────────────────────
interface Skill {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  color?: string;
  link?: string;
}

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

// ── Reusable components ──────────────────────────────────────────────────────
function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <h2 className="text-2xl font-bold text-gray-100 whitespace-nowrap">
        <span className="font-mono text-green-500 mr-2">{number}.</span>
        {title}
      </h2>
      <div className="h-px bg-gray-700 flex-1 max-w-xs" />
    </div>
  );
}

function TechTag({ text, icon: Icon, color, link }: Skill) {
  const textColor = color ?? "#4ade80";
  const bgColor = color ? `${color}1a` : "rgba(74,222,128,0.1)";
  const inner = (
    <>
      {Icon && <Icon style={{ color: textColor }} />}
      {text}
    </>
  );
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-mono px-2 py-1 rounded mr-2 mb-1 hover:underline transition-opacity"
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        {inner}
      </a>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 text-sm font-mono px-2 py-1 rounded mr-2 mb-1"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {inner}
    </span>
  );
}

// ── GitHub icon ──────────────────────────────────────────────────────────────
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
const FEATURED_COUNT = 2;

export default function IndexPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Get in Touch", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const visible = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.intersectionRatio);
        });
        // Pick the section with the highest intersection ratio
        let best = "";
        let bestRatio = -1;
        sectionIds.forEach((id) => {
          const ratio = visible.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActiveSection(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const featuredProjects = projects.slice(0, FEATURED_COUNT);
  const otherProjects = projects.slice(FEATURED_COUNT);

  return (
    <>
      <Helmet>
        <title>Zaw Lin Naing – Software Engineer</title>
        <meta
          name="description"
          content="Full-stack software engineer with 7+ years of experience specialising in TypeScript, Node.js, React, and cloud systems."
        />
      </Helmet>

      <div className="bg-gray-900 min-h-screen text-gray-300">
        {/* ── Navbar ────────────────────────────────────────────────────── */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-gray-900/95 backdrop-blur shadow-lg border-b border-gray-800"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a
              href="#about"
              className="font-mono text-green-500 font-bold text-xl hover:text-green-400 transition-colors"
            >
              &lt;Zaw/&gt;
            </a>

            {/* Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-sm transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-green-500"
                      : "text-gray-400 hover:text-green-500"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500/10 transition-colors"
              >
                Resume
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-400 hover:text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block font-mono text-sm transition-colors py-1 ${
                    activeSection === item.href.slice(1)
                      ? "text-green-500"
                      : "text-gray-400 hover:text-green-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
                className="block font-mono text-sm text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500/10 transition-colors text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          )}
        </header>

        <main className="max-w-5xl mx-auto px-6">
          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <section
            id="about"
            className="relative min-h-screen flex flex-col justify-center pt-16"
          >
            <p className="font-mono text-green-500 mb-5 text-base">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 leading-tight">
              Zaw Lin Naing.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-8 leading-tight">
              I build things for the web.
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed mb-10 text-lg">
              Results-driven full-stack software engineer with 7+ years of
              experience in the JavaScript ecosystem. I build reliable,
              scalable, and maintainable systems, and effectively leverage AI
              coding agents to boost productivity and code quality.
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
              {CONTACT_INFO.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.uri}
                  target={
                    contact.uri.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noreferrer"
                  aria-label={contact.name}
                  className="font-mono text-sm text-gray-500 hover:text-green-500 transition-colors"
                >
                  {contact.name}
                </a>
              ))}
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
              <FaArrowDown className="w-6 h-6" />
            </button>
          </section>

          {/* ── 01. Skills ────────────────────────────────────────────────── */}
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

          {/* ── 02. Experience ────────────────────────────────────────────── */}
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

          {/* ── 03. Projects ──────────────────────────────────────────────── */}
          <section id="projects" className="py-24">
            <SectionHeading number="03" title="Projects" />

            {/* Featured projects */}
            <div className="space-y-6 mb-20">
              {featuredProjects.map((project) => (
                <div
                  key={project.name}
                  className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-mono text-green-500 text-xs mb-1 uppercase tracking-widest">
                        Featured Project
                      </p>
                      <h3 className="text-gray-100 font-bold text-xl">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex gap-4 ml-4 shrink-0">
                      {project.links?.map((link) =>
                        link.url ? (
                          <a
                            key={link.text}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-green-500 transition-colors"
                            title={link.text}
                            aria-label={link.text}
                          >
                            {link.text === "source code" ? (
                              <GitHubIcon className="w-5 h-5" />
                            ) : (
                              <ExternalLinkIcon className="w-5 h-5" />
                            )}
                          </a>
                        ) : null
                      )}
                    </div>
                  </div>
                  <div className="text-gray-400 leading-relaxed text-sm mb-4">
                    {project.summary}
                  </div>
                  <div className="flex flex-wrap">
                    {project.technologies?.map((tech) => (
                      <TechTag key={tech.text} text={tech.text} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Other noteworthy projects */}
            {otherProjects.length > 0 && (
              <>
                <h3 className="text-center text-gray-100 font-bold text-xl mb-10">
                  Other Noteworthy Projects
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherProjects.map((project) => (
                    <div
                      key={project.name}
                      className="flex flex-col p-5 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/40 hover:-translate-y-1 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <FolderIcon className="w-8 h-8 text-green-500" />
                        <div className="flex gap-3">
                          {project.links?.map((link) =>
                            link.url ? (
                              <a
                                key={link.text}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-green-500 transition-colors"
                                title={link.text}
                                aria-label={link.text}
                              >
                                {link.text === "source code" ? (
                                  <GitHubIcon className="w-4 h-4" />
                                ) : (
                                  <ExternalLinkIcon className="w-4 h-4" />
                                )}
                              </a>
                            ) : null
                          )}
                        </div>
                      </div>
                      <h4 className="text-gray-100 font-semibold mb-2">
                        {project.name}
                      </h4>
                      <div
                        className="text-gray-400 text-sm leading-relaxed flex-1 overflow-hidden"
                        style={{ maxHeight: "80px" }}
                      >
                        {project.summary}
                      </div>
                      {project.technologies?.length > 0 && (
                        <div className="flex flex-wrap mt-4">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <TechTag key={tech.text} text={tech.text} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>

          {/* ── Contact ───────────────────────────────────────────────────── */}
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
              {CONTACT_INFO.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.uri}
                  target={
                    contact.uri.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noreferrer"
                  className="font-mono text-sm text-gray-500 hover:text-green-500 transition-colors"
                  aria-label={contact.name}
                >
                  {contact.name}
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="text-center py-6 text-gray-600 text-xs font-mono border-t border-gray-800">
          Designed &amp; Built by Zaw Lin Naing
        </footer>
      </div>
    </>
  );
}
