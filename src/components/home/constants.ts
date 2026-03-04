import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { NavLink } from "./types";

export const FEATURED_COUNT = 2;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Get in Touch", href: "#contact" },
];

export const CONTACT_ICONS: Record<string, { Icon: any; color: string }> = {
  LinkedIn: { Icon: FaLinkedin, color: "#0077B5" },
  Github: { Icon: SiGithub, color: "#e2e8f0" },
  Email: { Icon: FaEnvelope, color: "#EA4335" },
};
