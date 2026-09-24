# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Ana Ghindariu's personal online resume: a single-page React 19 + Vite 7 site (plain JSX, no TypeScript, no router, no tests).

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint (flat config); `no-unused-vars` ignores names matching `^[A-Z_]`, so unused `CONSTANT_CASE` values won't be flagged

There is no test framework.

## Architecture

**Content is data inside the components.** Each section component in `src/components/` holds its content as a module-level array/object (`skillsData` in `Skills/Skills.jsx`, `newsItems` in `Projects.jsx`, `services` in `Education/Education.jsx`, `contactDetails` in `Contact.jsx`, `HERO_TAGLINE`/`KEY_SKILLS` constants in `Hero/Hero.jsx`). Resume edits are almost always edits to these data literals, not to JSX.

**Shared sources (edit once, all pages update).** `Jobs/jobData.js` (work experience: `role`/`company`/`period`, `techStack`, `responsibilities`, `description`, plus a short `summary` used by `/console`) and `Hero/heroData.js` (`HERO_INTRO`) are plain modules — kept out of component files because the react-refresh lint rule forbids non-component exports there. The main site, `/console` and `cv.html` all render from them.

**Everything else has copies — keep them in sync.** Besides the shared sources, resume content exists in:
1. The React components above (the website).
2. `cv.html` (project root, a Vite build input served at `/cv.html`) — hand-written, print-optimized A4 page (own inline CSS, `@media print`), linked from the Hero "View CV" button. Only its intro (`#cv-intro`) and work experience (`#cv-jobs`) are rendered from the shared sources, by `src/cv.jsx`; skills, education, courses and portfolio are still hand-written HTML.
3. `/console` — its stats, stack, projects and education are its own literals in `Console/Console.jsx`.
4. `public/GhindariuCV.pdf` — a print of `cv.html`, offered as "Download PDF" in the Hero, on `/console` (hero + contact list) and in the `cv.html` header (`.no-print`, hidden in the PDF itself).

**Rule: any content that is not in a shared source must be edited in the website components, `cv.html` and `/console` together, in the same change.**

**Rule: `public/GhindariuCV.pdf` must always match `cv.html`.** Any change that alters what `cv.html` shows — its HTML, its print CSS, or the shared sources it renders (`jobData.js`, `heroData.js`) — must regenerate the PDF in the same change. With `npm run dev` running, print it with headless Chrome (the time budget lets `src/cv.jsx` render first):

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 --print-to-pdf="public/GhindariuCV.pdf" http://localhost:5173/cv.html
```

Then open the PDF and check the page breaks (no near-empty pages, no split job headers, no orphaned lines) before finishing.

**Layout and styling come from the "Arlo" HTML template.** Global template CSS lives in `src/assets/style.css` and `src/assets/plugins.css` (imported via `src/index.css`); the `arlo_tm_*` class names come from it. Newer components add their own styles: plain CSS files next to the component (`JobHistory.css`, `Skills.css`, `Projects.css`) or a CSS module (`Hero.module.css`).

**Second page: `/console`.** A dark, terminal-styled redesign served from `console/index.html` → `src/console.jsx` → `components/Console/Console.jsx` (CSS module, no template CSS). It is a separate Vite build input (`vite.config.js`), which also redirects `/console` to `/console/` in dev/preview. Its intro and experience (including the expandable details) come from the shared sources; the decorative commit ids are `COMMIT_HASHES` in `Console.jsx`, matched to `jobData` by index.

**Page composition** is in `src/App.jsx`: `Sidebar` + `MobileMenu` for navigation, then the sections in order. Navigation is anchor-based — the nav items in `layout/Sidebar/Sidebar.jsx` (and `MobileMenu.jsx`) link to section `id`s, so renaming a section `id` requires updating both menus. `About.jsx` exists but is not rendered in `App.jsx`.

**Rendering quirks worth knowing:**
- `Jobs.jsx` supports two `responsibilities` shapes: an array of `{ category, items }` groups, or a flat array of strings. The first element decides which renderer is used.
- `Education.jsx` stores popup `description` as HTML strings, rendered through `DOMPurify.sanitize` + `dangerouslySetInnerHTML`.
- `Projects.jsx` and `Education.jsx` sort their items by a `sortDate` field (newest first), not by array order.
