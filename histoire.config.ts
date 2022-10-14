import { resolve } from 'pathe'
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

const logo = resolve(__dirname, './src/assets/images/element-plus-logo.svg')

export default defineConfig({
  setupFile: './src/histoire.setup.ts',
  plugins: [HstVue()],
  theme: {
    title: 'Element Plus',
    logo: {
      dark: logo,
      light: logo,
      square: logo,
    },
    favicon: './favicon.svg',
  },
})
