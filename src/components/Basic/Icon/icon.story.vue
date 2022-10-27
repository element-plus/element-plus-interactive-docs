<script setup lang="ts">
import { Delete, Edit } from '@element-plus/icons-vue'
import { isAttribute } from '@/utils'

// el-icon
const elIconData = reactive({
  icon: shallowRef(Edit),
  size: 20,
  color: '',
})
const elIconSource = computed(() => {
  return `<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
<\/script>

<el-icon${isAttribute(
    elIconData.size !== 20,
    `size="${elIconData.size}"`,
  )}${isAttribute(
    elIconData.color !== '',
    `color="${elIconData.color}"`,
  )}
>
  <${elIconData.icon.name} />
</el-icon>`
})

// svg
const svgData = reactive({
  icon: shallowRef(Delete),
  customClass: {
    width: '1em',
    height: '1em',
  },
})
const svgSource = computed(() => {
  return `<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
<\/script>

<${svgData.icon.name}
  style="${JSON.stringify(svgData.customClass)}"
/>`
})
</script>

<template>
  <Story title="Basic/Icon" icon="line-md:iconify2">
    <Variant title="Combined with el-icon" :source="elIconSource">
      <el-icon :size="elIconData.size" :color="elIconData.color">
        <component :is="elIconData.icon" />
      </el-icon>
      <template #controls>
        <HstNumber v-model="elIconData.size" title="Size" />
        <HstColor v-model="elIconData.color" title="Color" />
      </template>
    </Variant>
    <Variant
      title="Using SVG icon directly"
      :source="svgSource"
      icon="iconoir:svg-format"
    >
      <component :is="svgData.icon" :style="svgData.customClass" />

      <template #controls>
        <!-- a -->
        <HstJson v-model="svgData.customClass" title="style" />
      </template>
    </Variant>
  </Story>
</template>
