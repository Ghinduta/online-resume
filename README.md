# Ana Ghindariu — Online Resume

Personal resume site for Ana Ghindariu, Senior Software Engineer (.NET & Azure, AI-augmented development).

- **Website:** single-page React 19 + Vite app (`index.html` → `src/App.jsx`)
- **Console page:** terminal-styled alternative view at `/console` (`console/index.html`)
- **Printable CV:** `/cv.html` (`cv.html`, A4, print-optimized) and `public/GhindariuCV.pdf` — a print of `cv.html` that must be regenerated whenever the CV changes (command in `CLAUDE.md`)

## Development

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the build
npm run lint
```

## Editing content

The intro (`src/components/Hero/heroData.js`) and work experience (`src/components/Jobs/jobData.js`) are shared by the website, `/console` and the CV — edit them once. Other content still lives in each page separately — see `CLAUDE.md`.
