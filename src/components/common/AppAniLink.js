import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

export default function AppAniLink({ key, getProps, children }) {
  return (
    <>
      <AniLink key={key} getProps={getProps}>
        {children}
      </AniLink>
    </>
  );
}
