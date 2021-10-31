import LinkedIn from "../assets/icons/linkedin.png";
import Email from "../assets/icons/gmail.png";
import GitHubDark from "../assets/icons/github-dark.png";
import GitHubLight from "../assets/icons/github-light.png";

export const ROUTES = Object.freeze([
  // { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "About me", href: "/about" },
  { name: "Contact", href: "/contact" },
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
    name: "Gmail",
    text: "zawlinnnaing0018@gmail.com",
    uri: "mailto://zawlinnnaing0018@gmail.com",
  },
];
