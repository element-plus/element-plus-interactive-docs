<script setup lang="ts">
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage } from 'element-plus'

const basicData = reactive({
  tip: 'jpg/png files with a size less than 500KB.',
  multiple: false,
  showFileList: true,
  drag: false,
  listType: 'text' as UploadProps['listType'],
  autoUpload: true,
  disabled: false,
  limit: 0,
})

const basicSource = computed(() => {
  return `<script setup lang="ts">
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    'The limit is ${basicData.limit}, you selected \${files.length} files this time, add up to \${files.length + uploadFiles.length} totally\`
  )
}
<\/script>

<el-upload
  v-model:file-list="fileList"
  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
  :on-exceed="handleExceed"${isAttribute(
    !basicData.showFileList,
    'show-file-list="false"',
  )}${isAttribute(
    basicData.drag,
    'drag',
  )}${isAttribute(
    basicData.listType !== 'text',
    `:list-type="${basicData.listType}"`,
  )}${isAttribute(
    !basicData.autoUpload,
    ':auto-upload="false"',
  )}${isAttribute(
    basicData.disabled,
    'disabled',
  )} ${isAttribute(
    basicData.multiple,
    ':multiple="true"',
  )}${isAttribute(
    basicData.limit !== 0,
    `:limit="${basicData.limit}`,
  )}
>
  <el-button type="primary">Click to upload</el-button>
  <template #tip>
    <div class="el-upload__tip">
      ${basicData.tip}
    </div>
  </template>
</el-upload>
`
})

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is ${basicData.limit}, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`,
  )
}
</script>

<template>
  <Story title="Form/Upload" icon="carbon:cloud-upload">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-upload
        v-model:file-list="fileList"
        :show-file-list="basicData.showFileList"
        :drag="basicData.drag"
        :list-type="basicData.listType"
        :auto-upload="basicData.autoUpload"
        :disabled="basicData.disabled"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :multiple="basicData.multiple"
        :limit="basicData.limit"
        :on-exceed="handleExceed"
      >
        <el-button type="primary">
          Click to upload
        </el-button>
        <template #tip>
          <div class="el-upload__tip">
            {{ basicData.tip }}
          </div>
        </template>
      </el-upload>
      <template #controls>
        <HstText v-model="basicData.tip" title="tip" />
        <HstCheckbox v-model="basicData.multiple" title="multiple" />
        <HstCheckbox v-model="basicData.showFileList" title="showFileList" />
        <HstCheckbox v-model="basicData.drag" title="drag" />
        <HstButtonGroup
          v-model="basicData.listType"
          title="listType"
          :options="[
            { label: 'text', value: 'text' },
            { label: 'picture', value: 'picture' },
            { label: 'picture-card', value: 'picture-card' },
          ]"
        />
        <HstCheckbox v-model="basicData.autoUpload" title="autoUpload" />
        <HstCheckbox v-model="basicData.disabled" title="disabled" />
        <HstNumber v-model="basicData.limit" title="limit" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
