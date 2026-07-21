"use client";

import { motion } from "motion/react";
import { type TabName } from "@/types";

const TABS: TabName[] = [
  "About",
  "Education",
  "Experience",
  "Skills",
  "Certifications",
  "Projects",
  "Activities",
  "Contact",
];

interface NavbarProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="glass px-2 py-2 mb-6 overflow-x-auto">
      <ul className="flex min-w-max items-center gap-1 xl:min-w-0 xl:w-full">
        {TABS.map((tab) => (
          <li key={tab} className="relative shrink-0 xl:flex-1">
            <button
              onClick={() => onTabChange(tab)}
              className={`relative z-10 w-full whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors xl:px-2 ${
                activeTab === tab
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-lg -z-10"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
