import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        // So that aws amplify plays nice with Vite
        "./runtimeConfig": "./runtimeConfig.browser",
    }
  }
})
