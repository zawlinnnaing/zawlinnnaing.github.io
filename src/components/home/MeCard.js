import React from "react";
import useAppContext from "../../hooks/useAppContext";
import MyImage from "../../images/me.jpg";
import { CONTACT_INFO } from "../../utils/constants";
import AppCard from "../common/AppCard";
import AppLinkIcon from "../common/AppLinkIcon";

export default function MeCard() {
  const { isDarkMode } = useAppContext();
  return (
    <>
      <AppCard className="app-card" size="small">
        <img
          src={MyImage}
          alt="My profile"
          className="h-32 w-auto rounded-full mx-auto"
        />
        <section>
          <p className="">Hi, I am</p>
          <p className="text-2xl font-bold">Zaw Lin Naing</p>
          <p>
            A software engineer, who builds mostly web-related stuff but not
            limited to it and likes to build things for fun and professionally.
          </p>
          <p className="py-2">
            {CONTACT_INFO.map((contact) => (
              <span className="px-1" key={contact.name}>
                <AppLinkIcon
                  href={contact.uri}
                  src={
                    isDarkMode
                      ? contact.icon
                      : contact.iconLight || contact.icon
                  }
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
