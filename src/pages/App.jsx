import React          from 'react';
import { Linkedin, Github, Facebook, Mail } from "lucide-react";
import SectionWrapper from '../components/SectionWrapper.jsx';
import Skills         from '../components/Skills.jsx';
import Projects       from '../components/Projects.jsx';
import Certifications from '../components/Certifications.jsx';
import Timeline       from '../components/Timeline.jsx';
import Contact        from '../components/Contact.jsx';
import Header         from '../components/Header.jsx';

export default function App() {
    return (
        <>
            <Header />
            <main className="pt-20">
                {/* Home */}
                <SectionWrapper id="home" className="min-h-[70vh] flex flex-col justify-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in">
                            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                                Hi, I'm <span className="gradient-text">Tai Nguyen Phu</span>
                            </h1>

                            <p className="text-lg text-slate-300 max-w-xl">
                                3rd year <strong>Computer Science</strong> student at the <strong>University of Information Technology</strong> (VNUHCM), Vietnam. <br /><br />
                                Specialized in <strong>Machine Learning, Natural Language Processing (NLP), and Large Language Models (LLMs)</strong>. Passionate about leveraging AI for social good and solving real-world problems.
                            </p>

                            <blockquote className="text-md italic text-fuchsia-300">
                                "Every next level of life will demand a different version of you."
                            </blockquote>

                            <div className="flex gap-4 text-slate-300">
                                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/tainguyenphu2502/" 
									className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/40 transition">
                                    <Linkedin size={20} />
                                </a>
                                <a aria-label="GitHub" href="https://github.com/YuITC" 
									className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/40 transition">
                                    <Github size={20} />
                                </a>
                                <a aria-label="Facebook" href="https://www.facebook.com/taiphu2502/" 
									className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/40 transition">
                                    <Facebook size={20} />
                                </a>
                                <a aria-label="Gmail" href="mailto:tainguyenphu2502@gmail.com" 
									className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/40 transition">
                                    <Mail size={20} />
                                </a>
                            </div>

                            <div>
                                <a href="/assets/resumes/resume.pdf" className="inline-block px-6 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 font-medium">
                                    View my Resume
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-600/40 via-indigo-600/30 to-transparent blur-3xl opacity-40" />
                            <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 border border-white/10 backdrop-blur-md flex items-center justify-center text-slate-300 text-xl font-medium shadow-xl shadow-black/50">
                                <img src="./assets/me.png" alt="Portrait of Tai Nguyen Phu" className="w-full h-full object-cover rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                <SectionWrapper id="skills" title="Skills">
                    <Skills />
                </SectionWrapper>

                <SectionWrapper id="projects" title="Projects">
                    <Projects />
                </SectionWrapper>

                <SectionWrapper id="certifications" title="Certifications">
                    <Certifications />
                </SectionWrapper>

                <SectionWrapper id="timeline" title="Education & Achievements Timeline">
                    <Timeline />
                </SectionWrapper>

                <SectionWrapper id="contact" title="Contact">
                    <Contact />
                </SectionWrapper>

                <footer className="py-10 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Tai Nguyen Phu's Portfolio. Built with React + Tailwind.
                </footer>
            </main>
        </>
    );
}