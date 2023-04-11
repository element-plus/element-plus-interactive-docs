<script setup lang="ts">
import { logEvent } from 'histoire/client'
import type {
  basicDrawerProps,
  customizedDrawerProps,
  nestedDrawerProps,
} from './constants'
import { directionList } from './constants'

function openEvent() {
  logEvent('open', { log: 'Drawer is opened' })
}

function handleClose(close: () => void) {
  logEvent('close', { log: 'Drawer is closed' })
  close()
}

const basicDrawerData: basicDrawerProps = reactive({
  vModel: false,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  openDelay: 0,
  closeDelay: 0,
  distroyOnClose: false,
  modal: true,
  direction: 'rtl',
  directionList,
  showClose: true,
  size: '30%',
  title: 'Drawer',
  withHeader: true,
})

const basicSource = computed(() => {
  return `<script setup lang="ts">
  import { ref } from 'vue'
  const active = ref(false)
<\/script>
<el-button @click="active = true">
  Open the drawer
</el-button>
<el-drawer
  v-model="active"${isAttribute(
    !basicDrawerData.closeOnClickModal,
    `close-on-click-modal=${basicDrawerData.closeOnClickModal}`,
  )}${isAttribute(
    !basicDrawerData.closeOnPressEscape,
    `close-on-press-escape=${basicDrawerData.closeOnPressEscape}`,
  )}${isAttribute(
    basicDrawerData.openDelay !== 0,
    `open-delay=${basicDrawerData.openDelay}`,
  )}${isAttribute(
    basicDrawerData.closeDelay !== 0,
    `close-delay=${basicDrawerData.closeDelay}`,
  )}${isAttribute(
    basicDrawerData.distroyOnClose,
    'distroy-on-close',
  )}${isAttribute(
    !basicDrawerData.modal,
    `modal="${basicDrawerData.modal}"`,
  )}${isAttribute(
    basicDrawerData.direction !== 'rtl',
    `direction="${basicDrawerData.direction}"`,
  )}${isAttribute(
    !basicDrawerData.showClose,
    `show-close=${basicDrawerData.showClose}`,
  )}${isAttribute(
    basicDrawerData.size !== '30%',
    `size="${basicDrawerData.size}"`,
  )}${isAttribute(
    basicDrawerData.title !== '',
    `title="${basicDrawerData.title}"`,
  )}${isAttribute(
    !basicDrawerData.withHeader,
    `with-header=${basicDrawerData.withHeader}`,
  )}
>
  <span>Hi, there!</span>
</el-drawer>`
})

const customizedDrawerData: customizedDrawerProps = reactive({
  vModel: false,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  openDelay: 0,
  closeDelay: 0,
  distroyOnClose: false,
  modal: true,
  direction: 'rtl',
  directionList,
  showClose: true,
  size: '30%',
  title: 'Customized title',
  withHeader: true,
  content: 'Customized content',
  footer: 'Customized footer',
})

const customizedSource = computed(() => {
  return `<script setup lang="ts">
  import { ref } from 'vue'
  const active = ref(false)
<\/script>
<el-button @click="active = true">
  Open a customized drawer
</el-button>
<el-drawer
  v-model="active"${isAttribute(
    !customizedDrawerData.closeOnClickModal,
    `close-on-click-modal=${customizedDrawerData.closeOnClickModal}`,
  )}${isAttribute(
    !customizedDrawerData.closeOnPressEscape,
    `close-on-press-escape=${customizedDrawerData.closeOnPressEscape}`,
  )}${isAttribute(
    customizedDrawerData.openDelay !== 0,
    `open-delay=${customizedDrawerData.openDelay}`,
  )}${isAttribute(
    customizedDrawerData.closeDelay !== 0,
    `close-delay=${customizedDrawerData.closeDelay}`,
  )}${isAttribute(
    customizedDrawerData.distroyOnClose,
    'distroy-on-close',
  )}${isAttribute(
    !customizedDrawerData.modal,
    `modal="${customizedDrawerData.modal}"`,
  )}${isAttribute(
    customizedDrawerData.direction !== 'rtl',
    `direction="${customizedDrawerData.direction}"`,
  )}${isAttribute(
    !customizedDrawerData.showClose,
    `show-close=${customizedDrawerData.showClose}`,
  )}${isAttribute(
    customizedDrawerData.size !== '30%',
    `size="${customizedDrawerData.size}"`,
  )}${isAttribute(
    customizedDrawerData.title !== '',
    `title="${customizedDrawerData.title}"`,
  )}${isAttribute(
    !customizedDrawerData.withHeader,
    `with-header=${customizedDrawerData.withHeader}`,
  )}>
  <template #header>
    ${customizedDrawerData.title}
  </template>
  <template #default>
    ${customizedDrawerData.content}
  </template>
  <template #footer>
    ${customizedDrawerData.footer}
  </template>
</el-drawer>`
})

