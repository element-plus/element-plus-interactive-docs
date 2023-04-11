<script setup lang="ts">
import type { TransferProps } from 'element-plus'

interface Option {
  key: number
  label: string
  disabled: boolean
}

function generateData() {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const basicData = reactive({
  data: generateData(),
  value: [],
  filterable: false,
  filterPlaceholder: 'Enter keyword',
  targetOrder: 'original' as TransferProps['targetOrder'],
  titles: ['List 1', 'List 2'] as TransferProps['titles'],
  buttonTexts: ['', ''] as TransferProps['buttonTexts'],
})

const basicSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: \`Option \${i}\`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
<\/script>

<el-transfar
  v-model="value"
  :data="data"${isAttribute(
    basicData.filterable,
    'filterable',
  )}${isAttribute(
    basicData.filterPlaceholder !== 'Enter keyword' && basicData.filterable,
    `filter-placeholder="${basicData.filterPlaceholder}""`,
  )}${isAttribute(
    basicData.targetOrder !== 'original',
    'target-order',
  )}${isAttribute(
    basicData.titles.toString() !== 'List 1,List 2',
    `:titles="['${basicData.titles[0]}', '${basicData.titles[1]}]"`,
  )}${isAttribute(
    basicData.buttonTexts.toString() !== ',',
    `:button-texts="['${basicData.buttonTexts[0]}', '${basicData.buttonTexts[1]}]"`,
  )}
/>
`
})
</script>

<template>
  <Story
    title="Form/Transfer"
    icon="bx:transfer-alt"
    :layout="{
      type: 'grid',
      width: '100%',
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <div class="content-bar">
        <el-transfer
          v-model="basicData.value"
          :data="basicData.data"
          :filterable="basicData.filterable"
          :filter-placeholder="basicData.filterPlaceholder"
          :target-order="basicData.targetOrder"
          :titles="basicData.titles"
          :button-texts="basicData.buttonTexts"
        />
      </div>
      <template #controls>
        <HstCheckbox v-model="basicData.filterable" title="filterable" />
        <HstText v-model="basicData.filterPlaceholder" title="filter-placeholder" :style="useElDisplay(basicData.filterable)" />
        <HstSelect
          v-model="basicData.targetOrder"
          title="target-order"
          :options="[
            { label: 'original', value: 'original' },
            { label: 'push', value: 'push' },
            { label: 'unshift', value: 'unshift' },
          ]"
        />
        <HstText v-model="basicData.titles[0]" title="left-title" />
        <HstText v-model="basicData.titles[1]" title="right-title" />
        <HstText v-model="basicData.buttonTexts[0]" title="left-button-text" />
        <HstText v-model="basicData.buttonTexts[1]" title="right-button-text" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.content-bar {
  display: flex;
  justify-content: center;
}
</style>
