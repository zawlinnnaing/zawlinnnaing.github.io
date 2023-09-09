import { GatsbyNode } from "gatsby";

export const sourceNodes: GatsbyNode["sourceNodes"] = (gatsbyAPI) => {
  gatsbyAPI.reporter.info("Notion source plugin ==> sourceNodes");
};
