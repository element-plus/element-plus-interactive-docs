import type { RowProps } from 'element-plus'

type JustifyOptionTypes = { label: RowProps['justify']; value: RowProps['justify'] }[]

export const justifyOptions: JustifyOptionTypes = [
  {
    label: 'start',
    value: 'start',
  },
  {
    label: 'end',
    value: 'end',
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'space-around',
    value: 'space-around',
  },
  {
    label: 'space-between',
    value: 'space-between',
  },
  {
    label: 'space-evenly',
    value: 'space-evenly',
  },
]

type AlignOptionsTypes = { label: RowProps['align']; value: RowProps['align'] }[]
export const alignOptions: AlignOptionsTypes = [
  {
    label: 'top',
    value: 'top',
  },
  {
    label: 'middle',
    value: 'middle',
  },
  {
    label: 'bottom',
    value: 'bottom',
  },
]

