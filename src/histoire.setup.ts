import 'element-plus/theme-chalk/dark/css-vars.css'
import './dark-mode'
import './theme/style.css'
import './i18n/appendI18nButton'
import { defineSetupVue3 } from '@histoire/plugin-vue'
import { i18n } from './i18n'

localStorage.setItem('locale', 'zh-CN')
export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(i18n)
})
