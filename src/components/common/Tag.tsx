import React from "react";
import { isEmpty } from "lodash";

export default function Tag({ text, url }: { text: string; url: string }) {
  const TextComp = isEmpty(url) ? (
    <>{text}</>
  ) : (
    <a
      href={url}
      target="_blank"
      rel="noreferrer nofollow"
      className="hover:underline"
    >
      {text}
    </a>
  );

  return (
    <>
      <div className="py-1 px-2 inline-block bg-green-500 text-white mr-2 mb-2 text-sm md:text-base">
        {TextComp}
      </div>
    </>
  );
}
