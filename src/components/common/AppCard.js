import { isString } from "lodash";
import React from "react";

export default function AppCard({ className, children, title }) {
  return (
    <>
      <figure
        className={`dark:bg-gray-100 bg-gray-900 rounded p-8 shadow-md ${className}`}
      >
        {title &&
          (isString(title) ? (
            <div className="p-8 text-xl font-bold text-white dark:text-gray-900">
              {title}
            </div>
          ) : (
            title
          ))}
        <div className="p-8 text-white dark:text-gray-900">{children}</div>
      </figure>
    </>
  );
}
