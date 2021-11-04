import React from "react";
import AppLink from "../components/common/AppLink";
import { TECHNOLOGIES } from "../utils/constants";

export default [
  {
    name: "Zen Player",
    links: [
      {
        text: "source code",
        url: "https://github.com/zawlinnnaing/zen-player",
      },
    ],
    logo: {
      src: "https://raw.githubusercontent.com/zawlinnnaing/zen-player/main/assets/icon.png",
    },
    summary: (
      <>
        Zen Player is a side project, I am currently working on. It is a video
        player focuses mainly on preventing users from spending more time than
        it should be on YouTube videos. Due to YouTube recommendation, we often
        tend to watch more videos than we originally came for. Thus, lots of
        time wasted on watching videos that are not related to our search
        intention. The main features I am currently working on includes ability
        to search videos by name or url on YouTube, provide analytics on watch
        time, allow maximum watch timer for each day, allow creating queues and
        looping of videos. It will be available on both web and android.
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
        This is the first website I built using both{" "}
        <i>Gatsby.js and Tailwind CSS</i>. I also implemented Continuous
        Delivery (CD) mechanism using{" "}
        <AppLink href="https://github.com/features/actions">
          GitHub Actions
        </AppLink>{" "}
        to enable deploying the website to <i>GitHub Page</i> continuously every
        time I push code changes to a specified branch.
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
        I forked from{" "}
        <AppLink href="https://github.com/KIMSEUNGGYU/AI-Art-Lab/tree/master/Creative_adversarial_networks_tensorflow">
          the original repo
        </AppLink>{" "}
        and worked on Tensorflow implementation of Creative Adversarial Network
        (CAN) model which generates creative art works by training upon{" "}
        <AppLink
          href="https://www.kaggle.com/c/painter-by-numbers"
          openInNewWindow
        >
          art styles dataset
        </AppLink>
        . My main contribution for the project includes;
        <br />
        <ul className="list-disc ml-6">
          <li>
            Up-scaled Generator model output image by 2 times, including its
            neural network Parameters. (from 256x256 to 512x512)
          </li>
          <li>
            Transformed the code structure to a single file that can be trained
            on{" "}
            <AppLink href="https://colab.research.google.com/">
              Google Colaboratory
            </AppLink>
            .
          </li>
          <li>
            Created trained checkpoint files for both original resolution model
            (256x256) and enhanced resolution (512x512) model.
          </li>
        </ul>
      </>
    ),
    technologies: [TECHNOLOGIES.python, TECHNOLOGIES.tensorflow],
  },
];
