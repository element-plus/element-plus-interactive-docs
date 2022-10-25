import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      '@components': `${path.resolve(__dirname, 'src/components')}/`,
      '@constants': `${path.resolve(__dirname, 'src/constants')}/`,
    },
  },
})
