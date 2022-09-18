import React from "react";
import UnderConstruction from "../../images/under-construction.svg";

export default function UnderConstructionCard({ bodyText }) {
  return (
    <figure className="dark:bg-gray-100 bg-gray-800 rounded p-8 shadow-md text-center max-h-250px">
      <img
        className="w-80 h-auto rounded-full mx-auto -top-32 relative bg-white p-4 dark:bg-gray-900"
        src={UnderConstruction}
        alt="Under construction"
      />
      <p className="dark:text-black text-lg font-bold text-white mt-8 -top-32 relative">
        {bodyText}
      </p>
    </figure>
  );
}
