import React from 'react';
import { timeline } from '../data/education.js';

/**
 * Timeline component to display educational history and achievements.
 */
export default function Timeline() {
  
  /**
   * Highlights specific keywords in a given text by wrapping them in <strong> tags.
   * @param   {string} text - The text to search within.
   * @param   {string[]} keywords - The words to highlight.
   * @returns {JSX.Element|string[]} - Highlighted text parts.
   */
  const highlightText = (text, keywords = []) => {
    if (!keywords.length) return text;

    let parts = [text];
    
    keywords.forEach(keyword => {
      parts = parts.flatMap(part =>
        typeof part === 'string'
          ? part
              .split(new RegExp(`(${keyword})`, 'gi'))
              .map(chunk =>
                chunk.toLowerCase() === keyword.toLowerCase()
                  ? <strong>{chunk}</strong>
                  : chunk
              )
          : part
      );
    });

    return parts;
  };

  return (
    <ol className="relative border-l border-slate-700/60 ml-3 space-y-10 animate-fade-in">
      {timeline.map(item => (
        <li key={item.id} className="ml-8">
          
          {/* Timeline dot */}
          <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center 
                           rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 
                           shadow ring-4 ring-slate-950" />

          <div className="glass p-4">
            
            {/* Institution name */}
            {item.institution && (
              <h3 className="font-semibold text-fuchsia-200 mb-1">
                {item.institution}
              </h3>
            )}
            
            {/* Degree */}
            {item.degree && (
              <p className="text-base font-medium text-slate-300 mb-1">
                {item.degree}
              </p>
            )}
            
            {/* Date range */}
            {item.dateRange && (
              <p className="text-xs text-slate-400 mb-1">
                {item.dateRange}
              </p>
            )}

            {/* Education status list */}
            {item.educationStatus?.length > 0 && (
              <div className="mt-4">
                <p className="text-base font-semibold text-slate-200">
                  Education status:
                </p>
                <ul className="text-sm text-slate-300 list-disc pl-4 mt-2 space-y-1">
                  {item.educationStatus.map((text, idx) => (
                    <li key={idx}>
                      {highlightText(text, item.highlightKeywords)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements list */}
            {!!item.achievements?.length && (
              <div className="mt-4">
                <p className="text-base font-semibold text-slate-200">
                  Achievements:
                </p>
                <ul className="text-sm text-slate-300 list-disc pl-4 mt-2 space-y-1">
                  {item.achievements.map((ach, idx) => {
                    
                    // Handle achievement objects with potential links
                    if (ach && typeof ach === 'object') {
                      const label = ach.name || ach.title || ach.label || ach.text || ach.url || ach.link;
                      const href = ach.link || ach.url;

                      return (
                        <li key={idx}>
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-dotted hover:text-fuchsia-200"
                            >
                              {label}
                            </a>
                          ) : (
                            label
                          )}
                        </li>
                      );
                    }

                    // Handle simple string achievements
                    return <li key={idx}>{ach}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}