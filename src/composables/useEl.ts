export function useElDisplay(flag: boolean, display = 'flex') {
  return reactive({
    display: flag ? display : 'none',
  })
}
