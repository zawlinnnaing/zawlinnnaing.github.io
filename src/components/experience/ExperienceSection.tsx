/* eslint-disable react/no-danger */
import React, { useState } from "react";
import * as styles from "../../css/experience.module.css";
import Subtitle from "../common/Subtitle";
import Tag from "../common/Tag";

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
      <div className="my-2">
        <div className=" lg:border-gray-500 p-4 mx-auto">
          <div className="m-auto text-center">
            <div className="mb-4">
              <Logo logo={experience.logo} />
            </div>
            <p className="text-xl font-bold mb-2">
              <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                {experience.companyName}
              </a>
            </p>
            <p>
              (<i>{experience.role}</i>)
            </p>
          </div>
        </div>
        <div className="p-4 lg:flex-1">
          <Subtitle className="mb-2 lg:relative lg:-left-5 border-l-8 border-green-500 px-2">
            {experience.employmentPeriod.start.toString()} -{" "}
            {experience.employmentPeriod.end ?? "Present"} (
            {experience.employmentPeriod.duration.toString()})
          </Subtitle>
          <p className={`break-words list-disc ${styles.summary}`}>
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
