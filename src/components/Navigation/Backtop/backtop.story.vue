<script setup lang="ts">
// import type { BacktopProps } from 'element-plus'
const basicData = reactive({
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
})
const basicSource = computed(() => {
  return `<el-backtop${isAttribute(
    basicData.visibilityHeight !== 200,
    `:visibility-height=${basicData.visibilityHeight}`,
  )}${isAttribute(
    basicData.right !== 40,
     `:right=${basicData.right}`,
     )}${isAttribute(
    basicData.bottom !== 40,
    `:bottom=${basicData.bottom}`,
     )}
/>`
})
</script>

<template>
  <Story
    title="Navigation/Backtop"
    icon="raphael:arrowup"
    :layout="{
      type: 'single',
      iframe: false,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <div class="doc-editor-main" style="height: 80vh; overflow: auto">
        <h1 style="height: 200vh; text-align: center;">
          Scroll down to see the bottom-right button.
        </h1>
      </div>

      <el-backtop
        target=".doc-editor-main"
        :right="basicData.right"
        :bottom="basicData.bottom"
        :visibility-height="basicData.visibilityHeight"
      />
      <template #controls>
        <HstNumber v-model="basicData.visibilityHeight" title="visibility-Height" />
        <HstNumber v-model="basicData.right" title="right" />
        <HstNumber v-model="basicData.bottom" title="bottom" />
      </template>
    </Variant>
  </Story>
</template>
