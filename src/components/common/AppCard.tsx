import { isString } from "lodash";
import React, { useMemo } from "react";

export default function AppCard({
  className,
  children,
  title,
  size,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
  size: "small" | "large";
}) {
  const sizeStyleClass = useMemo(
    () => (size === "small" ? "p-4" : "p-8"),
    [size]
  );

  return (
    <>
      <div
        className={`dark:bg-gray-100 bg-gray-900 rounded ${sizeStyleClass} shadow-md ${className}`}
      >
        {title &&
          (isString(title) ? (
            <div className="text-xl font-bold text-white dark:text-gray-900">
              {title}
            </div>
          ) : (
            title
          ))}
        <div className="text-white dark:text-gray-900">{children}</div>
      </div>
    </>
  );
}
