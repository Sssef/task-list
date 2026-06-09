import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    tailwindcss()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Для GitHub Pages: base: '/task-tracker/'
  // base: process.env.VITE_BASE_URL ?? '/'

})
