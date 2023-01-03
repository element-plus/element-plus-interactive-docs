export function useI18n() {
  const i18n = inject(i18nSymbol)
  if (!i18n)
    throw new Error('No i18n instance provided')

  return i18n.global
}
