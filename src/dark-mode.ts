import { useLocalStorage, useMutationObserver } from '@vueuse/core'

const setDarkMode = () => {
  const vueuseColorScheme = useLocalStorage('vueuse-color-scheme', 'auto')
  const colorMode = vueuseColorScheme.value === 'auto' ? 'dark' : ''
  const classList = Array.from(document.documentElement.classList)

  if (classList.length && !classList.includes(colorMode)) {
    const classNames = colorMode === 'dark' ? 'htw-dark dark' : ''
    document.documentElement.setAttribute('class', classNames)
  }
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
