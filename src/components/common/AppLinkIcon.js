import React from "react";

export default function AppLinkIcon({ src, href, size = 16 }) {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer">
        <img
          className="inline-block"
          src={src}
          alt="footer icon"
          height={size}
          width={size}
        />
      </a>
    </>
  );
}
