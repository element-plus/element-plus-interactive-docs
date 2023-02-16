import controls from './controls.vue'

export const defaultMessageBoxOptions = {
  title: 'title',
  message: 'message',
  type: undefined as any, // histoire 0.14.2 HstSelect的v-model被定义为string类型，但从HstSelect的options属性可以看出它是支持非string类型数据的，因此此处用any
  icon: undefined as any,
  showClose: true,
  center: false,
  draggable: false,
}

export type MessageBoxOptions = typeof defaultMessageBoxOptions

export default controls
