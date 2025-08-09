import React from 'react';

export default function SectionWrapper({ id, title, children, className='' }) {
  return (
    <section id={id} className={`py-8 px-4 sm:px-8 max-w-7xl mx-auto ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}
