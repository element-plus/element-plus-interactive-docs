<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
const language = ref('en')
const locale = computed(() => (language.value === 'zhCn' ? zhCn : en))

const basicSource = computed(() => {
  return `<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
<\/script>

<el-config-provider locale="${language.value}">
  <el-table :data="[]" />
  <el-pagination :total="5" />
</el-config-provider>`
})
</script>

<template>
  <Story title="Configuration/ConfigProvider" icon="icon-park-outline:config">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-config-provider
        :locale="locale"
      >
        <el-table :data="[]" />
        <el-pagination :total="5" />
      </el-config-provider>
      <template #controls>
        <HstButtonGroup
          v-model="language"
          title="Language"
          :options="[
            { label: 'zhCn', value: 'zhCn' },
            { label: 'en', value: 'en' },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
