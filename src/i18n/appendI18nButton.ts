import './i18nButton.css'

export function appendI18nButton() {
  const el = document.querySelector('div.htw-ml-auto.htw-flex-none.htw-flex')
  if (!el)
    return

  if (document.querySelector('#i18nButton'))
    return

  const i18nButton = document.createElement('a')!
  i18nButton.setAttribute('class', 'htw-p-2 sm:htw-p-1 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer htw-text-gray-900 dark:htw-text-gray-100')
  i18nButton.setAttribute('id', 'i18nButton')

  i18nButton.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="htw-w-6 htw-h-6 sm:htw-w-4 sm:htw-h-4 iconify iconify--carbon" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
  <path fill="currentColor" d="M18 19h6v2h-6zm0-4h12v2H18zm0-4h12v2H18zm-4 10v-2H9v-2H7v2H2v2h8.215a8.591 8.591 0 0 1-2.216 3.977A9.273 9.273 0 0 1 6.552 23H4.333a10.855 10.855 0 0 0 2.145 3.297A14.658 14.658 0 0 1 3 28.127L3.702 30a16.42 16.42 0 0 0 4.29-2.336A16.488 16.488 0 0 0 12.299 30L13 28.127A14.664 14.664 0 0 1 9.523 26.3a10.313 10.313 0 0 0 2.729-5.3zm-2.833-8h2.166L8.75 2H6.583L2 13h2.166L5 11h5.333zM5.833 9l1.833-4.4L9.5 9z">
  </path>
</svg>`

  const i18nConfig = [
    {
      name: 'English',
      code: 'en',
    },
    {
      name: '简体中文',
      code: 'zh-CN',
    },
  ]

  i18nButton.addEventListener('mouseenter', () => {
    if (i18nButton.querySelector('.popper-i18n__container'))
      return

    const tooltip = document.createElement('div')
    tooltip.setAttribute('class', 'popper-i18n__container')

    const { x, y, width, height } = i18nButton.getBoundingClientRect()
    const top = y + height
    const left = x + width / 2

    tooltip.setAttribute(
      'style',
    `position: fixed;
    top: ${top}px;
    left: ${left}px;
    transform-origin: center bottom;
    will-change: transform;
    transform: translate3d(0px, -8px, 0px);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    color: #fff;
    padding: 4px 16px;
    margin-top: 16px;
    `,
    )

    tooltip.innerHTML = `
  <div>
      ${i18nConfig.map((item) => {
        return `
        <div
          class="tooltip-i18n__item"
          data-code="${item.code}"
        >
          ${item.name}
        </div>`
      }).join('')}
  </div>
  `

    i18nButton.appendChild(tooltip)

    const { width: tooltipWidth } = tooltip.getBoundingClientRect()
    tooltip.style.left = `${left - tooltipWidth / 2}px`

    const tooltipItems = tooltip.querySelectorAll('.tooltip-i18n__item')
    tooltipItems.forEach((item) => {
      item.addEventListener('click', () => {
        const code = item.getAttribute('data-code') as 'en' | 'zh-CN'
        if (code) {
        // 保存语言到缓存
          localStorage.setItem('locale', code)
          // 刷新页面
          window.location.reload()
        }
      })
    })
  })

  i18nButton.addEventListener('mouseleave', () => {
    const tooltip = i18nButton.querySelector('.popper-i18n__container')

    setTimeout(() => {
      tooltip?.remove()
    }, 300)
  })

  el?.appendChild(i18nButton)
}
