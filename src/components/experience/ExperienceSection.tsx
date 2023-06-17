/* eslint-disable react/no-danger */
import moment from "moment";
import React, { useState } from "react";
import * as styles from "../../css/experience.module.css";
import { IExperience } from "../../data/types";
import Subtitle from "../common/Subtitle";
import Tag from "../common/Tag";
import AppLink from "../common/AppLink";

function Logo({ logo }: { logo: { uri: string } }) {
  return (
    <img src={logo.uri} alt="Company logo" className="w-20 h-auto mx-auto" />
  );
}

export default function ExperienceSection({
  experience,
}: {
  experience: IExperience;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div className="my-2">
        <div className=" lg:border-gray-500 p-4 mx-auto">
          <div className="m-auto text-center">
            <AppLink
              className="mb-4"
              href={experience.companyUrl}
              openInNewWindow
            >
              <Logo logo={experience.logo} />
            </AppLink>
            <p className="text-xl font-bold mb-2">
              <AppLink href={experience.companyUrl}>
                {experience.companyName}
              </AppLink>
            </p>
            <p>
              (<i>{experience.role}</i>)
            </p>
          </div>
        </div>
        <div className="p-4 lg:flex-1">
          <Subtitle className="mb-2 lg:relative lg:-left-5 border-l-8 border-green-500 px-2">
            {moment(experience.employmentPeriod.start).format("MMM YYYY")} -{" "}
            {experience.employmentPeriod.end
              ? moment(experience.employmentPeriod.end).format("MMM YYYY")
              : "Present"}{" "}
            ({experience.employmentPeriod.duration.toString()})
          </Subtitle>
          <p className={`break-words list-disc ${styles.summary}`}>
            {experience.summary}
          </p>
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
        </div>
      </div>
    </>
  );
}
