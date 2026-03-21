"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { type TabName, type Project } from "@/types";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AboutSection from "./about/AboutSection";
import Education from "./resume/Education";
import Experience from "./resume/Experience";
import Skills from "./resume/Skills";
import Certifications from "./resume/Certifications";
import ProjectsSection from "./projects/ProjectsSection";
import BlogSection from "./blog/BlogSection";
import ContactSection from "./contact/ContactSection";

interface PortfolioAppProps {
  projects: Project[];
}

export default function PortfolioApp({ projects }: PortfolioAppProps) {
  const [activeTab, setActiveTab] = useState<TabName>("About");

  const renderTab = () => {
    switch (activeTab) {
      case "About":
        return <AboutSection />;
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      case "Skills":
        return <Skills />;
      case "Certifications":
        return <Certifications />;
      case "Projects":
        return <ProjectsSection projects={projects} />;
      case "Blog":
        return <BlogSection />;
      case "Contact":
        return <ContactSection />;
    }
  };

  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          className="lg:w-[300px] shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sidebar />
        </motion.div>

        {/* Main content */}
        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {renderTab()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
