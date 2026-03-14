import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { ContactSection } from "../components/home/ContactSection";
import { NAV_LINKS } from "../components/home/constants";
import { ExperienceSection } from "../components/home/ExperienceSection";
import { HeroSection } from "../components/home/HeroSection";
import { HomeFooter } from "../components/home/HomeFooter";
import { Navbar } from "../components/home/Navbar";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { SkillsSection } from "../components/home/SkillsSection";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const visible = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.intersectionRatio);
        });
        let best = "";
        let bestRatio = -1;
        sectionIds.forEach((id) => {
          const ratio = visible.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setActiveSection(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Zaw Lin Naing – Senior Full-stack Engineer</title>
        <meta
          name="description"
          content="Senior Full-stack software engineer with 7+ years of experience specialising in TypeScript, Node.js, React, and cloud systems. Based in Bangkok, Thailand."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Zaw Lin Naing – Senior Full-stack Engineer",
            url: "https://zawlinnnaing.com",
            mainEntity: {
              "@type": "Person",
              name: "Zaw Lin Naing",
              jobTitle: "Full-stack Software Engineer",
              url: "https://zawlinnnaing.com",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Zaw Lin Naing – Portfolio",
            url: "https://zawlinnnaing.com",
          })}
        </script>
      </Helmet>

      <div className="bg-gray-900 min-h-screen text-gray-300">
        <Navbar
          scrolled={scrolled}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          activeSection={activeSection}
          navLinks={NAV_LINKS}
        />

        <main className="max-w-5xl mx-auto px-6">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <HomeFooter />
      </div>
    </>
  );
}
