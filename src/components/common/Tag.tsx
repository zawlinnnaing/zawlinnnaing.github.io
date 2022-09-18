import React from "react";
import { isEmpty } from "lodash";

export default function Tag({ text, url }) {
  const TextComp = isEmpty(url) ? (
    <>{text}</>
  ) : (
    <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
      {text}
    </a>
  );

  return (
    <>
      <div className="py-1 px-2 inline-block bg-green-500 text-white mr-2 mb-2">
        {TextComp}
      </div>
    </>
  );
}
