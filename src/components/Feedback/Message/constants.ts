import type { MessageProps } from 'element-plus'

type TypeListTypes = { label: MessageProps['type'] | 'default'; value: MessageProps['type'] }[]
export const typeList: TypeListTypes = [
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
