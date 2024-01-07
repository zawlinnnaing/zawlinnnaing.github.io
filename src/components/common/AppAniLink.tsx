import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

export default function AppAniLink({
  duration = 1,
  to,
  getProps,
  children,
}: React.PropsWithChildren<React.ComponentProps<typeof AniLink>>) {
  return (
    <>
      <AniLink
        getProps={getProps}
        duration={duration}
        to={to}
        cover
        bg={"#111827"}
      >
        {children}
      </AniLink>
    </>
  );
}
