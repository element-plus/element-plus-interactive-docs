import { createI18n } from 'vue-i18n'

const messages = {
  'en': {
    message: {
      hello: 'hello world',
    },
  },
  'zh-CN': {
    message: {
      hello: '你好世界',
    },
  },
}
console.log('locale', localStorage.getItem('locale'))

const localeData = {
  // 通过缓存确定当前语言
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  globalInjection: true,
  legacy: false,
  messages,
}

export const i18n = createI18n(localeData)
