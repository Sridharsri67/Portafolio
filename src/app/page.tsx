"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import Components
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Monitor shortcut backtick key to open terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "Backquote") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleTerminalToggle = () => {
    setTerminalOpen((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-black">
          {/* Custom overlays & backgrounds */}
          <ScrollProgress />
          
          {/* Floating glowing background blobs (Subtle) */}
          <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#ff5353]/2 blur-[180px] pointer-events-none z-0" />
          <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-neutral-900/10 blur-[180px] pointer-events-none z-0" />

          {/* Navigation */}
          <Navbar onTerminalToggle={handleTerminalToggle} />

          {/* Page Sections - Wrapper is full width, internal sections use max-w-7xl */}
          <main className="flex-1 w-full relative z-10 space-y-24">
            
            {/* Hero view */}
            <Hero />

            {/* About Profile Section */}
            <About />

            {/* Projects gallery */}
            <Projects />

            {/* Skills & Arsenal */}
            <Skills />

            {/* Certifications slider */}
            <Certifications />

            {/* Contact dispatch form */}
            <Contact />

          </main>

          {/* Footer signature */}
          <Footer />

          {/* Command Terminal Easter Egg overlay modal */}
          <TerminalEasterEgg isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        </div>
      )}
    </>
  );
}
