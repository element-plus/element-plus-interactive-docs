<script setup lang="ts">
import type { AffixProps } from 'element-plus'
import { logEvent } from 'histoire/client'
import { positionList } from './constant'
import { isAttribute } from '@/utils'

// Basic-Affix Usage
const affixData = ref({
  offset: ref<AffixProps['offset']>(50),
  position: ref<AffixProps['position']>('top'),
  zIndex: 100,
  positionList,
})
const affixSource = computed(() => {
  return `<template>
  <div class="wrapper">
    <div class="scroll">
      <div class="affix-container">
        <el-affix
          position="${affixData.value.position}"${isAttribute((Boolean(affixData.value.offset) || affixData.value.offset === 0), `        :offset="${affixData.value.offset}"`)}${isAttribute((Boolean(affixData.value.zIndex) || affixData.value.zIndex === 0), `        :z-index="${affixData.value.zIndex}"`)}
        >
          <el-button type="primary">
            Affix content
          </el-button>
        </el-affix>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  height: 100vh;
  .scroll {
    height: 3000px;
    display: flex;
    justify-content: center;
    align-items: center;
    .affix-container {
      text-align: center;
      border-radius: 4px;
      width: 80%;
      height: 400px;
      background: var(--el-color-primary-light-9);
    }
  }
}
</style>`
})

// Target-Affix
const targetData = ref({
  offset: ref<AffixProps['offset']>(150),
  target: ref<AffixProps['target']>('.target-affix-container'),
  positionList,
})
const targetSource = computed(() => {
  return `<template>
  <div class="wrapper">
    <div class="affix-container">
      <el-affix${isAttribute((Boolean(targetData.value.offset) || targetData.value.offset === 0), `      :offset="${targetData.value.offset}"`)}${isAttribute(Boolean(targetData.value.target), `      target="${targetData.value.target}"`)}
      >
        <el-button type="primary">
          Affix content
        </el-button>
      </el-affix>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.target-wrapper {
  height: 2500px;
  .target-affix-container {
    text-align: center;
    height: 700px;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
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
        <div class="scroll">
          <div class="affix-container">
            <el-affix
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
      </div>
      <template #controls>
        <HstNumber v-model="affixData.offset" title="offset" />
        <HstButtonGroup
          v-model="affixData.position"
          title="position"
          :options="affixData.positionList"
        />
        <HstNumber v-model="affixData.zIndex" title="z-index" />
      </template>
    </Variant>
    <Variant title="Target Affix" :source="targetSource" icon="et:traget">
      <div class="target-wrapper">
        <div class="target-affix-container">
          <el-affix
            :target="targetData.target"
            :offset="targetData.offset"
            @change="$event => logEvent('change', $event)"
            @scroll="$event => logEvent('scroll', $event)"
          >
            <el-button type="primary">
              Target Affix content
            </el-button>
          </el-affix>
        </div>
      </div>
      <template #controls>
        <HstNumber v-model="targetData.offset" disabled title="offset" />
        <HstText v-model="targetData.target" disabled title="target" />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.wrapper{
  height: 100vh;
  .scroll {
    height: 3000px;
    display: flex;
    justify-content: center;
    align-items: center;
    .affix-container {
      text-align: center;
      border-radius: 4px;
      width: 80%;
      height: 400px;
      background: var(--el-color-primary-light-9);
    }
  }
}
.target-wrapper {
  height: 2500px;
  .target-affix-container {
    text-align: center;
    height: 700px;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
  }
}
</style>
