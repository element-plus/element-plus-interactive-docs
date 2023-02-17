import type { PopconfirmProps, TooltipTriggerType } from 'element-plus'

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

type TriggerTypes = { label: TooltipTriggerType; value: TooltipTriggerType }[]

export const triggerTypes: TriggerTypes = [
  {
    label: 'click',
    value: 'click',
  },
  {
    label: 'hover',
    value: 'hover',
  },
  {
    label: 'focus',
    value: 'focus',
  },
  {
    label: 'contextmenu',
    value: 'contextmenu',
  },
]

export const effectTypes = [
  {
    value: 'light',
    label: 'light',
  },
  {
    value: 'dark',
    label: 'dark',
  },
]
