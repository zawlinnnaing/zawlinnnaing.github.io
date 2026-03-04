import React from "react";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <h2 className="text-2xl font-bold text-gray-100 whitespace-nowrap">
        <span className="font-mono text-green-500 mr-2">{number}.</span>
        {title}
      </h2>
      <div className="h-px bg-gray-700 flex-1 max-w-xs" />
    </div>
  );
}
