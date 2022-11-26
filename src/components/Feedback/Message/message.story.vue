<script setup lang="ts">
import type { MessageProps } from 'element-plus'
import { h } from 'vue'
import { logEvent } from 'histoire/client'
import { typeList } from './constants'

// Basic-Usage
const basicMessageData = reactive({
  message: 'message',
  offset: ref<MessageProps['offset']>(20),
  center: ref<MessageProps['center']>(true),
  showClose: ref<MessageProps['showClose']>(true),
  duration: ref<MessageProps['duration']>(3000),
  type: ref<MessageProps['type']>('info'),
  typeList,
})
const basicMessageOpen = () => {
  const basicElMessageInstance = ElMessage({
    message: basicMessageData.message,
    offset: basicMessageData.offset,
    center: basicMessageData.center,
    showClose: basicMessageData.showClose,
    duration: basicMessageData.duration,
    type: basicMessageData.type,
    onClose: () => {
      logEvent('onClose', { log: 'basicElMessageInstance will be closed' })
      basicElMessageInstance.close()
    },
  })
}
const basicMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { h } from 'vue'
  import { ElMessage } from 'element-plus'

  const basicMessageOpen = () => {
    const basicElMessageInstance = ElMessage({
      message: '${basicMessageData.message}',
      offset: ${basicMessageData.offset},${basicMessageData.center ? `\n      center: ${basicMessageData.center},` : ''}${basicMessageData.showClose ? `\n      showClose: ${basicMessageData.showClose},` : ''}
      duration: ${basicMessageData.duration},
      type: '${basicMessageData.type}',
      onClose: () => {
        console.log(log: 'basicElMessageInstance will be closed')
        basicElMessageInstance.close()
      },
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="basicMessageOpen">Show basic message</el-button>
</template>`
})

// VNode-Message
const VNodeMessageOpen = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
const VNodeMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { h } from 'vue'
  import { ElMessage } from 'element-plus'

  const VNodeMessageOpen = () => {
    ElMessage({
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="VNodeMessageOpen">show VNode message</el-button>
</template>`
})

// Html-Message
const htmlMessageData = reactive({
  message: '<strong>This is <i>HTML</i> string</strong>',
  dangerouslyUseHTMLString: ref<MessageProps['dangerouslyUseHTMLString']>(true),
  type: ref<MessageProps['type']>('info'),
  typeList,
})
const htmlMessageOpen = () => {
  ElMessage({
    message: htmlMessageData.message,
    dangerouslyUseHTMLString: htmlMessageData.dangerouslyUseHTMLString,
    type: htmlMessageData.type,
  })
}
const htmlMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { ElMessage } from 'element-plus'

  const htmlMessageOpen = () => {
    ElMessage({
      message: '${htmlMessageData.message}',${htmlMessageData.dangerouslyUseHTMLString ? `\n      dangerouslyUseHTMLString: ${htmlMessageData.dangerouslyUseHTMLString},` : ''}
      type: '${htmlMessageData.type}',
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="htmlMessageOpen">Show HTML message</el-button>
</template>`
})

// Grouping-Message
const groupingMessageData = reactive({
  message: 'message',
  grouping: ref<MessageProps['grouping']>(true),
  type: ref<MessageProps['type']>('info'),
  typeList,
})
const groupingMessageOpen = () => {
  ElMessage({
    message: groupingMessageData.message,
    grouping: groupingMessageData.grouping,
    type: groupingMessageData.type,
  })
}
const groupingMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { ElMessage } from 'element-plus'

  const groupingMessageOpen = () => {
    ElMessage({
      message: '${groupingMessageData.message}',${groupingMessageData.grouping ? `\n      grouping: ${groupingMessageData.grouping},` : ''}
      type: '${groupingMessageData.type}',
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="groupingMessageOpen">Show grouping message</el-button>
</template>`
})
</script>

<template>
  <Story title="Feedback/Message" icon="mdi:message-text-outline">
    <Variant title="Basic Usage" :source="basicMessageSource">
      <el-button :plain="true" @click="basicMessageOpen">Show basic message</el-button>
      <template #controls>
        <HstText v-model="basicMessageData.message" title="Message" />
        <HstNumber v-model="basicMessageData.offset" title="Offset" />
        <HstCheckbox v-model="basicMessageData.center" title="Center" />
        <HstCheckbox v-model="basicMessageData.showClose" title="Close" />
        <HstNumber v-model="basicMessageData.duration" title="Duration" />
        <HstRadio
          v-model="basicMessageData.type"
          title="Type"
          :options="basicMessageData.typeList"
        />
      </template>
    </Variant>
    <Variant title="VNode Message" :source="VNodeMessageSource" icon="clarity:nodes-line">
      <el-button :plain="true" @click="VNodeMessageOpen">show VNode message</el-button>
    </Variant>
    <Variant title="HTML Message" :source="htmlMessageSource" icon="bi:filetype-html">
      <el-button :plain="true" @click="htmlMessageOpen">Show HTML message</el-button>
      <template #controls>
        <HstTextarea v-model="htmlMessageData.message" title="Message" />
        <HstCheckbox v-model="htmlMessageData.dangerouslyUseHTMLString" title="useHTMLString" />
        <HstRadio
          v-model="htmlMessageData.type"
          title="Type"
          :options="htmlMessageData.typeList"
        />
      </template>
    </Variant>
    <Variant title="Grouping Message" :source="groupingMessageSource" icon="uit:layer-group">
      <el-button :plain="true" @click="groupingMessageOpen">Show grouping message</el-button>
      <template #controls>
        <HstText v-model="groupingMessageData.message" title="Message" />
        <HstCheckbox v-model="groupingMessageData.grouping" title="Grouping" />
        <HstRadio
          v-model="groupingMessageData.type"
          title="Type"
          :options="groupingMessageData.typeList"
        />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
