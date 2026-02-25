# Long Eaton BJJ Site (Static Svelte)

Read-only Brazilian Jiu-Jitsu gym website built with Svelte + Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in `dist/`.

## Deploy to Vercel

This project is already configured for Vercel via `vercel.json`:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- `devCommand`: `npm run dev`

Deploy options:

1. Connect this repository in Vercel and deploy.
2. Or use CLI:

```bash
npm i -g vercel
vercel
```
