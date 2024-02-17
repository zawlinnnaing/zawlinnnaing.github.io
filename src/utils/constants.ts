import { url } from "inspector";
import GitHubDark from "../assets/icons/github-dark.png";
import GitHubLight from "../assets/icons/github-light.png";
import Email from "../assets/icons/gmail.png";
import LinkedIn from "../assets/icons/linkedin.png";

export const ROUTES = Object.freeze([
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "About me", href: "/about" },
]);

export const TECHNOLOGIES = {
  redis: {
    text: "Redis",
    url: "https://redis.io",
  },
  nodejs: {
    text: "Node.js",
    url: "https://nodejs.org",
  },
  elasticsearch: {
    text: "Elasticsearch",
    url: "https://www.elastic.co/",
  },
  websocket: {
    text: "Real-time Websocket",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  },
  typescript: {
    text: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  gatsbyJs: {
    text: "Gatsby.js",
    url: "https://www.gatsbyjs.com/",
  },
  tailwindCSS: {
    text: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  githubPage: {
    text: "GitHub Page",
    url: "https://pages.github.com/",
  },
  laravel: {
    text: "Laravel",
    url: "https://laravel.com/",
  },
  redux: {
    text: "Redux",
    url: "https://redux.js.org/",
  },
  mysql: {
    text: "MySQL",
    url: "https://www.mysql.com/",
  },
  postgresql: {
    text: "PostgreSQL",
    url: "https://www.postgresql.org/",
  },
  mongodb: {
    text: "MongoDB",
    url: "https://www.mongodb.com/",
  },
  reactJs: {
    text: "React.JS",
    url: "https://reactjs.org/",
  },
  vue: {
    text: "Vue.js",
    url: "https://vuejs.org/",
  },
  docker: {
    text: "Docker",
    url: "https://www.docker.com/",
  },
  kubernetes: {
    text: "Kubernetes",
    url: "https://kubernetes.io/",
  },
  graphql: {
    text: "GraphQL",
    url: "https://graphql.org/",
  },
  jquery: {
    text: "JQuery",
    url: "https://jquery.com/",
  },
  firebase: {
    text: "Firebase",
    url: "https://firebase.google.com/",
  },
  googleMap: {
    text: "Google Map API",
    url: "https://developers.google.com/maps",
  },
  nuxt: {
    text: "Nuxt.js",
    url: "https://nuxtjs.org/",
  },
  flutter: {
    text: "Flutter",
    url: "https://flutter.dev/",
  },

  python: {
    text: "Python",
    url: "https://www.python.org/",
  },
  tensorflow: {
    text: "Tensorflow",
    url: "https://www.tensorflow.org/",
  },
  aws: {
    text: "Amazon Web Services",
    url: "https://aws.amazon.com/",
  },
  serverless: {
    text: "Serverless",
    url: "https://www.serverless.com/",
  },
  prisma: {
    text: "Prisma ORM",
    url: "https://www.prisma.io/",
  },
  vite: {
    text: "Vite",
    url: "https://vitejs.dev/",
  },
  chromeExtension: {
    text: "Chrome Web Extension",
    url: "https://developer.chrome.com/docs/extensions/mv3/",
  },
  nextJS: {
    text: "Next.js",
    url: "https://nextjs.org",
  },
  yjs: {
    text: "Yjs",
    url: "https://yjs.dev",
  },
};

export const CONTACT_INFO = [
  {
    icon: LinkedIn,
    name: "LinkedIn",
    text: "zlnaing",
    uri: "https://www.linkedin.com/in/zlnaing/",
  },
  {
    icon: GitHubDark,
    iconLight: GitHubLight,
    name: "Github",
    text: "zawlinnnaing",
    uri: "https://github.com/zawlinnnaing",
  },
  {
    icon: Email,
    name: "Email",
    text: "zawlinnnaing0018@gmail.com",
    uri: "mailto:zawlinnnaing0018@gmail.com",
  },
];

export const RESUME_LINK =
  "https://docs.google.com/document/d/1PLzmX_DR6wARbjrEMneYnTu-hg0xR0Tmlpk0D0nPFA0/export?format=pdf&attachment=false";
