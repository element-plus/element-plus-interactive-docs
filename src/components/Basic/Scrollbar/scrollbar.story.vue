<script setup lang="ts">
import { isAttribute } from '@/utils'

const basicData = reactive({
  height: 200,
  always: false,
  native: false,
  minSize: 20,
})

const basicSource = computed(() => {
  return `<el-scrollbar
  height="${basicData.height}"${isAttribute(
    basicData.always && !basicData.native,
    'always',
  )}${isAttribute(
    basicData.native,
    'native',
  )}${isAttribute(
    basicData.minSize !== 20 && !basicData.native,
    `min-size="${basicData.minSize}"`,
  )}
>
  <p
    v-for="item in 10"
    :key="item"
    class="scrollbar-demo-item"
  >
    {{ item }}
  </p>
</el-scrollbar>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
<\/style>`
})
</script>

<template>
  <Story title="Basic/Scrollbar" icon="fluent:phone-vertical-scroll-24-regular">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-scrollbar
        :height="`${basicData.height}px`"
        :native="basicData.native"
        :always="basicData.always"
        :min-size="basicData.minSize"
      >
        <p v-for="item in 10" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </el-scrollbar>
      <template #controls>
        <HstNumber v-model="basicData.height" title="Height" />
        <HstCheckbox v-model="basicData.native" title="Native" />
        <HstCheckbox v-if="!basicData.native" v-model="basicData.always" title="Always" />
        <HstNumber v-if="!basicData.native" v-model="basicData.minSize" title="Min Size" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
