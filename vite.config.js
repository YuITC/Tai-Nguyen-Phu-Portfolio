import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Adjust the base path if deploying to a repository subpath (e.g., /<repo>/).
// Replace `portfolio` with the repository name if different.
const repoName = 'portfolio';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
