import { resolve } from 'pathe'
import { defaultColors, defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

const logo = resolve(__dirname, './src/assets/images/element-plus-logo.svg')

export default defineConfig({
  setupFile: './src/histoire.setup.ts',
  plugins: [HstVue()],
  theme: {
    colors: {
      primary: defaultColors.sky,
    },
    title: 'Element Plus',
    logo: {
      dark: logo,
      light: logo,
      square: logo,
    },
    favicon: './favicon.svg',
  },
  defaultStoryProps: {
    layout: {
      type: 'grid',
      width: 320,
    },
    responsiveDisabled: true,
    autoPropsDisabled: true,
  },
})