const nestedDrawerData: nestedDrawerProps = reactive({
  vModel: false,
  internalVModel: false,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  openDelay: 0,
  closeDelay: 0,
  distroyOnClose: false,
  modal: true,
  direction: 'rtl',
  directionList,
  showClose: true,
  size: '30%',
  title: 'External drawer',
  withHeader: true,
})

const nestedSource = computed(() => {
  return `<script setup lang="ts">
  import { ref } from 'vue'
  const externalActive = ref(false)
  const internalActive = ref(false)
<\/script>
<el-button @click="externalActive = true"> 
  Open a nested drawer
</el-button>
<el-drawer
  v-model="externalActive"${isAttribute(
    !nestedDrawerData.closeOnClickModal,
    `close-on-click-modal=${nestedDrawerData.closeOnClickModal}`,
  )}${isAttribute(
    !nestedDrawerData.closeOnPressEscape,
    `close-on-press-escape=${nestedDrawerData.closeOnPressEscape}`,
  )}${isAttribute(
    nestedDrawerData.openDelay !== 0,
    `open-delay=${nestedDrawerData.openDelay}`,
  )}${isAttribute(
    nestedDrawerData.closeDelay !== 0,
    `close-delay=${nestedDrawerData.closeDelay}`,
  )}${isAttribute(
    nestedDrawerData.distroyOnClose,
    'distroy-on-close',
  )}${isAttribute(
    !nestedDrawerData.modal,
    `modal="${nestedDrawerData.modal}"`,
  )}${isAttribute(
    nestedDrawerData.direction !== 'rtl',
    `direction="${nestedDrawerData.direction}"`,
  )}${isAttribute(
    !nestedDrawerData.showClose,
    `show-close=${nestedDrawerData.showClose}`,
  )}${isAttribute(
    nestedDrawerData.size !== '30%',
    `size="${nestedDrawerData.size}"`,
  )}${isAttribute(
    nestedDrawerData.title !== '',
    `title="${nestedDrawerData.title}"`,
  )}${isAttribute(
    !nestedDrawerData.withHeader,
    `with-header=${nestedDrawerData.withHeader}`,
  )}>
  <template #default>
    <el-drawer      
      v-model="internalActive"
      size="20%"
      title="Internal drawer"
      :append-to-body="true"
    />
  </template>
  <template #footer>
    <el-button @click="externalActive = false">
      Cancel 
    </el-button>
    <el-button type="primary" @click="internalActive = true"> 
      Open the internal Drawer
    </el-button>
  </template>
</el-drawer>`
})
</script>

