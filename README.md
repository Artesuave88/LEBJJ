# Long Eaton BJJ Website (SvelteKit)

Multi-page SvelteKit website for Long Eaton BJJ, built with Tailwind CSS and ready for Vercel deployment.

## Tech stack

- SvelteKit
- Tailwind CSS (v4)
- Adapter: `@sveltejs/adapter-vercel`

## Routes

- `/` Home
- `/timetable` Timetable with filters + localStorage persistence
- `/pricing` Membership options + FAQ accordion
- `/coaches` Coaches grid + modal profile
- `/kids` Parent-focused kids page
- `/gallery` Responsive gallery + lightbox
- `/contact` Contact page + validated form
- `/trial` Trial booking flow + timetable class dropdown

## API endpoints

- `GET /api/health`
- `POST /api/contact`
- `POST /api/trial`
- `GET /robots.txt`
- `GET /sitemap.xml`

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm run build
```

## Environment variables

Create a `.env` file for local development.

Required for production SEO:

- `PUBLIC_SITE_URL` (example: `https://www.longeatonbjj.com`)

Submission provider wiring (`log` by default, or real delivery via provider):

- `CONTACT_PROVIDER` (example: `log`, `resend`, `sendgrid`)
- `CONTACT_PROVIDER_API_KEY`
- `TRIAL_PROVIDER` (optional override for trial route)
- `TRIAL_PROVIDER_API_KEY`

Optional future provider keys:

- `RESEND_API_KEY`
- `SENDGRID_API_KEY`
- `CONTACT_TO_EMAIL` (fallback recipient inbox)
- `CONTACT_FROM_EMAIL` (fallback sender address)
- `TRIAL_TO_EMAIL` (trial booking recipient inbox)
- `TRIAL_FROM_EMAIL` (trial booking sender address)

## Vercel deployment

1. Push this repo to GitHub.
2. Import project in Vercel.
3. Add environment variables in Vercel project settings.
4. Deploy.

No custom `vercel.json` is required with `@sveltejs/adapter-vercel`.
