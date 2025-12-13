# Portfolio

Personal portfolio and resume website built with **Astro**, **Tailwind CSS**, and **DaisyUI**.

The site is intentionally minimal and content-first:

* a small homepage for first impression
* a print-ready resume page
* fast, SEO-friendly, and easy to maintain

---

## Features

* **Astro (MPA)** — fast, static, SEO-friendly
* **View Transitions** — SPA-like navigation without a client router
* **Tailwind CSS + DaisyUI** — consistent, themeable styling
* **Single source of truth** for content (`portfolio.ts`)
* **Print-optimized resume** (browser → Save as PDF)
* **GitHub Pages deployment** via GitHub Actions
* No images, no heavy JS, no unnecessary hydration

---

## Pages

* `/` — Homepage (hero + featured projects)
* `/resume` — Full resume (screen + print/PDF friendly)

---

## Tech Stack

* **Astro**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Yarn v4 (Berry)**
* **GitHub Actions** (Pages deployment)

---

## Project Structure

```txt
src/
  components/        # UI components (Nav, Hero, FeaturedProjects)
  layouts/           # Layout wrapper
  pages/             # Routes (/ and /resume)
  data/              # Portfolio data (single source of truth)
  utils/             # Small helpers (date formatting, etc.)
  styles/
    global.css       # Global + print styles
```

---

## Content Management

All content lives in one place:

```txt
src/data/portfolio.ts
```

This includes:

* personal info
* summary
* experience
* projects
* skills
* education
* languages

No content is hardcoded in components.

---

## Development

```bash
yarn install
yarn dev
```

---

## Build

```bash
yarn astro build
```

Output is generated in `dist/`.

---

## Print / PDF Resume

* Open `/resume`
* Use browser **Print → Save as PDF**
* Print styles ensure clean black-on-white output

---

## Deployment (GitHub Pages)

Deployment is handled via **GitHub Actions**.

Workflow:

* build Astro site
* upload Pages artifact
* deploy to GitHub Pages

No manual steps required after initial setup.

---

## Design Philosophy

* Content over visuals
* Minimal UI, clear hierarchy
* No unnecessary animations or JS
* Easy to extend without refactoring

---

## License

MIT
