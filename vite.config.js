import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Critical for custom domain
  build: {
    outDir: 'dist',
  },
})
