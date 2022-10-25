const setDarkMode = () => {
  setTimeout(() => {
    const isDark = useDark({ valueDark: '' })
    const vueuseColorScheme = useLocalStorage('vueuse-color-scheme', 'auto')
    const classList = Array.from(document.documentElement.classList)
    let colorMode
    if (vueuseColorScheme.value === 'auto') {
      if (isDark.value)
        colorMode = 'dark'
      else
        colorMode = ''
    }
    else if (vueuseColorScheme.value === 'dark') {
      colorMode = 'dark'
    }
    else {
      colorMode = ''
    }

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
