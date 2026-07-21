"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
  Download,
  Eye,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";
import HuggingFaceIcon from "@/components/ui/HuggingFaceIcon";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  facebook: <Facebook size={18} />,
  huggingface: <HuggingFaceIcon size={18} />,
  mail: <Mail size={18} />,
};

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="glass p-6 lg:sticky lg:top-8 lg:h-fit">
      {/* Basic info — always visible */}
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]">
            {personalInfo.name}
          </h1>
          <p className="text-sm font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 rounded-full px-3 py-0.5 mt-1 inline-block">
            {personalInfo.title}
          </p>
          <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-[var(--color-text-secondary)]">
            {personalInfo.tagline}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden ml-auto p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label={isExpanded ? "Hide contacts" : "Show contacts"}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={20} className="text-slate-500" />
          </motion.div>
        </button>
      </div>

      {/* Desktop: always visible */}
      <div className="hidden lg:block">
        <ContactDetails />
      </div>

      {/* Mobile: animated toggle */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ContactDetails />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}

function ContactDetails() {
  return (
    <>
      <div className="h-px bg-slate-200 my-4" />

      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <Mail size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Email</p>
            <a href={`mailto:${personalInfo.email}`} className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <Phone size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Phone</p>
            <a href={`tel:${personalInfo.phone}`} className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
              {personalInfo.phone}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <Calendar size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Birthday</p>
            <time className="text-sm text-[var(--color-text-primary)]">{personalInfo.dob}</time>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100">
            <MapPin size={16} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Location</p>
            <address className="text-sm text-[var(--color-text-primary)] not-italic">{personalInfo.location}</address>
          </div>
        </li>
      </ul>

      <div className="h-px bg-slate-200 my-4" />

      <ul className="flex items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="p-2 rounded-lg bg-slate-100 hover:bg-[var(--color-accent)] hover:text-white text-slate-500 transition-all duration-200 inline-flex hover:scale-110"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </a>
          </li>
        ))}
      </ul>

      <div className="h-px bg-slate-200 my-4" />

      <div className="flex flex-col gap-2">
        <a
          href={personalInfo.resumeUrl}
          download
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
        >
          <Download size={16} />
          Download Resume
        </a>
        <a
          href={personalInfo.resumeViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-accent)] text-[var(--color-accent)] font-medium text-sm hover:bg-[var(--color-accent)]/10 transition-colors"
        >
          <Eye size={16} />
          View Resume
        </a>
      </div>
    </>
  );
}
