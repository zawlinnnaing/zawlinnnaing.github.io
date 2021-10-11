import React from "react";

export default function AppLink({
  children,
  className = "",
  href = "",
  openInNewWindow = true,
}) {
  return (
    <a
      className={`app-link ${className}`}
      href={href}
      target={openInNewWindow ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
