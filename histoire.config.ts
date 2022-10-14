import { resolve } from 'node:path'
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

const logo = resolve(__dirname, './src/assets/images/element-plus-logo.svg')

export default defineConfig({
  plugins: [HstVue()],
  theme: {
    title: 'Element Plus',
    logo: {
      dark: logo,
      light: logo,
      square: logo,
    },
    favicon: './src/assets/images/element-plus-logo-small.svg',
  },
})
