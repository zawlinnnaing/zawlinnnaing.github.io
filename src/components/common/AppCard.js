import { isString } from "lodash";
import React, { useMemo } from "react";

export default function AppCard({ className, children, title, size }) {
  const sizeStyleClass = useMemo(
    () => (size === "small" ? "p-4" : "p-8"),
    [size]
  );

  return (
    <>
      <figure
        className={`dark:bg-gray-100 bg-gray-900 rounded ${sizeStyleClass} shadow-md ${className}`}
      >
        {title &&
          (isString(title) ? (
            <div
              className={`${sizeStyleClass} text-xl font-bold text-white dark:text-gray-900`}
            >
              {title}
            </div>
          ) : (
            title
          ))}
        <div className={`${sizeStyleClass} text-white dark:text-gray-900`}>
          {children}
        </div>
      </figure>
    </>
  );
}
