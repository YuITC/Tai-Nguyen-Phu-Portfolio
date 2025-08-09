import React from 'react';
import { certifications } from '../data/certifications.js';

export default function Certifications(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {certifications.map(c => (
        <a 
          key={c.id} 
          href={c.link} 
          target="_blank" rel="noreferrer" 
          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-fuchsia-400/40 hover:bg-white/10 transition flex flex-col">

          <h3 className="font-medium text-fuchsia-200 mb-1 line-clamp-2">{c.name}</h3>

          <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2">
            {c.org}{" "}
              <span className="text-[11px] text-slate-300">
                  ({c.date})
              </span>
          </p>

          {Array.isArray(c.note) && (
              <ul className={`${c.note.length > 1 ? 'list-disc pl-5' : ''} text-sm text-slate-200 space-y-1`}>
                  {c.note.map((item, idx) => (
                      <li key={idx} className={c.note.length === 1 ? 'list-none' : ''}>
                          {item}
                      </li>
                  ))}
              </ul>
          )}
        </a>
        
      ))}
    </div>
  );
}