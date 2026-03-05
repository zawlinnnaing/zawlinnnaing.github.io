import React from "react";
import AppLink from "../components/common/AppLink";
import { TECHNOLOGIES } from "../utils/constants";
import { IProject } from "./types";

const projects: IProject[] = [
  {
    name: "AI Review CLI",
    logo: {
      text: "AI Review CLI",
    },
    technologies: [TECHNOLOGIES.typescript, TECHNOLOGIES.nodejs],
    links: [
      {
        text: "source code",
        url: "https://github.com/zawlinnnaing/ai-review-cli",
      },
    ],
    summary: (
      <>
        AI-review CLI is an open-source command-line tool that lets AI coding
        agents (Claude Code, Cursor, GitHub Copilot, etc.) perform automated
        code reviews on GitLab Merge Requests. It handles the integration work —
        authenticating with GitLab, fetching and normalizing diffs, annotating
        line numbers, and posting structured inline comments to provide context
        for AI agents to review. Developers run{" "}
        <code>ai-review get-context &lt;MR_URL&gt;</code> to pull a structured
        JSON snapshot of the MR, feed it to their AI agent of choice, then use{" "}
        <code>ai-review post-comments</code> to publish the results back to
        GitLab. Built in TypeScript on Node.js, it ships as both an npm package
        and pre-built binaries for macOS, Linux, and Windows, with a provider
        abstraction layer designed to support GitHub in a future release.
      </>
    ),
  },
  {
    name: "Zen Mode Extension",
    links: [
      {
        text: "source code",
        url: "https://github.com/zen-suite/focus-mode-extension",
      },
      {
        text: "download extension",
        url: "https://chrome.google.com/webstore/detail/zen-mode-block-distractio/cblailchdcmjcjjklmninjaoifijfdmg",
      },
    ],
    logo: {
      src: "https://raw.githubusercontent.com/zen-suite/focus-mode-extension/943a82b7eb203e3dda69f8047c928d4cb5c65674/public/logo.png",
    },
    technologies: [
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.reactJs,
      TECHNOLOGIES.vite,
      TECHNOLOGIES.chromeExtension,
    ],
    summary: (
      <>
        Zen Mode Extension is a Chrome browser extension that I developed to
        optimize productivity and minimize distractions. It empowers users to
        regain control over their online experience by blocking access to up to
        5000 domains. As a testament to its versatility, this extension also
        boasts a search functionality, enabling users to effortlessly search for
        and unblock specific websites that may be temporarily restricted. By
        integrating comprehensive website blocking features with a user-friendly
        search function, Zen Mode Extension offers an efficient solution for
        enhancing productivity and maintaining focus during web browsing.
      </>
    ),
  },
  {
    name: "Zen Player",
    links: [
      {
        text: "source code",
        url: "https://github.com/zawlinnnaing/zen-player",
      },
    ],
    logo: {
      text: "Zen Player",
    },
    summary: (
      <>
        Zen Player is a video player designed to reduce time wasted on YouTube
        by helping users watch only what they intend to. It supports searching
        videos by name or URL and video queues with looping on both web and
        Android.
      </>
    ),
    technologies: [TECHNOLOGIES.flutter],
  },
  {
    name: "Portfolio Website (This One)",
    links: [
      {
        text: "source code",
        url: "https://github.com/zawlinnnaing/zawlinnnaing.github.io",
      },
    ],
    logo: {
      text: "Portfolio",
    },
    summary: (
      <>
        This portfolio website is built with Gatsby.js and Tailwind CSS, and
        CI/CD is set up with GitHub Actions to be automatically deployed to
        GitHub Pages.
      </>
    ),
    technologies: [
      TECHNOLOGIES.gatsbyJs,
      TECHNOLOGIES.tailwindCSS,
      TECHNOLOGIES.githubPage,
    ],
  },
  {
    name: "Tensorflow Implementation of CAN",
    links: [
      {
        text: "source code",
        url: "https://github.com/zawlinnnaing/CAN-thesis",
      },
      {
        text: "article",
        url: "https://medium.com/@zawlinnnaing0018/creating-new-art-works-by-integrating-creative-adversarial-network-can-and-neural-style-bed8aa51fb3a",
      },
    ],
    logo: {
      text: "Creative Adversarial Network",
    },
    summary: (
      <>
        Built as a graduation thesis, this project implements a{" "}
        <AppLink href="https://arxiv.org/abs/1706.07068" openInNewWindow>
          Creative Adversarial Network (CAN)
        </AppLink>{" "}
        using TensorFlow to generate artwork trained on an art styles dataset. I
        enhanced the model to generate higher resolution images simplified the
        training setup for Google Colab, and produced trained checkpoints for
        both original and improved models.
      </>
    ),
    technologies: [TECHNOLOGIES.python, TECHNOLOGIES.tensorflow],
  },
];

export default projects;
