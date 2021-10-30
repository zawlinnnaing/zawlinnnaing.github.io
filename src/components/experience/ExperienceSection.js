/* eslint-disable react/no-danger */
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import Subtitle from "../common/Subtitle";
import Tag from "../common/Tag";
import * as styles from "../../css/experience.module.css";

function Logo({ logo }) {
  return (
    <img src={logo.uri} alt="Company logo" className="w-20 h-auto mx-auto" />
  );
}

export default function ExperienceSection({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div className="lg:flex max-w-screen">
        <div className="lg:border-r-2 lg:border-gray-500 p-4 w-52 mx-auto">
          <div className="m-auto text-center">
            <div className="mb-4">
              <Logo logo={experience.logo} />
            </div>
            <h4 className="text-xl font-bold mb-2">
              <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                {experience.companyName}
              </a>
            </h4>
            <p>
              (<i>{experience.role}</i>)
            </p>
          </div>
        </div>
        <div className="p-4 lg:flex-1">
          <Subtitle className="mb-2 lg:relative lg:-left-5 border-l-8 border-green-500 px-2">
            {experience.employmentPeriod.start} -{" "}
            {experience.employmentPeriod.end} (
            {experience.employmentPeriod.duration})
          </Subtitle>
          <p
            className={`break-words list-disc ${styles.summary}`}
            // dangerouslySetInnerHTML={{
            //   __html: experience.summary,
            // }}
          >
            {experience.summary}
          </p>
          <div
            className={`overflow-hidden my-2 ${isExpanded ? "h-auto" : "h-0"}`}
          >
            {experience.description}
          </div>
          <div className="my-2">
            <i>Technologies</i>: &nbsp;
            {experience.technologies.map((technology) => (
              <Tag
                key={technology.text}
                text={technology.text}
                url={technology.url}
              />
            ))}
          </div>

          {/* <div>
            <Link
              className="text-green-500 hover:underline"
              to={`./${experience.id}`}
            >
              More details &nbsp;{" "}
              <ChevronDoubleRightIcon className="w-3 h-3 inline-block" />
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
