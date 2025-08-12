import React, { useState } from 'react';

export default function Contact(){
  const [status,setStatus] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    // Placeholder: just log for now
    console.log('Contact form submission', data);
    setStatus('This function is currently unavailable. Please try directly contacting me via email.');
    e.target.reset();
  }
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start animate-fade-in">
      <form onSubmit={handleSubmit} className="glass p-6 space-y-4">
        <div>
          <label className="block text-xs mb-1 uppercase tracking-wide text-slate-400">Name</label>
          <input name="name" required className="w-full rounded-md bg-white/5 border border-white/10 focus:border-fuchsia-400/50 focus:ring-fuchsia-400/30" />
        </div>
        <div>
          <label className="block text-xs mb-1 uppercase tracking-wide text-slate-400">Email</label>
            <input type="email" name="email" required className="w-full rounded-md bg-white/5 border border-white/10 focus:border-fuchsia-400/50 focus:ring-fuchsia-400/30" />
        </div>
        <div>
          <label className="block text-xs mb-1 uppercase tracking-wide text-slate-400">Subject</label>
          <input name="subject" className="w-full rounded-md bg-white/5 border border-white/10 focus:border-fuchsia-400/50 focus:ring-fuchsia-400/30" />
        </div>
        <div>
          <label className="block text-xs mb-1 uppercase tracking-wide text-slate-400">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded-md bg-white/5 border border-white/10 focus:border-fuchsia-400/50 focus:ring-fuchsia-400/30"></textarea>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 font-medium text-sm">Send</button>
          {status && <p className="text-xs text-slate-400">{status}</p>}
        </div>
      </form>
      <div className="space-y-5">
        <div className="glass p-6">
          <h3 className="font-semibold text-fuchsia-200 mb-2">Contact Details</h3>
          <ul className="text-sm space-y-1 text-slate-300">
            <li><span className="text-slate-400">Location:</span> Ho Chi Minh City, Vietnam</li>
            <li><span className="text-slate-400">Email:</span> <a href="mailto:tainguyenphu@gmail.com" className="underline decoration-dotted hover:text-fuchsia-200">tainguyenphu@gmail.com</a></li>
            <li><span className="text-slate-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/tainguyen2502/" className="underline decoration-dotted hover:text-fuchsia-200">linkedin.com/in/tainguyen2502</a></li>
            <li><span className="text-slate-400">GitHub:</span> <a href="https://github.com/YuITC" className="underline decoration-dotted hover:text-fuchsia-200">github.com/YuITC</a></li>
            <li><span className="text-slate-400">Facebook:</span> <a href="https://www.facebook.com/taiphu2502/" className="underline decoration-dotted hover:text-fuchsia-200">facebook.com/taiphu2502</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
