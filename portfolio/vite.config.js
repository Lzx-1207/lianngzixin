import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 如果你的仓库名是 "username.github.io"，改 base 为 '/'
// 如果仓库名是别的比如 "portfolio"，就用 '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    port: 5173,
    host: true
  }
})