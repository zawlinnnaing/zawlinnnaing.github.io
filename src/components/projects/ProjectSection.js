/* eslint-disable react/jsx-props-no-spreading */
import { isEmpty } from "lodash";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import React from "react";
import AppLink from "../common/AppLink";
import AppAniLink from "../common/AppAniLink";
import Avatar from "../common/Avatar";
import Tag from "../common/Tag";

export default function ProjectSection({ project }) {
  return (
    <>
      <div className="lg:flex">
        <div className="p-2 lg:border-r-4 lg:w-96 text-center">
          {!isEmpty(project.logo) && (
            <div className="my-2">
              <Avatar {...project.logo} size={64} />
            </div>
          )}
          <p className="font-bold text-base mb-2">{project.name}</p>
          {!isEmpty(project.links) && (
            <div className="flex flex-wrap space-x-4 justify-center">
              {project.links.map((link) => (
                <span key={link.text}>
                  {link.url ? (
                    <AppLink href={link.url} openInNewWindow>
                      {link.text}
                    </AppLink>
                  ) : (
                    link.text
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-auto p-2">
          <div className="my-2">{project.summary}</div>
          {!isEmpty(project.technologies) && (
            <div className="my-4">
              <i>Technologies</i>: &nbsp;
              {project.technologies.map((technology) => (
                <Tag
                  text={technology.text}
                  url={technology.url}
                  key={technology.text}
                />
              ))}
            </div>
          )}
          {!isEmpty(project.detailConfig) && (
            <div className="py-2 px-2 bg-green-500 text-white inline-block hover:underline">
              {project.detailConfig.isExternal ? (
                <AppLink href={project.detailConfig.url} openInNewWindow>
                  More details &nbsp;
                  <ChevronDoubleRightIcon className="w-3 h-3 inline-block" />
                </AppLink>
              ) : (
                <AppAniLink to={project.detailConfig.url}>
                  More details &nbsp;
                  <ChevronDoubleRightIcon className="w-3 h-3 inline-block" />
                </AppAniLink>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
