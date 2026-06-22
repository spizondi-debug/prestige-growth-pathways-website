import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  // Set `base` to '/<repo-name>/' if deploying to a GitHub Pages project site.
  base: '/',
})
