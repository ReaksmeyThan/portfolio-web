import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-web/',  // Ensure this is set to your repository name
  plugins: [react()],
})
