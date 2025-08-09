import React, { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { projects } from "../data/projects.js";
import { withBase } from "../utils/paths.js";

function normalize(str) {
  return (str || "").toString().trim().toLowerCase();
}

function getVisual(item) {
  if (typeof item === "string") return { src: withBase(item), alt: "" };
  if (item && typeof item === "object") return { src: withBase(item.src), alt: item.alt || "" };
  return null;
}

function ensureArrayDetails(details) {
  if (Array.isArray(details)) return details.filter(Boolean);
  if (typeof details === "string" && details.trim()) return [details.trim()];
  return [];
}

function ModalPortal({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); return () => setMounted(false); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

function ProjectModal({ project, onClose }) {
  // luôn chạy effect để đảm bảo cleanup
  useEffect(() => {
    if (!project) return; // không khóa nếu chưa có project
    const { documentElement, body } = document;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [project]);

  if (!project) return null; // trả về null *sau* hooks

  const firstVisual = getVisual((project.visuals || [])[0]);
  const bullets = ensureArrayDetails(project.details);

  return (
    <ModalPortal>
      {/* Lúc này fixed sẽ bám viewport thật sự */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
        <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl glass p-7 overflow-y-auto max-h-[92vh] rounded-2xl">
          {/* 1) Title */}
          <h3 className="text-3xl font-semibold gradient-text leading-tight">{project.title}</h3>

          {/* 2) dateRange */}
          {project.dateRange && (
            <p className="text-sm text-slate-400 mt-1">{project.dateRange}</p>
          )}

          {/* 3) types */}
          <div className="flex flex-wrap gap-2 mt-3 mb-4 text-xs">
            {(project.types || []).map(t => (
              <span key={t} className="px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/30">
                {t}
              </span>
            ))}
          </div>

          {/* 4) visual: chỉ 1 ảnh */}
          {firstVisual?.src && (
            <a
              href={firstVisual.src}
              target="_blank"
              rel="noreferrer"
              className="block mb-5 overflow-hidden rounded-xl border border-white/10 bg-white/5"
              title={firstVisual.alt || "Click to view full image"}
            >
              <img
                src={firstVisual.src}
                alt={firstVisual.alt || ""}
                loading="lazy"
                className="w-full max-h-[480px] object-cover hover:scale-[1.01] transition"
              />
            </a>
          )}

          {/* 5) technologies */}
          {project.technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-fuchsia-300 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2 py-1 rounded bg-white/10 border border-white/15">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 6) description */}
          {project.description && (
            <div className="mb-4">
              <h4 className="font-medium text-fuchsia-300 mb-2">Description</h4>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
            </div>
          )}

          {/* 7) details */}
          {bullets.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-fuchsia-300 mb-2">Details</h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                {bullets.map((line, i) => (
                  <li key={i} className="leading-relaxed">{line}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 8) repo, 9) demo */}
          <div className="flex gap-3 mt-6">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-sm font-medium"
              >
                Repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium"
              >
                Live Demo
              </a>
            )}
            <button onClick={onClose} className="ml-auto px-4 py-2 text-sm rounded bg-white/10 hover:bg-white/20">
              Close
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  // Auto-generate tags từ projects
  const tags = useMemo(() => {
    const all = projects.flatMap(p => p.types || []);
    const uniq = Array.from(new Set(all.map(normalize)));
    const labelByKey = new Map();
    for (const p of projects) {
      for (const t of p.types || []) {
        const key = normalize(t);
        if (!labelByKey.has(key)) labelByKey.set(key, t);
      }
    }
    return uniq.map(k => labelByKey.get(k)).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter(p =>
          (p.types || []).some(t => normalize(t) === normalize(filter))
        );

  return (
    <div className="animate-fade-in">
      {/* Thanh lọc */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${
            filter === "all"
              ? "bg-gradient-to-r from-fuchsia-500/40 to-indigo-500/40 text-fuchsia-100 border-fuchsia-400/40"
              : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
          }`}
        >
          All
        </button>

        {tags.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${
              normalize(filter) === normalize(t)
                ? "bg-gradient-to-r from-fuchsia-500/40 to-indigo-500/40 text-fuchsia-100 border-fuchsia-400/40"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Lưới project */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div
            key={p.id}
            className="group p-4 rounded-xl glass-hover bg-white/5 border border-white/10 hover:border-fuchsia-400/30 transition flex flex-col"
          >
            {/* 1) Title */}
            <h3 className="font-semibold mb-1 text-fuchsia-200 line-clamp-2 group-hover:text-fuchsia-100">
              {p.title}
            </h3>

            {/* 2) Date range */}
            {p.dateRange && (
              <p className="text-sm mb-4">{p.dateRange}</p>
            )}

            {/* 3) Description */}
            {p.description && (
              <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                {p.description}
              </p>
            )}

            {/* 4) Types */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(p.types || []).map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-400/30"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Button mở modal */}
            <button
              onClick={() => setOpen(p)}
              className="mt-auto text-xs font-medium px-3 py-1 rounded bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500"
            >
              More details
            </button>
          </div>
        ))}
      </div>


      {/* <ProjectModal project={open} onClose={() => setOpen(null)} /> */}
      {open && (
        <ProjectModal project={open} onClose={() => setOpen(null)} />
      )}
    </div>
  );
}
