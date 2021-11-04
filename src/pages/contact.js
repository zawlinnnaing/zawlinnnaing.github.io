import React from "react";
import Layout from "../components/Layout";
import AppCard from "../components/common/AppCard";
import TransitionContainer from "../components/common/TransitionContainer";
import SEO from "../components/common/SEO";
import { CONTACT_INFO } from "../utils/constants";
import AppLink from "../components/common/AppLink";

export default function ContactPage() {
  return (
    <>
      <Layout showFooter={false}>
        <SEO title="Contact Me - Zaw Linn Naing" />
        <div className="h-screen-90 text-center text-white dark:text-gray-900">
          <TransitionContainer>
            <AppCard
              className="top-1/4 text-left p-6 app-card break-words"
              size="small"
            >
              <div className="text-xl font-bold mb-2">Contact Me</div>
              <p className="mb-2">
                I am currently available to hire. Feel free to drop me a
                message.
              </p>
              <section>
                {CONTACT_INFO.map((contact) => (
                  <div
                    className="lg:flex justify-items-start lg:space-x-4 text-left flex-wrap"
                    key={contact.name}
                  >
                    <span className="text-bold w-28 lg:inline-block block">
                      {contact.name}:
                    </span>
                    <AppLink href={contact.uri}>{contact.text}</AppLink>
                  </div>
                ))}
              </section>
            </AppCard>
          </TransitionContainer>
        </div>
      </Layout>
    </>
  );
}
