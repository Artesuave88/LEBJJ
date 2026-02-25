# Copilot Instructions for Svelte Read-Only Website

This is a read-only website built with Svelte and Vite, designed to be hosted on Vercel.

## Project Overview

- **Framework**: Svelte 5+ with Vite 7+
- **Purpose**: Static read-only website
- **Deployment**: Vercel (configured in `vercel.json`)
- **Package Manager**: npm
- **Build Tool**: Vite for fast development and optimized production builds

## Key Features

- ⚡ Lightning-fast development with Vite
- 📦 Static site generation with zero runtime complexity
- 🎨 Reactive UI with Svelte components
- 🚀 One-click Vercel deployment
- 🔒 Read-only - no server-side logic or user forms
- 📱 Responsive design ready

## Development Commands

- `npm run dev` - Start local dev server at http://localhost:5173
- `npm run build` - Create production-optimized build in `dist/`
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── App.svelte         # Main component
├── app.css            # Global styles
├── main.js            # Entry point
├── assets/            # Static assets (images, logos)
└── lib/               # Reusable components
```

## Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration
- `vercel.json` - Vercel deployment settings
- `svelte.config.js` - Svelte-specific settings
- `.vscode/extensions.json` - Recommended VS Code extensions

## Deployment to Vercel

1. Push code to Git repository (GitHub, GitLab, or Bitbucket)
2. Import the repository into Vercel
3. Vercel auto-detects settings from `vercel.json` and deploys

The production build outputs to the `dist/` directory.
