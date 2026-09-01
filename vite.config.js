import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'


export default defineConfig({
  // Expose both VITE_-prefixed vars (the default) and WEB3FORMS_-prefixed
  // vars to client code via import.meta.env.
  envPrefix: ['VITE_', 'WEB3FORMS_'],
  plugins: [react(),
  tailwindcss(),
  ],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'gsap-vendor': ['gsap', '@gsap/react'],
          'pdf-vendor': ['react-pdf', 'pdfjs-dist'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
})
