import React from "react";
import * as SummaryStyles from "./summary.module.css";

export default function SummaryList(props: React.PropsWithChildren<{}>) {
  return <ul className={SummaryStyles.list}>{props.children}</ul>;
}
