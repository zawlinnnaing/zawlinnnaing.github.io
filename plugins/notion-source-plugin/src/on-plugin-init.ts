import type { GatsbyNode } from "gatsby";

export const onPluginInit: GatsbyNode["unstable_onPluginInit"] = ({
  reporter,
}) => {
  reporter.info("🚀 Notion source plugin loaded");
};
