import type { NotificationProps } from 'element-plus'

type TypeListTypes = { label: NotificationProps['type'] | 'default'; value: NotificationProps['type'] }[]

export const typeList: TypeListTypes = [
  {
    label: 'default',
    value: '',
  },
  {
    label: 'success',
    value: 'success',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'info',
    value: 'info',
  },
  {
    label: 'error',
    value: 'error',
  },
]

type PositionListTypes = { label: NotificationProps['position']; value: NotificationProps['position'] }[]
export const positionList: PositionListTypes = [
  {
    label: 'top-right',
    value: 'top-right',
  },
  {
    label: 'top-left',
    value: 'top-left',
  },
  {
    label: 'bottom-right',
    value: 'bottom-right',
  },
  {
    label: 'bottom-left',
    value: 'bottom-left',
  },
]

