<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'
interface marginMapType {
  large: string
  default: string
  small: string
}
const size = ref<keyof marginMapType>('default')
const sizeVertical = ref<keyof marginMapType>('default')
const sizeList = ['large', 'default', 'small']
const iconStyle = computed(() => {
  const marginMap: marginMapType = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const blockMargin = computed(() => {
  const marginMap: marginMapType = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<template>
  <Story
    title="Data/Descriptions" :layout="{
      type: 'grid',
      width: 700,
    }"
  >
    <Variant title="Basic Usage">
      <el-descriptions title="User Info">
        <el-descriptions-item label="Username">
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item label="Telephone">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item label="Place">
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">
            School
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
          Province
        </el-descriptions-item>
      </el-descriptions>
      <template #controls>
        <!-- HstControl -->
      </template>
    </Variant>

    <Variant title="Sizes">
      <el-descriptions
        class="margin-top"
        title="With border"
        :column="3"
        :size="size"
        border
      >
        <template #extra>
          <el-button type="primary">
            Operation
          </el-button>
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <user />
              </el-icon>
              Username
            </div>
          </template>
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone />
              </el-icon>
              Telephone
            </div>
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <location />
              </el-icon>
              Place
            </div>
          </template>
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <tickets />
              </el-icon>
              Remarks
            </div>
          </template>
          <el-tag size="small">
            School
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building />
              </el-icon>
              Address
            </div>
          </template>
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions
        class="margin-top"
        title="Without border"
        :column="3"
        :size="size"
        :style="blockMargin"
      >
        <template #extra>
          <el-button type="primary">
            Operation
          </el-button>
        </template>
        <el-descriptions-item label="Username">
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item label="Telephone">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item label="Place">
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">
            School
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
      <template #controls>
        <HstRadio
          v-model="size"
          title="size"
          :options="sizeList"
        />
      </template>
    </Variant>

    <Variant title="Vertical List">
      <el-descriptions
        title="Vertical list with border"
        direction="vertical"
        :column="4"
        :size="sizeVertical"
        border
      >
        <el-descriptions-item label="Username">
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item label="Telephone">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">
            School
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions
        title="Vertical list without border"
        :column="4"
        :size="sizeVertical"
        direction="vertical"
        :style="blockMargin"
      >
        <el-descriptions-item label="Username">
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item label="Telephone">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">
            School
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
      <template #controls>
        <HstRadio
          v-model="sizeVertical"
          title="size"
          :options="sizeList"
        />
      </template>
    </Variant>

    <Variant title="Customized Style">
      <el-descriptions title="Customized style list" :column="3" border>
        <el-descriptions-item
          label="Username"
          label-align="right"
          align="center"
          label-class-name="my-label"
          class-name="my-content"
          width="150px"
        >
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item label="Telephone" label-align="right" align="center">
          18100000000
        </el-descriptions-item>
        <el-descriptions-item label="Place" label-align="right" align="center">
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item label="Remarks" label-align="right" align="center">
          <el-tag size="small">
            School
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address" label-align="right" align="center">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
          Province
        </el-descriptions-item>
      </el-descriptions>
      <template #controls>
        <!-- HstControl -->
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Descriptions usage

## Sizes

size of list

## Vertical List

direction of list

## Customized Style
column label or content custom class name
</docs>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.my-label {
  background: var(--el-color-success-light-9);
}
.my-content {
  background: var(--el-color-danger-light-9);
}
</style>
