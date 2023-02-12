export const directionList = [
  {
    label: 'ltr',
    value: 'ltr',
  },
  {
    label: 'rtl',
    value: 'rtl',
  },
  {
    label: 'ttb',
    value: 'ttb',
  },
  {
    label: 'btt',
    value: 'btt',
  },
]

export interface basicDrawerProps {
  vModel: boolean
  internalVModel?: boolean
  closeOnClickModal: boolean
  closeOnPressEscape: boolean
  openDelay: number
  closeDelay: number
  distroyOnClose: boolean
  modal: boolean
  direction: 'rtl' | 'ltr' | 'ttb' | 'btt'
  directionList: typeof directionList
  showClose: boolean
  size: string
  title: string
  withHeader: boolean
  content?: string
  footer?: string
}

export interface customizedDrawerProps extends basicDrawerProps {
  content: string
}
