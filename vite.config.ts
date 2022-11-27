import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      '@components': `${path.resolve(__dirname, 'src/components')}/`,
      '@constants': `${path.resolve(__dirname, 'src/constants')}/`,
      '@utils': `${path.resolve(__dirname, 'src/utils')}/`,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dts: true,
      vueTemplate: true,
      dirs: [
        './src/composables',
        './src/utils',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [
        'src/components',
        'src/controls-components',
      ],
      resolvers: [ElementPlusResolver()],
    }),

  ],
})
