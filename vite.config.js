import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Gaya-Master/', // <— your repo name, case-sensitive
  plugins: [react()],
})
