import React from 'react';

export default function Header(){
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm bg-slate-950/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center h-16 gap-6 text-base">
        <a href="#home" className="font-semibold gradient-text">Tai Nguyen Phu's Portfolio</a>
        <div className="hidden md:flex gap-5 text-slate-300">
          {['skills','projects','certifications','timeline','contact'].map(id => (
            <a key={id} href={`#${id}`} className="hover:text-fuchsia-200 capitalize">{id}</a>
          ))}
        </div>
        <a href="#contact" className="ml-auto px-4 py-1.5 rounded-md text-sm font-medium bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500">Hire Me</a>
      </nav>
    </header>
  );
}