export function lowerFirst(name: string) {
  if (!name)
    return ''
  if (name.length === 1)
    return name.toLowerCase()
  return name[0].toLowerCase() + name.substring(1)
}

export function upperFirst(name: string) {
  if (!name)
    return ''
  if (name.length === 1)
    return name.toUpperCase()
  return name[0].toUpperCase() + name.substring(1)
}
