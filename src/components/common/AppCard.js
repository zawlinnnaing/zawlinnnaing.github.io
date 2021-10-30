import React from "react";

export default function AppCard({ className, children, title }) {
  return (
    <>
      <figure
        className={`dark:bg-gray-100 bg-gray-700 rounded p-8 shadow-md ${className}`}
      >
        {title && <div className="p-8 text-xl font-bold">{title}</div>}
        <div className="p-8 text-white dark:text-gray-900">{children}</div>
      </figure>
    </>
  );
}
