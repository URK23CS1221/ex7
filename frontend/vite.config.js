import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue/svelte, etc.

export default defineConfig({
  plugins: [react()],
  base: '/ex7/', // 👈 replace with your repo name
})
