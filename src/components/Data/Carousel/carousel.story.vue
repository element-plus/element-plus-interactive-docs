<script setup lang="ts">
import { isAttribute } from '@/utils'

const basicUsage = reactive({
  trigger: 'hover',
  interval: 3000,
  height: 150,
  autoplay: true,
  arrow: 'hover',
  indicatorPosition: '',
  type: '',
  loop: true,
  direction: 'horizontal',
  pauseOnHover: true,
})

const isCardType = computed({
  get: () => basicUsage.type === 'card',
  set: (flag) => {
    basicUsage.type = flag ? 'card' : ''
  },
})

const CarouselBasicSource = computed(() => {
  return `<el-carousel
  height="${basicUsage.height}px"${
  isAttribute(
basicUsage.trigger === 'click',
'trigger="click"')}${
  isAttribute(
basicUsage.direction === 'vertical',
'direction="vertical"')}${
  isAttribute(
!basicUsage.autoplay,
'autoplay="false"')}${
  isAttribute(
basicUsage.autoplay && basicUsage.interval !== 3000,
`interval="${basicUsage.interval}"`)}${
  isAttribute(
basicUsage.arrow !== 'hover',
`arrow="${basicUsage.arrow}"`)}${
  isAttribute(
basicUsage.indicatorPosition !== '',
`indicator-position="${basicUsage.indicatorPosition}"`)}${
  isAttribute(
isCardType.value,
'type="card"')}${
  isAttribute(
!basicUsage.loop,
'loop="false"')}${
  isAttribute(
!basicUsage.pauseOnHover && basicUsage.autoplay,
'pause-on-hover="false"')}
>
  <el-carousel-item
    v-for="item in 3"
    :key="item"
  >
    <h3>{{ item }}</h3>
  </el-carousel-item>
</el-carousel>`
})
</script>

<template>
  <Story
    title="Data/Carousel"
    icon="material-symbols:view-carousel-outline-rounded"
    :layout="{
      type: 'grid',
      width: 400,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="CarouselBasicSource"
    >
      <el-carousel
        :height="`${basicUsage.height}px`"
        :trigger="basicUsage.trigger"
        :autoplay="basicUsage.autoplay"
        :interval="basicUsage.interval"
        :indicator-position="basicUsage.indicatorPosition"
        :arrow="basicUsage.arrow"
        :type="basicUsage.type"
        :loop="basicUsage.loop"
        :direction="basicUsage.direction"
        :pause-on-hover="basicUsage.pauseOnHover"
      >
        <el-carousel-item v-for="item in 3" :key="item">
          <h3
            class="small justify-center"
            text="2xl"
            :style="{ lineHeight: `${basicUsage.height}px` }"
          >
            {{ item }}
          </h3>
        </el-carousel-item>
      </el-carousel>
      <template #controls>
        <HstButtonGroup
          v-model="basicUsage.trigger"
          title="Trigger"
          :options="[
            { label: 'click', value: 'click' },
            { label: 'hover', value: 'hover' },
          ]"
        />
        <HstButtonGroup
          v-model="basicUsage.direction"
          title="Direction"
          :options="[
            { label: 'horizontal', value: 'horizontal' },
            { label: 'vertical', value: 'vertical' },
          ]"
        />
        <HstCheckbox v-model="basicUsage.autoplay" title="Autoplay" />
        <HstCheckbox
          v-model="basicUsage.pauseOnHover"
          title="Pause On Hover"
        />
        <HstSlider
          v-model="basicUsage.interval"
          title="Interval"
          :min="0"
          :max="10000"
        />
        <HstNumber
          v-model="basicUsage.height"
          title="Height"
        />
        <HstButtonGroup
          v-model="basicUsage.arrow"
          title="Arrow"
          :options="[
            { label: 'always', value: 'always' },
            { label: 'hover', value: 'hover' },
            { label: 'never', value: 'never' },
          ]"
        />
        <HstButtonGroup
          v-model="basicUsage.indicatorPosition"
          title="Indicator Position"
          :options="[
            { label: 'default', value: '' },
            { label: 'outside', value: 'outside' },
            { label: 'none', value: 'none' },
          ]"
        />
        <HstCheckbox v-model="isCardType" title="Card Type" />
        <HstCheckbox v-model="basicUsage.loop" title="Loop" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
