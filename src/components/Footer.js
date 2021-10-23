import React from "react";
import LinkedIn from "../assets/icons/linkedin.png";
import Gmail from "../assets/icons/gmail.png";
import GitHub from "../assets/icons/github.png";

function FooterIcon({ src, href }) {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer">
        <img
          className="inline-block"
          src={src}
          alt="footer icon"
          height={16}
          width={16}
        />
      </a>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <section className="text-center h-12 flex justify-center dark:bg-gray-700 bg-gray-200">
        <div className="my-auto">
          Contact me: &nbsp;{" "}
          <FooterIcon
            src={LinkedIn}
            href="https://www.linkedin.com/in/zaw-linn-naing-184931159"
          />
          &nbsp;
          <FooterIcon src={Gmail} href="mailto://zawlinnnaing0018@gmail.com" />
          &nbsp;
          <FooterIcon href="https://github.com/zawlinnnaing" src={GitHub} />
        </div>
      </section>
    </>
  );
}
