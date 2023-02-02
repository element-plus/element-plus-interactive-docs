const sizeOptions = [
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'small',
    value: 'small',
  },
] as const

export default sizeOptions

export type SizeOptions = typeof sizeOptions[number]['label']
