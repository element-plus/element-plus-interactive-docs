import type { AffixProps } from 'element-plus'

type positionListTypes = { label: AffixProps['position']; value: AffixProps['position'] }[]

export const positionList: positionListTypes = [
  {
    label: 'top',
    value: 'top',
  },
  {
    label: 'bottom',
    value: 'bottom',
  },
]
