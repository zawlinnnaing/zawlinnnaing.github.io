import React from "react";
import Tag from "../common/Tag";
import { TECHNOLOGIES } from "../../utils/constants";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function HomeV2() {
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
          <div className="flex flex-wrap"></div>
        </div>
      </div>
    </main>
  );
}
