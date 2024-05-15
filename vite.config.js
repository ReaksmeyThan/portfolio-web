import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-web/',  // Set this to your repository name
  plugins: [react()],
})
