import React from "react";

export default function SummarySection(props: React.PropsWithChildren<{}>) {
  return <section className="py-2">{props.children}</section>;
}
