<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import { UserFilled } from '@element-plus/icons-vue'
import type { AvatarProps } from 'element-plus'
const url = ref('https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png')
const avatarShapeList: { label: string; value: AvatarProps['shape'] }[] = [
  {
    label: 'circle',
    value: 'circle',
  },
  {
    label: 'square',
    value: 'square',
  },
]
const avatarSizeList: { label: string; value: AvatarProps['size'] }[] = [
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'small',
    value: 'small',
  },
]
const fitList: { label: string; value: AvatarProps['fit'] }[] = [
  {
    label: 'fill',
    value: 'fill',
  },
  {
    label: 'contain',
    value: 'contain',
  },
  {
    label: 'cover',
    value: 'cover',
  },
  {
    label: 'none',
    value: 'none',
  },
  {
    label: 'scale-down',
    value: 'scale-down',
  },
]
const currentShape = ref<AvatarProps['shape']>('circle')
const currentSize = ref<AvatarProps['size']>('default')
const currentFit = ref<AvatarProps['fit']>('cover')
const customSize = ref<number>(50)

const errorHandler = () => true
const fireClose = () => {
  logEvent('error', errorHandler)
}
</script>

<template>
  <Story title="Data/Avatar">
    <Variant title="Basic usage">
      <el-avatar :shape="currentShape" :size="currentSize" :src="url" />
      <el-avatar :shape="currentShape" style="margin:0 20px" :size="customSize" :src="url" />
      <template #controls>
        <HstRadio v-model="currentShape" title="Avatar Shape" :options="avatarShapeList" />
        <HstRadio v-model="currentSize" title="Avatar Sizes" :options="avatarSizeList" />
        <HstNumber v-model="customSize" title="Custom Avatar Size" />
      </template>
    </Variant>
    <Variant title="Types">
      <div class="demo-type">
        <el-avatar :icon="UserFilled" />

        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />

        <el-avatar> user </el-avatar>
      </div>
    </Variant>
    <Variant title="Fallback">
      <el-avatar :size="60" src="https://empty" @error="fireClose">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">
      </el-avatar>
    </Variant>
    <Variant title="Fit Container">
      <el-avatar shape="square" :size="100" :fit="currentFit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />

      <template #controls>
        <HstRadio v-model="currentFit" title="Avatar Fit" :options="fitList" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Use shape and size prop to set avatar's shape and size.

## Types

It supports images, Icons, or characters.

## Fallback

fallback when image load error.

## Fit Container

Set how the image fit its container for an image avatar, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
</docs>

<style scoped>
.demo-type {
  display: flex;
  justify-content: space-around;
}
</style>
