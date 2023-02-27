<script setup lang="ts">
import type { AffixProps } from 'element-plus'
import { logEvent } from 'histoire/client'
import { positionList } from './constant'
import { isAttribute } from '@/utils'

// Basic-Affix Usage
//  attribute
const affixData = ref({
  offset: ref<AffixProps['offset']>(50),
  position: ref<AffixProps['position']>('top'),
  target: ref<AffixProps['target']>(''),
  zIndex: 100,
  positionList,
})
//  source
const affixSource = computed(() => {
  return `<template>
  <div class="wrapper">
    <div class="affix-container">
      <el-affix
        offset="${affixData.value.offset}"${isAttribute((Boolean(affixData.value.zIndex) || affixData.value.zIndex! === 0), `      z-index="${affixData.value.zIndex}"`)}
        position="${affixData.value.position}"${isAttribute(Boolean(affixData.value.target), `      target="${affixData.value.target}"`)}
      >
        <el-button type="primary">
          Affix content
        </el-button>
      </el-affix>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  height: 2500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .affix-container {
    text-align: center;
    width: 60%;
    height: 400px;
    background: #ecf5ff;
  }
}
</style>`
})
</script>

<template>
  <Story
    title="Navigation/Affix"
    icon="arcticons:photo-affix"
    :layout="{
      type: 'single',
      iframe: true,
    }"
  >
    <Variant title="Basic Usage" :source="affixSource">
      <div class="wrapper">
        <div class="affix-container">
          <el-affix
            :target="affixData.target"
            :offset="affixData.offset"
            :z-index="affixData.zIndex"
            :position="affixData.position"
            @change="$event => logEvent('change', $event)"
            @scroll="$event => logEvent('scroll', $event)"
          >
            <el-button type="primary">
              Affix content
            </el-button>
          </el-affix>
        </div>
      </div>
      <template #controls>
        <HstNumber v-model="affixData.offset" title="offset" />
        <HstRadio
          v-model="affixData.position"
          title="position"
          :options="affixData.positionList"
        />
        <HstNumber v-model="affixData.zIndex" title="z-index" />
        <HstText v-model="affixData.target" title="target" />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.wrapper{
  height: 2500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .affix-container {
    text-align: center;
    width: 60%;
    height: 400px;
    background: #ecf5ff;
  }
}
</style>
