import React from "react";
import useAppContext from "../hooks/useAppContext";
import { CONTACT_INFO } from "../utils/constants";
import AppLinkIcon from "./common/AppLinkIcon";

export default function Footer({ className }) {
  const { isDarkMode } = useAppContext();
  return (
    <>
      <section
        className={`text-center h-12 justify-center flex dark:bg-gray-700 bg-gray-200 ${className}`}
      >
        <div className="my-auto">
          Contact me: &nbsp;{" "}
          {CONTACT_INFO.map((contactInfo) => (
            <span key={contactInfo.name}>
              <AppLinkIcon
                size={20}
                href={contactInfo.uri}
                key={contactInfo.name}
                src={
                  isDarkMode
                    ? contactInfo.icon || contactInfo.iconLight
                    : contactInfo.icon
                }
              />
              &nbsp;
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
