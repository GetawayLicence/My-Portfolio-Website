import { Navbar } from "../components/Navbar";
import { SpotBackground } from "@/components/SpotBackground";
import { HeroSection } from "../components/Hero";
import { AboutSection } from "../components/About";
import { ExperienceSection } from "../components/Experience";
import { SkillsSection } from "../components/Skills";
import { CertificationSection } from "../components/Certifications";
import { ProjectsSection } from "../components/Projects";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";
import { LoadingSection } from "../components/Loading";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Home = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => setShowLoading(false), 5000);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (showLoading) return <LoadingSection />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <SpotBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationSection />
          <ProjectsSection />
          <ContactSection />
      </main>

      {/* Footer */}
      <Footer />  
    </div>
  );
};