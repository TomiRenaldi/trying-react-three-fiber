import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build:
  {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  },

  plugins: [react()]
})
