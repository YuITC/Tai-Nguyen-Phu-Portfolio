import React, { useState } from 'react';
import { skillCategories } from '../data/skills.js';

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCat           = skillCategories.find(c => c.id === active);

  return (
    <div className="glass p-6 animate-fade-in">
      <div className="flex flex-wrap gap-2 mb-6">
        {skillCategories.map(cat => (
          <button key={cat.id} onClick={() => setActive(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition glass-hover backdrop-blur-sm border ${active === cat.id ? 'bg-gradient-to-r from-fuchsia-500/30 to-indigo-500/30 text-fuchsia-200 border-fuchsia-400/40' : 'bg-white/5 text-slate-300 border-white/10'}`}>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCat.groups.map(group => (
              <div key={group.name}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <h3 className="font-semibold mb-2 text-fuchsia-300">{group.name}</h3>
                  <p className="text-sm text-slate-300">
                      {group.tools.join(', ')}
                  </p>
              </div>
          ))}
      </div>
    </div>
  );
}