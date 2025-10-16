import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      strict: false
    }
  },
  assetsInclude: ['**/*.mp4'],
  build: {
    assetsInlineLimit: 0 // Don't inline any assets
  }
})
