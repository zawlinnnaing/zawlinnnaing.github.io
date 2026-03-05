import React from "react";
import projects from "../../data/projects";
import { FEATURED_COUNT } from "./constants";
import { ExternalLinkIcon, FolderIcon, GitHubIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { TechTag } from "./TechTag";

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, FEATURED_COUNT);
  const otherProjects = projects.slice(FEATURED_COUNT);

  return (
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
                  {project.logo?.src ? (
                    <img
                      src={project.logo.src}
                      alt={project.name}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <FolderIcon className="w-8 h-8 text-green-500" />
                  )}
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
                <div className="text-gray-400 text-sm leading-relaxed flex-1">
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
  );
}
