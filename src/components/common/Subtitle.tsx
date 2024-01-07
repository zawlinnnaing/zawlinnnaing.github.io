import React, { PropsWithChildren } from "react";

export default function Subtitle(
  props: PropsWithChildren<{ className?: string }>
) {
  return (
    <p className={["text-gray-400", props.className].join(" ")}>
      {props.children}
    </p>
  );
}
