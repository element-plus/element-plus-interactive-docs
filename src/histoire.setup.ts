import { defineSetupVue3 } from '@histoire/plugin-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './dark-mode'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(ElementPlus)
})
