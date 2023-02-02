const placementOptions = [
  { label: 'top', value: 'top' },
  { label: 'top-start', value: 'top-start' },
  { label: 'top-end', value: 'top-end' },
  { label: 'right', value: 'right' },
  { label: 'right-start', value: 'right-start' },
  { label: 'right-end', value: 'right-end' },
  { label: 'bottom', value: 'bottom' },
  { label: 'bottom-start', value: 'bottom-start' },
  { label: 'bottom-end', value: 'bottom-end' },
  { label: 'left', value: 'left' },
  { label: 'left-start', value: 'left-start' },
  { label: 'left-end', value: 'left-end' },
] as const

export default placementOptions

export type PlacementOptions = typeof placementOptions[number]['label']
