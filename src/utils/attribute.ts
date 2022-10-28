export function isAttribute(flag: boolean, name: string): string {
  return flag ? `\n  ${name}` : ''
}
