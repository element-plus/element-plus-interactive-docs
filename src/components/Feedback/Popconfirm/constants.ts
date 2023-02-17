import type { PopconfirmProps } from 'element-plus'

type ButtonTypes = { label: PopconfirmProps['confirmButtonType'] | 'default'; value: PopconfirmProps['confirmButtonType'] }[]

export const buttonTypes: ButtonTypes = [
  {
    label: 'primary',
    value: 'primary',
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
    label: 'danger',
    value: 'danger',
  },
  {
    label: 'info',
    value: 'info',
  },
  {
    label: 'text',
    value: 'text',
  },
]
