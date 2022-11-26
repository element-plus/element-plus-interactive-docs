<script setup lang="ts">
import type { MessageProps } from 'element-plus'
import { h } from 'vue'
import { typeList } from './constants'

// Basic-Usage
const basicMessage = ref('message')
const basicOpen = () => {
  ElMessage(basicMessage.value)
}
const basicOpenVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
const basicMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { h } from 'vue'
  import { ElMessage } from 'element-plus'

  const basicOpen = () => {
    ElMessage('${basicMessage.value}')
  }
  const basicOpenVn = () => {
    ElMessage({
      message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
  }
<\/script>

<template>
  <el-button :plain="true" @click="basicOpen">Show message</el-button>
  <el-button :plain="true" @click="basicOpenVn">VNode</el-button>
</template>`
})

// Show-Close
const showCloseMessageData = reactive({
  message: 'message',
  showClose: ref<MessageProps['showClose']>(true),
  duration: ref<MessageProps['duration']>(3000),
  type: ref<MessageProps['type']>('info'),
  typeList,
})
const showCloseMessageOpen = () => {
  ElMessage({
    message: showCloseMessageData.message,
    showClose: showCloseMessageData.showClose,
    duration: showCloseMessageData.duration,
    type: showCloseMessageData.type,
  })
}
const showCloseMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { ElMessage } from 'element-plus'

  const showCloseMessageOpen = () => {
    ElMessage({
      message: '${showCloseMessageData.message}',
      showClose: ${showCloseMessageData.showClose},
      duration: ${showCloseMessageData.duration},
      type: '${showCloseMessageData.type}',
    })
  }

<template>
  <el-button :plain="true" @click="showCloseMessageOpen">Show close message</el-button>
</template>`
})

// Center-Message
const centerMessageData = reactive({
  message: 'Centered text',
  center: ref<MessageProps['center']>(true),
  type: ref<MessageProps['type']>('info'),
  typeList,
})
const centerMessageOpen = () => {
  ElMessage({
    message: centerMessageData.message,
    center: centerMessageData.center,
    type: centerMessageData.type,
  })
}
const centerMessageSource = computed(() => {
  return `<script setup lang="ts">
  import { ElMessage } from 'element-plus'

  const centerMessageOpen = () => {
    ElMessage({
      message: '${centerMessageData.message}',
      center: ${centerMessageData.center},
      type: '${centerMessageData.type}',
    })
  }

<template>
  <el-button :plain="true" @click="centerMessageOpen">Show center text message</el-button>
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
      message: '${htmlMessageData.message}',
      dangerouslyUseHTMLString: ${htmlMessageData.dangerouslyUseHTMLString},
      type: '${centerMessageData.type}',
    })
  }

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
      message: '${groupingMessageData.message}',
      grouping: ${groupingMessageData.grouping},
      type: '${groupingMessageData.type}',
    })
  }

<template>
  <el-button :plain="true" @click="groupingMessageOpen">Show grouping message</el-button>
</template>`
})
</script>

<template>
  <Story title="Feedback/Message" icon="mdi:message-text-outline">
    <Variant title="Basic Usage" :source="basicMessageSource">
      <el-button :plain="true" @click="basicOpen">Show message</el-button>
      <el-button :plain="true" @click="basicOpenVn">VNode</el-button>
      <template #controls>
        <HstText v-model="basicMessage" title="Message" />
      </template>
    </Variant>
    <Variant title="Show Close" :source="showCloseMessageSource">
      <el-button :plain="true" @click="showCloseMessageOpen">Show close message</el-button>
      <template #controls>
        <HstText v-model="showCloseMessageData.message" title="Message" />
        <HstCheckbox v-model="showCloseMessageData.showClose" title="Close" />
        <HstNumber v-model="showCloseMessageData.duration" title="Duration" />
        <HstRadio
          v-model="showCloseMessageData.type"
          title="Type"
          :options="showCloseMessageData.typeList"
        />
      </template>
    </Variant>
    <Variant title="Center" :source="centerMessageSource">
      <el-button :plain="true" @click="centerMessageOpen">Show center text message</el-button>
      <template #controls>
        <HstText v-model="centerMessageData.message" title="Message" />
        <HstCheckbox v-model="centerMessageData.center" title="Center" />
        <HstRadio
          v-model="centerMessageData.type"
          title="Type"
          :options="centerMessageData.typeList"
        />
      </template>
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
    <Variant title="Grouping Message" :source="groupingMessageSource">
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
