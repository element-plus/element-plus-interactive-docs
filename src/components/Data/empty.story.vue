<script setup lang="ts">
import { ref } from 'vue'
const description = ref('thisdescription')
const imageSize = ref(200)
</script>

<template>
  <Story title="Data/Empty" icon="mdi:delete-empty-outline">
    <Variant title="Basic Usage">
      <el-empty :description="description" />
      <template #controls>
        <HstText
          v-model="description"
          title="description"
        />
      </template>
    </Variant>
    <Variant title="Custom image">
      <el-empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </Variant>
    <Variant title="Image size">
      <el-empty :image-size="imageSize" />
      <template #controls>
        <HstText
          v-model="imageSize"
          title="image-size"
        />
      </template>
    </Variant>
    <Variant title="Bottom content">
      <el-empty>
        <el-button type="primary">
          Button
        </el-button>
      </el-empty>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Empty usage

## Custom image

Use `image` prop to set image URL.

## Image size

Use `image-size` prop to control image size.

## Bottom content

Use the default slot to insert content at the bottom.
</docs>

<style>
</style>