<template>
  <Story title="Feedback/Drawer" icon="icomoon-free:drawer">
    <Variant title="Basic Usage" :source="basicSource">
      <el-button
        @click="
          basicDrawerData.vModel = true;
          openEvent();
        "
      >
        Open the drawer
      </el-button>
      <Teleport to="#app">
        <el-drawer
          v-model="basicDrawerData.vModel" :close-on-click-modal="basicDrawerData.closeOnClickModal"
          :close-on-press-escape="basicDrawerData.closeOnPressEscape" :open-delay="basicDrawerData.openDelay"
          :close-delay="basicDrawerData.closeDelay" :distroy-on-close="basicDrawerData.distroyOnClose"
          :modal="basicDrawerData.modal" :direction="basicDrawerData.direction" :show-close="basicDrawerData.showClose"
          :size="basicDrawerData.size" :title="basicDrawerData.title" :with-header="basicDrawerData.withHeader"
          :before-close="handleClose"
        >
          <span>Hi, there!</span>
        </el-drawer>
      </Teleport>
      <template #controls>
        <HstCheckbox v-model="basicDrawerData.closeOnClickModal" title="Close-on-click-modal" />
        <HstCheckbox v-model="basicDrawerData.closeOnPressEscape" title="Close-on-press-escape" />
        <HstNumber v-model="basicDrawerData.openDelay" title="Open-delay" />
        <HstNumber v-model="basicDrawerData.closeDelay" title="Close-delay" />
        <HstCheckbox v-model="basicDrawerData.distroyOnClose" title="Distroy-on-close" />
        <HstCheckbox v-model="basicDrawerData.modal" title="Modal" />
        <HstRadio v-model="basicDrawerData.direction" title="Direction" :options="basicDrawerData.directionList" />
        <HstCheckbox v-model="basicDrawerData.showClose" title="Show-close" />
        <HstText v-model="basicDrawerData.size" title="Size" />
        <HstText v-model="basicDrawerData.title" title="Title" />
        <HstCheckbox v-model="basicDrawerData.withHeader" title="With-header" />
      </template>
    </Variant>
    <Variant title="Customized Drawer" :source="customizedSource">
      <el-button
        @click="
          customizedDrawerData.vModel = true;
          openEvent();
        "
      >
        Open a customized drawer
      </el-button>
      <Teleport to="#app">
        <el-drawer
          v-model="customizedDrawerData.vModel" :close-on-click-modal="customizedDrawerData.closeOnClickModal"
          :close-on-press-escape="customizedDrawerData.closeOnPressEscape" :open-delay="customizedDrawerData.openDelay"
          :close-delay="customizedDrawerData.closeDelay" :distroy-on-close="customizedDrawerData.distroyOnClose"
          :modal="customizedDrawerData.modal" :direction="customizedDrawerData.direction"
          :show-close="customizedDrawerData.showClose" :size="customizedDrawerData.size"
          :with-header="customizedDrawerData.withHeader" :before-close="handleClose"
        >
          <template #header>
            {{ customizedDrawerData.title }}
          </template>
          <template #default>
            {{ customizedDrawerData.content }}
          </template>
          <template #footer>
            {{ customizedDrawerData.footer }}
          </template>
        </el-drawer>
      </Teleport>
      <template #controls>
        <HstText v-model="customizedDrawerData.content" title="Content" />
        <HstCheckbox v-model="customizedDrawerData.closeOnClickModal" title="Close-on-click-modal" />
        <HstCheckbox v-model="customizedDrawerData.closeOnPressEscape" title="Close-on-press-escape" />
        <HstNumber v-model="customizedDrawerData.openDelay" title="Open-delay" />
        <HstNumber v-model="customizedDrawerData.closeDelay" title="Close-delay" />
        <HstCheckbox v-model="customizedDrawerData.distroyOnClose" title="Distroy-on-close" />
        <HstCheckbox v-model="customizedDrawerData.modal" title="Modal" />
        <HstRadio
          v-model="customizedDrawerData.direction" title="Direction"
          :options="customizedDrawerData.directionList"
        />
        <HstCheckbox v-model="customizedDrawerData.showClose" title="Show-close" />
        <HstText v-model="customizedDrawerData.size" title="Size" />
        <HstText v-model="customizedDrawerData.title" title="Title" />
        <HstCheckbox v-model="customizedDrawerData.withHeader" title="With-header" />
      </template>
    </Variant>
    <Variant title="Nested Drawer" :source="nestedSource">
      <el-button
        @click="
          nestedDrawerData.vModel = true;
          openEvent();
        "
      >
        Open a nested drawer
      </el-button>
      <Teleport to="#app">
        <el-drawer
          v-model="nestedDrawerData.vModel" :close-on-click-modal="nestedDrawerData.closeOnClickModal"
          :close-on-press-escape="nestedDrawerData.closeOnPressEscape" :open-delay="nestedDrawerData.openDelay"
          :close-delay="nestedDrawerData.closeDelay" :distroy-on-close="nestedDrawerData.distroyOnClose"
          :modal="nestedDrawerData.modal" :direction="nestedDrawerData.direction"
          :show-close="nestedDrawerData.showClose" :size="nestedDrawerData.size" :title="nestedDrawerData.title"
          :with-header="nestedDrawerData.withHeader" :before-close="handleClose"
        >
          <template #default>
            <el-drawer
              v-model="nestedDrawerData.internalVModel" size="20%" title="Internal drawer"
              :append-to-body="true" :before-close="handleClose"
            />
          </template>
          <template #footer>
            <el-button
              @click="
                nestedDrawerData.vModel = false;
                openEvent();
              "
            >
              Cancel
            </el-button>
            <el-button
              type="primary" @click="
                nestedDrawerData.internalVModel = true;
                openEvent();
              "
            >
              Open the internal Drawer
            </el-button>
          </template>
        </el-drawer>
      </Teleport>
      <template #controls>
        <HstCheckbox v-model="nestedDrawerData.closeOnClickModal" title="Close-on-click-modal" />
        <HstCheckbox v-model="nestedDrawerData.closeOnPressEscape" title="Close-on-press-escape" />
        <HstNumber v-model="nestedDrawerData.openDelay" title="Open-delay" />
        <HstNumber v-model="nestedDrawerData.closeDelay" title="Close-delay" />
        <HstCheckbox v-model="nestedDrawerData.distroyOnClose" title="Distroy-on-close" />
        <HstCheckbox v-model="nestedDrawerData.modal" title="Modal" />
        <HstRadio v-model="nestedDrawerData.direction" title="Direction" :options="nestedDrawerData.directionList" />
        <HstCheckbox v-model="nestedDrawerData.showClose" title="Show-close" />
        <HstText v-model="nestedDrawerData.size" title="Size" />
        <HstText v-model="nestedDrawerData.title" title="Title" />
        <HstCheckbox v-model="nestedDrawerData.withHeader" title="With-header" />
      </template>
    </Variant>
  </Story>
</template>
