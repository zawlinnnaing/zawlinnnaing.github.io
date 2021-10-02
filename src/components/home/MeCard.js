import React from "react";
import MyImage from "../../images/me.jpg";

export default function MeCard() {
  return (
    <>
      <figure className="dark:bg-gray-100 bg-gray-900 rounded p-8 shadow-md">
        <img
          src={MyImage}
          alt="My profile"
          className="h-32 w-auto rounded-full mx-auto"
        />
        <section className="p-8 text-white dark:text-gray-900 text-center">
          <p className="">Hi, I am</p>
          <p className="text-2xl font-bold">Zaw Lin Naing</p>
          <p>A software engineer, who builds things for fun and professionally.</p>
        </section>
      </figure>
    </>
  );
}
