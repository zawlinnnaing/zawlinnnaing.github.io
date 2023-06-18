/* eslint-disable react/jsx-props-no-spreading */
import { isEmpty } from "lodash";
import React from "react";
import { IProject } from "../../data/types";
import AppLink from "../common/AppLink";
import Avatar from "../common/Avatar";
import Tag from "../common/Tag";

export default function ProjectSection({ project }: { project: IProject }) {
  return (
    <>
      <div className="my-2">
        <div className="p-2 flex-none text-center">
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
        </div>
      </div>
    </>
  );
}
