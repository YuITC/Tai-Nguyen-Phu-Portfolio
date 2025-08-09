// Utility helpers for building correct asset URLs respecting Vite's base path.
// Ensures assets work both locally and on GitHub Pages (served under /<repo>/).
export function withBase(path = '') {
  if (!path) return import.meta.env.BASE_URL;
  const cleaned = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${cleaned}`;
}
