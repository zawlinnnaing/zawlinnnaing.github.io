import React from "react";
import MyImage from "../../images/me.jpg";
import { CONTACT_INFO } from "../../utils/constants";
import AppCard from "../common/AppCard";
import AppLinkIcon from "../common/AppLinkIcon";

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
          <p className="py-2">
            {CONTACT_INFO.map((contact) => (
              <span className="px-1">
                <AppLinkIcon
                  href={contact.uri}
                  src={contact.icon}
                  key={contact.name}
                  size={24}
                />
              </span>
            ))}
          </p>
        </section>
      </AppCard>
    </>
  );
}
