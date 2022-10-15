<script setup lang="ts">
import { ref } from 'vue'
import type { CheckboxProps, CheckboxValueType } from 'element-plus'
import { logEvent } from 'histoire/client'
const size = ref<CheckboxProps['size']>('default')
const disabled = ref(false)
const checkAll = ref(false)
const isIndeterminate = ref(true)
const border = ref(true)
const checkList = ref(['selected and disabled', 'Option A'])
const max = ref(2)
const min = ref(1)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
const sizeOptions: {
  label: CheckboxProps['size']
  value: CheckboxProps['size']
}[] = [
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'small',
    value: 'small',
  },
]
const handleCheckAllChange = (val: CheckboxValueType) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
  logEvent('checkboxChange', val)
}
const handleCheckedCitiesChange = (value: CheckboxValueType[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
  logEvent('checkboxGroupChange', value)
}
const checkboxChange = (value: CheckboxValueType) => {
  logEvent('checkboxChange', { value })
}
const checkboxGroupChange = (value: CheckboxValueType[]) => {
  logEvent('checkboxGroupChange', value)
}
</script>

<template>
  <Story title="Form/Checkbox">
    <Variant title="Basic Usage">
      <el-checkbox
        label="option1"
        :size="size"
        :disabled="disabled"
        @change="checkboxChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeOptions" title="Size" />
        <HstCheckbox v-model="disabled" title="Disable" />
      </template>
    </Variant>
    <Variant title="Checkbox group">
      <el-checkbox-group v-model="checkList" @change="checkboxGroupChange">
        <el-checkbox label="Option A" />
        <el-checkbox label="Option B" />
        <el-checkbox label="Option C" />
        <el-checkbox label="disabled" disabled />
        <el-checkbox
          label="selected and disabled"
          disabled
          @change="checkboxChange"
        />
      </el-checkbox-group>
    </Variant>
    <Variant title="Indeterminate">
      <el-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
      >
        Check all
      </el-checkbox>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :key="city" :label="city">
          {{ city }}
        </el-checkbox>
      </el-checkbox-group>
    </Variant>
    <Variant title="Max/Min item checked">
      <el-checkbox-group
        v-model="checkedCities"
        :min="min"
        :max="max"
        @change="checkboxGroupChange"
      >
        <el-checkbox v-for="city in cities" :key="city" :label="city">
          {{ city }}
        </el-checkbox>
      </el-checkbox-group>
      <template #controls>
        <HstNumber v-model="min" title="Min" />
        <HstNumber v-model="max" title="Max" />
      </template>
    </Variant>
    <Variant title="Button style">
      <el-checkbox-group
        v-model="checkedCities"
        :size="size"
        @change="checkboxGroupChange"
      >
        <el-checkbox-button
          v-for="city in cities"
          :key="city"
          :label="city"
          :disabled="disabled"
        >
          {{ city }}
        </el-checkbox-button>
      </el-checkbox-group>
      <template #controls>
        <HstRadio v-model="size" :options="sizeOptions" title="Size" />
        <HstCheckbox v-model="disabled" title="Disable" />
      </template>
    </Variant>
    <Variant title="With borders">
      <el-checkbox
        label="Option1"
        :size="size"
        :border="border"
        :disabled="disabled"
        @change="checkboxChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeOptions" title="Size" />
        <HstCheckbox v-model="border" title="Border" />
        <HstCheckbox v-model="disabled" title="Disable" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic Usage
Checkbox can be used alone to switch between two states.

Define `v-model`(bind variable) in `el-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `el-checkbox` tag will become the description following the button of the checkbox.

## Checkbox group
It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

`checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `el-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

## Indeterminate
The `indeterminate` property can help you to achieve a 'check all' effect.

## Minimum / Maximum items checked
The min and max properties can help you to limit the number of checked items.

## Button style
Checkbox with button styles.

You just need to change `el-checkbox` element into `el-checkbox-button` element. We also provide `size` attribute.

## With borders
The `border` attribute adds a border to Checkboxes.
</docs>
