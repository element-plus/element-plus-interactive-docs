<script setup lang="ts">
const value = ref(new Date())
const range = ref([new Date(), new Date()])
const basicSource = computed(() => {
  return `<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
<\/script>

<template>
  <el-calendar v-model="value" />
</template>
`
})
</script>

<template>
  <Story
    title="Data/Calendar"
    icon="ph:calendar-light"
    :layout="{
      type: 'grid',
      width: 600,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
      :range="range"
    >
      <el-calendar v-model="value" />
      <template #controls>
        <!--  -->
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
