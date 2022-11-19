<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { isAttribute } from '@utils'
import { logEvent } from 'histoire/client'
import { tableData } from './constants'

// Basic-Loading
const basicLoadingData = ref(false)
const basicSource = computed(() => {
  return `<script setup lang="ts">
  const basicLoadingData = ref(false)
  const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
<\/script>

<template>
  <el-table v-loading="basicLoadingData" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
`
})

// Custom Loading
const customLoadingData = reactive({
  loading: false,
  text: '',
  spinner: '',
  svg: '',
  viewBox: '',
  background: '',
})
const customLoadingSource = computed(() => {
  return `<script setup lang="ts">
  const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
<\/script>

<el-table 
  v-loading="basicLoadingData" 
  :data="tableData"${isAttribute(
    customLoadingData.text !== '',
    `element-loading-text="${customLoadingData.text}"`,
    )}${isAttribute(
    customLoadingData.spinner !== '',
    `element-loading-spinner="${customLoadingData.spinner}"`,
    )}${isAttribute(
    customLoadingData.svg !== '',
    `element-loading-svg="${customLoadingData.svg}"`,
    )}${isAttribute(
    customLoadingData.viewBox !== '',
    `element-loading-svg-view-box="${customLoadingData.viewBox}"`,
    )}${isAttribute(
    customLoadingData.background !== '',
    `element-loading-background="${customLoadingData.background}"`,
    )}
>
  <el-table-column prop="date" label="Date" />
  <el-table-column prop="name" label="Name" />
  <el-table-column prop="address" label="Address" />
</el-table>

`
})

// Full Screen Loading
const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  logEvent('click', { log: 'Full Screen Loading as a directive' })
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}
const openFullScreen2 = () => {
  logEvent('click', { log: 'Full Screen Loading as a service' })
  const loading = ElLoading.service()
  setTimeout(() => {
    loading.close()
  }, 2000)
}
const fullscreenLoadingSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

  const fullscreenLoading = ref(false)
  const openFullScreen1 = () => {
    fullscreenLoading.value = true
    setTimeout(() => {
      fullscreenLoading.value = false
    }, 2000)
  }

  const openFullScreen2 = () => {
    const loading = ElLoading.service()
    setTimeout(() => {
      loading.close()
    }, 2000)
  }
<\/script>

<template>
  <el-button
    v-loading.fullscreen.lock="fullscreenLoading"
    type="primary"
    @click="openFullScreen1"
  >
    As a directive
  </el-button>
  <el-button type="primary" @click="openFullScreen2"> As a service </el-button>
</template>
`
})

// Service Loading
const serviceLoadingData = reactive({
  lock: false,
  text: '',
  spinner: '',
  background: '',
})
const openServiceLoading = () => {
  const loading = ElLoading.service(serviceLoadingData)
  setTimeout(() => {
    loading.close()
  }, 2000)
}
const serviceLoadingSource = computed(() => {
  return `<script setup lang="ts">
  import { ElLoading } from 'element-plus'

  const openServiceLoading = () => {
  const loading = ElLoading.service({lock: ${serviceLoadingData.lock},${serviceLoadingData.text !== '' ? ` text: ${serviceLoadingData.text},` : ''}${serviceLoadingData.spinner !== '' ? ` spinner: ${serviceLoadingData.spinner},` : ''}${serviceLoadingData.background !== '' ? ` background: ${serviceLoadingData.background},` : ''}})
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<\/script>

<template>
  <el-button type="primary" @click="openServiceLoading"> Service Loading </el-button>
</template>
`
})
</script>

<template>
  <Story title="Feedback/Loading" icon="ep:loading">
    <Variant title="Basic usage" :source="basicSource">
      <el-table v-loading="basicLoadingData" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <template #controls>
        <HstCheckbox v-model="basicLoadingData" title="V-loading" />
      </template>
    </Variant>
    <Variant title="Custom Loading" :source="customLoadingSource" icon="material-symbols:dashboard-customize-outline">
      <el-table
        v-loading="customLoadingData.loading"
        :element-loading-text="customLoadingData.text"
        :element-loading-spinner="customLoadingData.spinner"
        :element-loading-svg="customLoadingData.svg"
        :element-loading-svg-view-box="customLoadingData.viewBox"
        :element-loading-background="customLoadingData.background"
        :data="tableData"
      >
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <template #controls>
        <HstCheckbox v-model="customLoadingData.loading" title="V-loading" />
        <el-divider border-style="dotted" content-position="left">
          <span>Element-loading</span>
        </el-divider>
        <HstText v-model="customLoadingData.text" title="text" />
        <HstText v-model="customLoadingData.spinner" title="spinner" />
        <HstText v-model="customLoadingData.svg" title="svg" />
        <HstText v-model="customLoadingData.viewBox" title="svg-view-box" />
        <HstColor v-model="customLoadingData.background" title="background" />
      </template>
    </Variant>
    <Variant title="Full Screen Loading" :source="fullscreenLoadingSource" icon="material-symbols:fullscreen-rounded">
      <el-button
        v-loading.fullscreen.lock="fullscreenLoading"
        type="primary"
        @click="openFullScreen1"
      >
        As a directive
      </el-button>
      <el-button type="primary" @click="openFullScreen2">
        As a service
      </el-button>
    </Variant>
    <Variant title="Service Loading" :source="serviceLoadingSource" icon="carbon:edge-service">
      <el-button type="primary" @click="openServiceLoading">
        Service Loading
      </el-button>
      <template #controls>
        <HstCheckbox v-model="serviceLoadingData.lock" title="Lock" />
        <HstText v-model="serviceLoadingData.text" title="Text" />
        <HstText v-model="serviceLoadingData.spinner" title="Spinner" />
        <HstColor v-model="serviceLoadingData.background" title="Background" />
      </template>
    </Variant>
  </Story>
</template>
