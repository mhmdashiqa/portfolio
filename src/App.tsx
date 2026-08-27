import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import WelcomeScreen from "@/components/WelcomeScreen";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import About from "@/pages/About";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome]);

  // Intersection observer to automatically highlight current section in navbar
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-white/20 selection:text-white">
            {/* Preloader */}
            <AnimatePresence>
              {showWelcome && (
                <WelcomeScreen onComplete={() => setShowWelcome(false)} />
              )}
            </AnimatePresence>

            {/* Interactive Particle Background Canvas */}
            <ParticleBackground />

            {/* Fixed Glassmorphism Navbar */}
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            {/* Main Page Content */}
            <main className="relative z-10">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
          </div>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}