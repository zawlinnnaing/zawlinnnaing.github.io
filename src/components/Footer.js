import React from "react";
import { CONTACT_INFO } from "../utils/constants";
import AppLinkIcon from "./common/AppLinkIcon";

export default function Footer({ className }) {
  return (
    <>
      <section
        className={`text-center h-12 justify-center flex dark:bg-gray-700 bg-gray-200 ${className}`}
      >
        <div className="my-auto">
          Contact me: &nbsp;{" "}
          {/* <FooterIcon
            src={LinkedIn}
            href="https://www.linkedin.com/in/zaw-linn-naing-184931159"
          />
          &nbsp;
          <FooterIcon src={Gmail} href="mailto://zawlinnnaing0018@gmail.com" />
          &nbsp;
          <FooterIcon href="https://github.com/zawlinnnaing" src={GitHub} /> */}
          {CONTACT_INFO.map((contactInfo) => (
            <span key={contactInfo.name}>
              <AppLinkIcon
                href={contactInfo.uri}
                key={contactInfo.name}
                src={contactInfo.icon}
              />
              &nbsp;
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
