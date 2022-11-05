<script setup lang="ts">
import type { NotificationProps } from 'element-plus'
import { positionList, typeList } from './constants'

// Basic-Nofitication
const basicNofiticationData = reactive({
  title: 'title',
  message: 'message',
  type: ref<NotificationProps['type']>(''),
  typeList,
})
const basicNotificationOpen = () => {
  ElNotification({
    title: basicNofiticationData.title,
    message: basicNofiticationData.message,
    type: basicNofiticationData.type,
  })
}
const basicSource = computed(() => {
  return `<script setup lang="ts">
  const basicNotificationOpen = () => {
    ElNotification({
      title: '${basicNofiticationData.title}',
      message: '${basicNofiticationData.message}',
      ${basicNofiticationData.type !== '' ? `type: '${basicNofiticationData.type}',` : ''}
    })
  }
<\/script>

<template>
  <el-button @click="basicNotificationOpen">
    basicNofitication
  </el-button> 
</template>`
})

// CustomClose-Nofitication
const customCloseNofiticationData = reactive({
  title: 'title',
  message: 'message',
  duration: ref<NotificationProps['duration']>(4500),
  showClose: ref<NotificationProps['showClose']>(true),
})
const customCloseNofiticationOpen = () => {
  ElNotification({
    title: customCloseNofiticationData.title,
    message: customCloseNofiticationData.message,
    duration: customCloseNofiticationData.duration,
    showClose: customCloseNofiticationData.showClose,
  })
}
const customCloseSource = computed(() => {
  return `<script setup lang="ts">
  const customCloseNofiticationOpen = () => {
    ElNotification({
      title: '${customCloseNofiticationData.title}',
      message: '${customCloseNofiticationData.message}',
      duration: '${customCloseNofiticationData.duration}',
      showClose: '${customCloseNofiticationData.showClose}',
    })
  }
<\/script>

<template>
  <el-button @click="customCloseNofiticationOpen">
    customCloseNofitication
  </el-button> 
</template>`
})

// Position-Nofitication
const positionNofiticationData = reactive({
  title: 'title',
  message: 'message',
  position: ref<NotificationProps['position']>('top-right'),
  offset: ref<NotificationProps['offset']>(0),
  positionList,
})
const positionNofiticationOpen = () => {
  ElNotification({
    title: positionNofiticationData.title,
    message: positionNofiticationData.message,
    position: positionNofiticationData.position,
    offset: positionNofiticationData.offset,
  })
}
const positionSource = computed(() => {
  return `<script setup lang="ts">
  const positionNofiticationOpen = () => {
    ElNotification({
      title: '${positionNofiticationData.title}',
      message: '${positionNofiticationData.message}',
      position: '${positionNofiticationData.position}',
      offset: '${positionNofiticationData.offset}',
    })
  }
<\/script>

<template>
  <el-button @click="positionNofiticationOpen">
    positionNofitication
  </el-button> 
</template>`
})

// htmlMessage-Nofitication
const htmlMessageNofiticationData = reactive({
  title: 'title',
  message: 'message',
  dangerouslyUseHTMLString: ref<NotificationProps['dangerouslyUseHTMLString']>(true),
})
const htmlMessageNofiticationOpen = () => {
  ElNotification({
    title: htmlMessageNofiticationData.title,
    dangerouslyUseHTMLString: htmlMessageNofiticationData.dangerouslyUseHTMLString,
    message: htmlMessageNofiticationData.message,
  })
}
const htmlMessageNofiticationSource = computed(() => {
  return `<script setup lang="ts">
  const htmlMessageNofiticationOpen = () => {
    ElNotification({
      title: '${htmlMessageNofiticationData.title}',
      message: '${htmlMessageNofiticationData.message}',
      dangerouslyUseHTMLString: '${htmlMessageNofiticationData.dangerouslyUseHTMLString}',
    })
  }
<\/script>

<template>
  <el-button @click="htmlMessageNofiticationOpen">
    htmlMessageNofitication
  </el-button> 
</template>`
})
</script>

<template>
  <Story title="Feedback/Notification" icon="ri:notification-badge-line">
    <Variant title="Basic Usage" :source="basicSource">
      <el-button @click="basicNotificationOpen">
        basicNofitication
      </el-button>
      <template #controls>
        <HstText v-model="basicNofiticationData.title" title="Title" />
        <HstText v-model="basicNofiticationData.message" title="Message" />
        <HstRadio
          v-model="basicNofiticationData.type"
          title="Type"
          :options="basicNofiticationData.typeList"
        />
      </template>
    </Variant>
    <Variant title="Custom Show" :source="customCloseSource" icon="mdi:close-circle-multiple-outline">
      <el-button @click="customCloseNofiticationOpen">
        customCloseNofitication
      </el-button>
      <template #controls>
        <HstText v-model="customCloseNofiticationData.title" title="Title" />
        <HstText v-model="customCloseNofiticationData.message" title="Message" />
        <HstNumber v-model="customCloseNofiticationData.duration" title="Duration" />
        <HstCheckbox v-model="customCloseNofiticationData.showClose" title="ShowClose" />
      </template>
    </Variant>
    <Variant title="Position" :source="positionSource" icon="fluent:position-to-back-24-regular">
      <el-button @click="positionNofiticationOpen">
        positionNofitication
      </el-button>
      <template #controls>
        <HstText v-model="positionNofiticationData.title" title="Title" />
        <HstText v-model="positionNofiticationData.message" title="Message" />
        <HstNumber v-model="positionNofiticationData.offset" title="Offset" />
        <HstRadio
          v-model="positionNofiticationData.position"
          title="Position"
          :options="positionNofiticationData.positionList"
        />
      </template>
    </Variant>
    <Variant title="HTML Message" :source="htmlMessageNofiticationSource" icon="bi:filetype-html">
      <el-button @click="htmlMessageNofiticationOpen">
        htmlMessageNofitication
      </el-button>
      <template #controls>
        <HstText v-model="htmlMessageNofiticationData.title" title="Title" />
        <HstTextarea v-model="htmlMessageNofiticationData.message" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
  .el-notification__title {
    min-height: 30px !important;
  }
</style>
