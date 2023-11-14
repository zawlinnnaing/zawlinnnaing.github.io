import { ChevronDownIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
import React from "react";
import { RESUME_LINK, TECHNOLOGIES } from "../../utils/constants";
import Tag from "../common/Tag";
import * as styles from "./HomeV2.module.css";
import classNames from "classnames";

export default function HomeV2() {
  const links = [
    {
      text: "Experience",
      href: "/experience",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "About me",
      href: "/about",
    },
    {
      text: "Resume",
      href: RESUME_LINK,
      target: "_blank",
      className: styles.resumeLink,
    },
  ];

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="px-4 lg:max-w-screen-sm">
        <p className="text-sm my-4">Hi, I am</p>
        <h1 className="text-2xl text-green-500 my-4">Zaw Lin Naing</h1>
        <p className="my-4">
          A software engineer, who builds mostly web-related stuff but not
          limited to it and likes to build things for fun and professionally.
        </p>
        <div className="my-4 flex">
          <span className="mr-4">Skills:</span>
          <div className="inline-flex flex-wrap">
            {[
              TECHNOLOGIES.nodejs,
              TECHNOLOGIES.reactJs,
              TECHNOLOGIES.docker,
              TECHNOLOGIES.mysql,
              TECHNOLOGIES.postgresql,
              TECHNOLOGIES.graphql,
              TECHNOLOGIES.mongodb,
            ].map((technology) => {
              return (
                <Tag
                  key={technology.text}
                  text={technology.text}
                  url={technology.url}
                />
              );
            })}
          </div>
        </div>
        <div className="my-4">
          <p className="my-2 flex flex-col items-center">
            Learn more
            <ChevronDownIcon width={12} height={12} />
          </p>
          <div className="flex flex-wrap justify-between">
            {links.map((link) => {
              return (
                <Link
                  to={link.href}
                  target={link.target}
                  key={link.text}
                  className={classNames(styles.navLink, link.className)}
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
