import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import { getInitTheme, THEME_MODES } from "../../utils/theme";

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
        bg={getInitTheme() === THEME_MODES.dark ? "#111827" : "#F9FAFB"}
      >
        {children}
      </AniLink>
    </>
  );
}
