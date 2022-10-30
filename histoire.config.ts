import { resolve } from 'pathe'
import { defaultColors, defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

const logo = resolve(__dirname, './src/assets/images/element-plus-logo.svg')

export default defineConfig({
  setupFile: './src/histoire.setup.ts',
  plugins: [HstVue()],
  theme: {
    colors: {
      gray: {
        ...defaultColors.slate,
        100: '#cfd3dc',
        300: '#b7b7b7',
        700: '#141414',
        750: '#141414',
        800: '#434445',
        900: '#606266',
      },
      primary: {
        ...defaultColors.blue,
        500: '#409eff',
        700: '#409eff',
      },
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
  sandboxDarkClass: 'dark',
})
