import { useLocalStorage, useMutationObserver } from '@vueuse/core'

const setDarkMode = () => {
  setTimeout(() => {
    const vueuseColorScheme = useLocalStorage('vueuse-color-scheme', 'auto')
    const colorMode = vueuseColorScheme.value === 'auto' ? 'dark' : ''
    const classList = Array.from(document.documentElement.classList)

    if (classList.length && !classList.includes(colorMode)) {
      const classNames = colorMode === 'dark' ? 'htw-dark dark' : ''
      document.documentElement.setAttribute('class', classNames)
    }
  }, 0)
}
setDarkMode()

useMutationObserver(document.documentElement, (mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class')
      setDarkMode()
  })
}, {
  attributes: true,
})
