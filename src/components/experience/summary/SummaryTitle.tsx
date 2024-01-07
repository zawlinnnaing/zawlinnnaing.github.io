import React from "react";
import * as SummaryStyles from "./summary.module.css";

export default function SummaryTitle(props: { title: string }) {
  return <h1 className={SummaryStyles.sectionTitle}>{props.title}</h1>;
}
