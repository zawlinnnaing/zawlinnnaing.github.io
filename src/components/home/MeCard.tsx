import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { CONTACT_INFO } from "../../utils/constants";
import AppCard from "../common/AppCard";
import AppLinkIcon from "../common/AppLinkIcon";
import * as styles from "./me.module.css";

export default function MeCard() {
  const { isDarkMode } = useAppContext();
  return (
    <>
      <AppCard className={`app-card  ${styles.meCard}`} size="small">
        <section>
          <p className="">Hi, I am</p>
          <p className="text-2xl font-bold text-green-500 py-4">
            Zaw Lin Naing
          </p>
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
