import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
import { isEmpty } from "lodash";
import React from "react";
import SEO from "../common/SEO";
import Subtitle from "../common/Subtitle";
import Tag from "../common/Tag";
import Layout from "../Layout";
import useGetExperience from "./useGetExperience";

export default function ExperienceContainer({
  children,
  location,
}: {
  children: React.ReactNode;
  location: Location;
}) {
  const experience = useGetExperience(location);

  if (!experience) {
    return null;
  }

  return (
    <>
      <SEO
        title={`${experience.companyName} - Zaw Linn Naing`}
        description={`Zaw's Experience at ${experience.companyName}`}
      />
      <Layout>
        <>
          <div className="flex border-b-2 dark:border-gray-800 shadow-sm sticky top-0 bg-white dark:bg-gray-900">
            <div className="py-5 px-4 m-auto">
              <Link to="/experience" replace>
                <ArrowLeftIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-auto p-4">
              <div>
                <p className="inline-block text-xl font-bold">
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {experience.companyName}
                  </a>{" "}
                </p>{" "}
                - <i>{experience.role}</i>
                {!isEmpty(experience.employmentPeriod) && (
                  <Subtitle>
                    {experience.employmentPeriod.start.toString()} -{" "}
                    {experience.employmentPeriod.end ?? "Present"} (
                    {experience.employmentPeriod.duration.toString()})
                  </Subtitle>
                )}
              </div>
            </div>
          </div>
          <div className="p-4">{children}</div>
          <div className="p-4">
            <i>Technologies used</i>: &nbsp;
            {experience.technologies.map((tech) => (
              <Tag key={tech.text} text={tech.text} url={tech.url} />
            ))}
          </div>
        </>
      </Layout>
    </>
  );
}
