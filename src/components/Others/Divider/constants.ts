import type { DividerProps } from 'element-plus'

type BorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'

type BorderStyleList = { label: BorderStyle; value: BorderStyle }[]
type DirectionList = { label: DividerProps['direction']; value: DividerProps['direction'] }[]
type PositionList = { label: DividerProps['contentPosition']; value: DividerProps['contentPosition'] }[]

export const dividerDirectionList: DirectionList = [
  {
    label: 'horizontal',
    value: 'horizontal',
  },
  {
    label: 'vertical',
    value: 'vertical',
  },
]

export const contentPositionList: PositionList = [
  {
    label: 'left',
    value: 'left',
  },
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'right',
    value: 'right',
  },
]

export const borderStyleList: BorderStyleList = [
  {
    label: 'none',
    value: 'none',
  },
  {
    label: 'hidden',
    value: 'hidden',
  },
  {
    label: 'dotted',
    value: 'dotted',
  },
  {
    label: 'dashed',
    value: 'dashed',
  },
  {
    label: 'solid',
    value: 'solid',
  },
  {
    label: 'double',
    value: 'double',
  },
  {
    label: 'groove',
    value: 'groove',
  },
  {
    label: 'ridge',
    value: 'ridge',
  },
  {
    label: 'inset',
    value: 'inset',
  },
  {
    label: 'outset',
    value: 'outset',
  },
]
