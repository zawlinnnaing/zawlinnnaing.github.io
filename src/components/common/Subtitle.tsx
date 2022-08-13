import React from "react";

export default function Subtitle({ className = "", children }) {
  return (
    <p className={["text-gray-500", "dark:text-gray-400", className].join(" ")}>
      {children}
    </p>
  );
}
