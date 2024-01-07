import { ChevronDownIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { CONTACT_INFO, RESUME_LINK, TECHNOLOGIES } from "../../utils/constants";
import AppLinkIcon from "../common/AppLinkIcon";
import Tag from "../common/Tag";
import * as styles from "./Home.module.css";

export default function Home() {
  const { isDarkMode } = useAppContext();
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
    <main className="h-screen flex justify-center items-center bg-gray-900">
      <div className="px-4 lg:max-w-screen-sm">
        <p className="text-sm my-4">Hi, I am</p>
        <h1 className="text-2xl text-green-500 my-4">Zaw Lin Naing</h1>
        <p className="my-4">
          A full-stack engineer with 5 years of experience and passion about
          building software both professionally and for fun. Always eager to
          learn new things ✨.
        </p>
        <section className="my-4 flex">
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
              TECHNOLOGIES.aws,
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
        </section>
        <section className="my-4 flex justify-center items-center">
          {CONTACT_INFO.map((contact) => (
            <span className="px-1" key={contact.name}>
              <AppLinkIcon
                href={contact.uri}
                src={
                  isDarkMode ? contact.icon : contact.iconLight || contact.icon
                }
                key={contact.name}
                size={24}
              />
            </span>
          ))}
        </section>
        <div className="my-4">
          <p className="my-2 flex flex-col items-center">
            Learn more
            <ChevronDownIcon width={12} height={12} />
          </p>
          <div className="flex flex-wrap justify-between">
            {links.map((link) => {
              if (link.target) {
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
              }
              return (
                <AniLink
                  to={link.href}
                  key={link.text}
                  swipe
                  direction="up"
                  duration={1}
                  className={classNames(styles.navLink, link.className)}
                >
                  {link.text}
                </AniLink>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
