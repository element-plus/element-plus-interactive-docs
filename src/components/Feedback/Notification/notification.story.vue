<script setup lang="ts">
import type { NotificationProps } from 'element-plus'
import { positionList, typeList } from './constants'
import { isAttribute } from '@/utils'

// Basic-Notification
const basicNotificationData = reactive({
  title: 'title',
  message: 'message',
  type: ref<NotificationProps['type']>(''),
  typeList,
})
const basicNotificationOpen = () => {
  ElNotification({
    title: basicNotificationData.title,
    message: basicNotificationData.message,
    type: basicNotificationData.type,
  })
}
const basicSource = computed(() => {
  return `<script setup lang="ts">
  const basicNotificationOpen = () => {
    ElNotification({
      title: '${basicNotificationData.title}',
      message: '${basicNotificationData.message}',${isAttribute(
        basicNotificationData.type !== '',
        `    type: '${basicNotificationData.type}'`)}
    })
  }
<\/script>

<template>
  <el-button @click="basicNotificationOpen">
    basicNotification
  </el-button> 
</template>`
})

// CustomClose-Notification
const customCloseNotificationData = reactive({
  title: 'title',
  message: 'message',
  duration: ref<NotificationProps['duration']>(4500),
  showClose: ref<NotificationProps['showClose']>(true),
})
const customCloseNotificationOpen = () => {
  ElNotification({
    title: customCloseNotificationData.title,
    message: customCloseNotificationData.message,
    duration: customCloseNotificationData.duration,
    showClose: customCloseNotificationData.showClose,
  })
}
const customCloseSource = computed(() => {
  return `<script setup lang="ts">
  const customCloseNotificationOpen = () => {
    ElNotification({
      title: '${customCloseNotificationData.title}',
      message: '${customCloseNotificationData.message}',
      duration: ${customCloseNotificationData.duration},${isAttribute(
        !customCloseNotificationData.showClose,
        `    showClose: ${customCloseNotificationData.showClose}`)}
    })
  }
<\/script>

<template>
  <el-button @click="customCloseNotificationOpen">
    customCloseNotification
  </el-button> 
</template>`
})

// Position-Notification
const positionNotificationData = reactive({
  title: 'title',
  message: 'message',
  position: ref<NotificationProps['position']>('top-right'),
  offset: ref<NotificationProps['offset']>(0),
  positionList,
})
const positionNotificationOpen = () => {
  ElNotification({
    title: positionNotificationData.title,
    message: positionNotificationData.message,
    position: positionNotificationData.position,
    offset: positionNotificationData.offset,
  })
}
const positionSource = computed(() => {
  return `<script setup lang="ts">
  const positionNotificationOpen = () => {
    ElNotification({
      title: '${positionNotificationData.title}',
      message: '${positionNotificationData.message}',${isAttribute(
          positionNotificationData.offset !== 0,
          `    offset: ${positionNotificationData.offset}`,
        )}${
        isAttribute(
          positionNotificationData.position !== 'top-right',
          `    position: '${positionNotificationData.position}'`,
        )
      }
    })
  }
<\/script>

<template>
  <el-button @click="positionNotificationOpen">
    positionNotification
  </el-button> 
</template>`
})

// htmlMessage-Notification
const htmlMessageNotificationData = reactive({
  title: 'title',
  message: 'message',
  dangerouslyUseHTMLString: ref<NotificationProps['dangerouslyUseHTMLString']>(true),
})
const htmlMessageNotificationOpen = () => {
  ElNotification({
    title: htmlMessageNotificationData.title,
    dangerouslyUseHTMLString: htmlMessageNotificationData.dangerouslyUseHTMLString,
    message: htmlMessageNotificationData.message,
  })
}
const htmlMessageNotificationSource = computed(() => {
  return `<script setup lang="ts">
  const htmlMessageNotificationOpen = () => {
    ElNotification({
      title: '${htmlMessageNotificationData.title}',
      message: '${htmlMessageNotificationData.message}',
      dangerouslyUseHTMLString: '${htmlMessageNotificationData.dangerouslyUseHTMLString}',
    })
  }
<\/script>

<template>
  <el-button @click="htmlMessageNotificationOpen">
    htmlMessageNotification
  </el-button> 
</template>`
})
</script>

<template>
  <Story title="Feedback/Notification" icon="ri:notification-badge-line">
    <Variant title="Basic Usage" :source="basicSource">
      <el-button @click="basicNotificationOpen">
        basicNotification
      </el-button>
      <template #controls>
        <HstText v-model="basicNotificationData.title" title="Title" />
        <HstText v-model="basicNotificationData.message" title="Message" />
        <HstRadio
          v-model="basicNotificationData.type"
          title="Type"
          :options="basicNotificationData.typeList"
        />
      </template>
    </Variant>
    <Variant title="Custom Show" :source="customCloseSource" icon="mdi:close-circle-multiple-outline">
      <el-button @click="customCloseNotificationOpen">
        customCloseNotification
      </el-button>
      <template #controls>
        <HstText v-model="customCloseNotificationData.title" title="Title" />
        <HstText v-model="customCloseNotificationData.message" title="Message" />
        <HstNumber v-model="customCloseNotificationData.duration" title="Duration" />
        <HstCheckbox v-model="customCloseNotificationData.showClose" title="ShowClose" />
      </template>
    </Variant>
    <Variant title="Position" :source="positionSource" icon="fluent:position-to-back-24-regular">
      <el-button @click="positionNotificationOpen">
        positionNotification
      </el-button>
      <template #controls>
        <HstText v-model="positionNotificationData.title" title="Title" />
        <HstText v-model="positionNotificationData.message" title="Message" />
        <HstNumber v-model="positionNotificationData.offset" title="Offset" />
        <HstRadio
          v-model="positionNotificationData.position"
          title="Position"
          :options="positionNotificationData.positionList"
        />
      </template>
    </Variant>
    <Variant title="HTML Message" :source="htmlMessageNotificationSource" icon="bi:filetype-html">
      <el-button @click="htmlMessageNotificationOpen">
        htmlMessageNotification
      </el-button>
      <template #controls>
        <HstText v-model="htmlMessageNotificationData.title" title="Title" />
        <HstTextarea v-model="htmlMessageNotificationData.message" title="Message" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
  .el-notification__title {
    min-height: 30px !important;
  }
</style>
