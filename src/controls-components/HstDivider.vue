<script lang="ts">
export default {
  name: 'HstColor',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = defineProps<{
  content?: string
}>()
</script>

<template>
  <el-divider border-style="dotted" content-position="left">
    <span>{{ props.content }}</span>
  </el-divider>
</template>
