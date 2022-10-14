<script setup lang="ts">
import { ref } from 'vue'
import type { BadgeProps } from 'element-plus'
import { CaretBottom } from '@element-plus/icons-vue'
import { Share } from '@element-plus/icons-vue'

const currentValue = ref(12)
const stringValue = ref('hot')
const currentType = ref<BadgeProps['type']>('danger')
const maxValue = ref(10)
const isDot = ref(true)

const badgeTypeList: Record<'label' & 'value', BadgeProps['type']>[] = [
  {
    label: 'danger',
    value: 'danger',
  },
  {
    label: 'primary',
    value: 'primary',
  },
  {
    label: 'success',
    value: 'success',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'info',
    value: 'info',
  },
]
</script>

<template>
  <Story title="Data/Badge">
    <Variant title="Basic usage">
      <el-badge :value="currentValue" :type="currentType" class="item">
        <el-button>comments</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              comments
              <el-badge :value="currentValue" :type="currentType" class="mark" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <template #controls>
        <HstNumber v-model="currentValue" title="Badge Value" />
        <HstRadio v-model="currentType" title="Badge Type" :options="badgeTypeList" />
      </template>
    </Variant>

    <Variant title="Max Value">
      <el-badge :value="currentValue" :max="maxValue" class="item">
        <el-button>comments</el-button>
      </el-badge>

      <template #controls>
        <HstNumber v-model="currentValue" title="Badge Value" />
        <HstNumber v-model="maxValue" title="Max Value" />
      </template>
    </Variant>

    <Variant title="Customizations">
      <el-badge :value="stringValue" class="item">
        <el-button>replies</el-button>
      </el-badge>

      <template #controls>
        <HstText v-model="stringValue" title="Badge Value" />
      </template>
    </Variant>

    <Variant title="Red Dot">
      <el-badge :is-dot="isDot" class="item">
        <el-button class="share-button" :icon="Share" type="primary" />
      </el-badge>

      <template #controls>
        <HstCheckbox v-model="isDot" title="Is Dot" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-dropdown {
  margin-top: 1.1rem;
}
</style>
