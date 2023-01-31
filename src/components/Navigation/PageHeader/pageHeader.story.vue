<script setup lang="ts">
// import type { PageHeaderProps } from 'element-plus'

const basicData = reactive({
  icon: true,
  title: '',
  content: 'Content',
})

const basicSource = computed(() => {
  return `<el-page-header${isAttribute(
    !basicData.icon,
    'icon="null"',
  )}${isAttribute(
    Boolean(basicData.title),
    `title="${basicData.title}"`,
  )}
  content="${basicData.content}"
/>`
})
</script>

<template>
  <Story title="Navigation/PageHeader" icon="fluent:panel-right-expand-20-regular">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-page-header
        v-if="basicData.icon"
        :title="basicData.title"
        :content="basicData.content"
      />
      <el-page-header
        v-else
        icon="null"
        :title="basicData.title"
        :content="`${basicData.content}123`"
      />
      <template #controls>
        <HstCheckbox
          v-model="basicData.icon"
          title="show icon"
        />
        <HstText v-model="basicData.content" title="content" />
        <HstText v-model="basicData.title" title="title" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
