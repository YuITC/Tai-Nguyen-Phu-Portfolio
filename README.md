# YuITC-Portfolio

Deployed with GitHub Pages via GitHub Actions.

## Local development

npm install
npm run dev

## Build

npm run build

## Deployment

Pushing to `Main` triggers the workflow at `.github/workflows/deploy.yml` which:
- Installs dependencies with `npm ci`
- Builds the site with Vite
- Publishes `dist/` to GitHub Pages

Ensure the repository Settings > Pages is set to GitHub Actions.