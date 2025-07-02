import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['fsevents']
  },
  server: {
    host: true,
    port: 5173,
    hmr: {
      port: 5173
    }
  },
  esbuild: {
    target: 'esnext'
  }
})
