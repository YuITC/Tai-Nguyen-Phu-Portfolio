"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { socialLinks } from "@/data/personal";
import { sendContactEmail } from "@/lib/emailjs";
import GlassCard from "@/components/ui/GlassCard";
import HuggingFaceIcon from "@/components/ui/HuggingFaceIcon";
import SectionTitle from "@/components/ui/SectionTitle";

const contactIconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  facebook: <Facebook size={20} />,
  huggingface: <HuggingFaceIcon size={20} />,
  mail: <Mail size={20} />,
};

const contactLinks = [
  ...socialLinks,
  {
    name: "Phone",
    url: "tel:+84945409269",
    icon: "phone",
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const isValid =
    formData.fullname.trim() &&
    formData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.message.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");
    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ fullname: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section>
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <SectionTitle title="Contact" icon={MessageSquare} />
      </motion.header>

      <motion.div
        className="mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-text-primary)]">
          Let&apos;s Build Reliable AI Systems
        </h3>
        <p className="mt-2 text-[var(--color-text-secondary)] leading-relaxed">
          Have a role, project, or research idea involving LLM agents, RAG, or
          multimodal document AI? Email me at{" "}
          <a
            href="mailto:tainguyenphu2502@gmail.com"
            className="font-medium text-[var(--color-accent)] hover:underline"
          >
            tainguyenphu2502@gmail.com
          </a>{" "}
          or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/taingph2502/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-accent)] hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("tel:") || link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.url.startsWith("tel:") || link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="glass flex items-center gap-3 p-3 rounded-xl hover:shadow-md transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
              {link.icon === "phone" ? <Phone size={20} /> : contactIconMap[link.icon]}
            </div>
            <span className="text-sm font-medium text-[var(--color-text-primary)]">{link.name}</span>
          </a>
        ))}
      </motion.div>

      {/* Contact form */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <GlassCard className="p-6">
          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-[var(--color-text-primary)] mb-4">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                required
                value={formData.fullname}
                onChange={(e) => setFormData((prev) => ({ ...prev, fullname: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm text-[var(--color-text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm text-[var(--color-text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-sm text-[var(--color-text-primary)] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] transition-all resize-none"
            />
            <button
              type="submit"
              disabled={!isValid || status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
            >
              {status === "sending" ? (
                <><Loader2 size={16} className="animate-spin" />Sending...</>
              ) : status === "success" ? (
                <><CheckCircle2 size={16} />Sent!</>
              ) : status === "error" ? (
                <><AlertCircle size={16} />Failed. Try again.</>
              ) : (
                <><Send size={16} />Send Message</>
              )}
            </button>
          </form>
        </GlassCard>
      </motion.div>
    </section>
  );
}
