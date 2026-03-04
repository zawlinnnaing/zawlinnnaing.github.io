import React from "react";
import { Skill } from "./types";

export function TechTag({ text, icon: Icon, color, link }: Skill) {
  const textColor = color ?? "#4ade80";
  const bgColor = color ? `${color}1a` : "rgba(74,222,128,0.1)";
  const inner = (
    <>
      {Icon && <Icon style={{ color: textColor }} />}
      {text}
    </>
  );
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-mono px-2 py-1 rounded mr-2 mb-1 hover:underline transition-opacity"
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        {inner}
      </a>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-1 text-sm font-mono px-2 py-1 rounded mr-2 mb-1"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {inner}
    </span>
  );
}
