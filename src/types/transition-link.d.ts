declare module "gatsby-plugin-transition-link/AniLink" {
  export default React.Component<{
    cover?: boolean;
    bg?: string;
    duration?: number;
    to: string;
    swipe?: boolean;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    getProps?: (data: { isCurrent: boolean }) => { className: string };
    "aria-current"?: string;
    entryOffset?: number;
    children?: React.ReactNode;
  }>;
}
