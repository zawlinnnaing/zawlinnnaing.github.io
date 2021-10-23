import React from "react";
import MyImage from "../../images/me.jpg";
import AppCard from "../common/AppCard";

export default function MeCard() {
  return (
    <>
      <AppCard>
        <img
          src={MyImage}
          alt="My profile"
          className="h-32 w-auto rounded-full mx-auto"
        />
        <section>
          <p className="">Hi, I am</p>
          <p className="text-2xl font-bold">Zaw Lin Naing</p>
          <p>
            A software engineer, who builds things for fun and professionally.
          </p>
        </section>
      </AppCard>
    </>
  );
}
