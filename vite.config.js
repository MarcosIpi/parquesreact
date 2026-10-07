import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Ambas líneas añadidas:
  // nombre del repositorio
  base: '/parquesreact/',
  // Carpeta de salida configurada como 'docs'
  // para poder alojar en GitHub Pages (main branch, docs folder)
  build: {
    outDir: 'docs',
  },

  plugins: [react()],
})
