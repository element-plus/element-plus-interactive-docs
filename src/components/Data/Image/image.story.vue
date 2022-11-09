<script setup lang="ts">
import { fitList, urls } from './constants'
import { isAttribute } from '@/utils'
// Basic-Image
const basicImageData = reactive({
  src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  fit: 'fill',
})
const basicSource = computed(() => {
  return `<el-image
  src="${basicImageData.src}"${isAttribute(
    basicImageData.fit !== 'fill',
    `fit="${basicImageData.fit}"`)}
/>`
})

// Placeholder-Image
const placeholderImageData = reactive({
  src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
  load: false,
})
const reloadClick = () => {
  placeholderImageData.src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' + `?${new Date()}`
}

// Lazy-Image
const lazyImageData = reactive({
  lazy: true,
  urls,
})
const lazySource = computed(() => {
  return `<script setup lang="ts">
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
<\/script>

<el-image
  v-for="url in urls"
  :key="url"
  :src="url"${isAttribute(
    lazyImageData.lazy,
    `lazy="${lazyImageData.lazy}"`)}
/>`
})

// Image Preview
const previewImageData = reactive({
  url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  urls,
})
const previewSource = computed(() => {
  return `<script setup lang="ts">
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
<\/script>

<el-image
  style="width: 100px; height: 100px"
  :src="url"
  :preview-src-list="urls"
  :initial-index="4"
  fit="cover"
/>`
})
</script>

<template>
  <Story
    title="Data/Image"
    :layout="{
      type: 'grid',
      width: 600,
    }"
    icon="mdi:file-image-outline"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-image
        style="width: 100px; height: 100px"
        :src="basicImageData.src"
        :fit="basicImageData.fit"
      />
      <template #controls>
        <HstRadio
          v-model="basicImageData.fit"
          title="Fit"
          :options="fitList"
        />
      </template>
    </Variant>
    <Variant
      title="Placeholder"
    >
      <el-image
        :src="placeholderImageData.src"
      >
        <template #placeholder>
          <div>
            Loading<span class="dot">...</span>
          </div>
        </template>
      </el-image>
      <template #controls>
        <div class="container">
          <span
            class="title"
          >
            Reload
          </span>
          <el-button :loading="placeholderImageData.load" @click="reloadClick">
            Reload
          </el-button>
        </div>
      </template>
    </Variant>
    <Variant
      title="Lazy Load"
      :source="lazySource"
    >
      <div class="demo-image__lazy">
        <el-image
          v-for="url in lazyImageData.urls"
          :key="url"
          :src="url"
          :lazy="lazyImageData.lazy"
        />
      </div>
      <template #controls>
        <HstCheckbox v-model="lazyImageData.lazy" title="Lazy" />
      </template>
    </Variant>
    <Variant
      title="Image Preview"
      :source="previewSource"
    >
      <div class="demo-image__preview">
        <el-image
          style="width: 100px; height: 100px"
          :src="previewImageData.url"
          :preview-src-list="previewImageData.urls"
          fit="cover"
        />
      </div>
      <template #controls>
        <!-- <HstCheckbox v-model="lazyImageData.lazy" title="Lazy" /> -->
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.container {
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  display: flex;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  width: 7rem;
}
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

.demo-image__preview {
  height: 600px;
  overflow-y: auto;
}
</style>
