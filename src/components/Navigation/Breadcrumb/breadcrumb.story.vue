<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

const basicData = reactive({
  isIconSeparator: false,
  separator: '/',
  separatorIcon: ArrowRight,
  firstTitle: 'homepage',
  secondTitle: 'promotion management',
  thirdTitle: 'promotion list',
})

const basicSource = computed(() => {
  return `${
    basicData.isIconSeparator
    ? `<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
<\/script>

`
: ''
  }<el-breadcrumb ${
    basicData.isIconSeparator
    ? ':separator-icon="ArrowRight"'
    : `separator="${basicData.separator}"`
  }>
  <el-breadcrumb-item>
    ${basicData.firstTitle}
  </el-breadcrumb-item>
  <el-breadcrumb-item>
    ${basicData.secondTitle}
  </el-breadcrumb-item>
  <el-breadcrumb-item>
    ${basicData.thirdTitle}
  </el-breadcrumb-item>
</el-breadcrumb>`
})
</script>

<template>
  <Story
    title="Navigation/Breadcrumb"
    icon="fluent-mdl2:breadcrumb"
    :layout="{
      type: 'grid',
      width: 540,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-breadcrumb v-if="!basicData.isIconSeparator" :separator="basicData.separator">
        <el-breadcrumb-item>
          {{ basicData.firstTitle }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ basicData.secondTitle }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ basicData.thirdTitle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-breadcrumb v-else :separator-icon="basicData.separatorIcon">
        <el-breadcrumb-item>
          {{ basicData.firstTitle }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ basicData.secondTitle }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ basicData.thirdTitle }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <template #controls>
        <HstCheckbox
          v-model="basicData.isIconSeparator"
          title="Use icon"
        />
        <HstText v-model="basicData.separator" :style="useElDisplay(!basicData.isIconSeparator)" title="Separator" />
        <HstDivider content="Title" />
        <HstText v-model="basicData.firstTitle" title="First Class" />
        <HstText v-model="basicData.secondTitle" title="Second Class" />
        <HstText v-model="basicData.thirdTitle" title="Third Class" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
