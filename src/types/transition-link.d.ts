declare module "gatsby-plugin-transition-link/AniLink" {
  export default React.Component<{
    cover?: boolean;
    bg?: string;
    duration?: number;
    to: string;
    getProps?: (data: { isCurrent: boolean }) => { className: string };
    "aria-current"?: string;
    children?: React.ReactNode;
  }>;
}
