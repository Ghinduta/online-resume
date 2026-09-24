import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite serves console/index.html only at "/console/"; redirect the bare path so "/console" works too.
const redirectConsole = (req, res, next) => {
  if (req.url === '/console' || req.url.startsWith('/console?')) {
    res.statusCode = 301
    res.setHeader('Location', req.url.replace('/console', '/console/'))
    res.end()
    return
  }
  next()
}

const consoleTrailingSlash = {
  name: 'console-trailing-slash',
  configureServer(server) {
    server.middlewares.use(redirectConsole)
  },
  configurePreviewServer(server) {
    server.middlewares.use(redirectConsole)
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), consoleTrailingSlash],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        console: 'console/index.html',
        cv: 'cv.html',
      },
    },
  },
})
