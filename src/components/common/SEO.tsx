import React from "react";
import { Helmet } from "react-helmet";

const SITE_URL = "https://zawlinnnaing.com";

const DEFAULT_DESCRIPTION =
  "Full-stack software engineer with 7+ years of experience specialising in TypeScript, Node.js, React, and cloud systems. Based in Bangkok, Thailand.";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zaw Lin Naing",
  jobTitle: "Full-stack Software Engineer",
  url: SITE_URL,
  email: "zawlinnnaing0018@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/zlnaing",
    "https://github.com/zawlinnnaing",
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "React",
    "Next.js",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
    "Terraform",
    "LLM Integration",
    "AI Agents",
  ],
};

export default function SEO({
  title = "Zaw Lin Naing – Senior Software Engineer",
  description = DEFAULT_DESCRIPTION,
  url = SITE_URL,
  image = `${SITE_URL}/icons/icon-512x512.png`,
}: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="author" content="Zaw Lin Naing" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Zaw Lin Naing" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* JSON-LD: Person (sitewide) */}
        <script type="application/ld+json">
          {JSON.stringify(PERSON_SCHEMA)}
        </script>
      </Helmet>
    </>
  );
}
