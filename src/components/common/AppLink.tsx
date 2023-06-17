import React from "react";

export default function AppLink({
  children,
  className = "",
  href = "",
  openInNewWindow = true,
}: React.PropsWithChildren<{
  className?: string;
  href?: string;
  openInNewWindow?: boolean;
}>) {
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
