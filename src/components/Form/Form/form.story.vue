<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { customValidationRulesSource, options, resetForm, rules, validationSource } from './constants'
import { isAttribute } from '@/utils'
import sizeOptions from '@/constants/sizeOptions'

// BasicUsage
const labelPosition = ref('right')
const inline = ref(false)
const labelWidth = ref(100)
const size = ref('default')

const basicSource = computed(() => {
  return `<script setup lang="ts">
import { reactive, ref } from 'vue'
const formLabelAlign = reactive({
  name: '',
  region: '',
})
<\/script>

<el-form
  label-width="${labelWidth.value}px"
  :model="formLabelAlign"${isAttribute(
inline.value,
':inline="true"',
)}${isAttribute(
labelPosition.value !== 'right',
`:label-position="${labelPosition.value}"`,
)}${isAttribute(
size.value !== 'default',
`size="${size.value}"`,
)}
>
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name" />
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formLabelAlign.region" />
  </el-form-item>
</el-form>`
})

// Validation
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  pass: '',
  checkPass: '',
  age: '',
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid) => {
    if (valid) {
      ElMessage({
        message: 'submit!',
        type: 'success',
      })
    }

    else {
      ElMessage({
        message: 'error!',
        type: 'error',
      })
    }
  })
}
</script>

<template>
  <Story
    title="Form/Form"
    icon="iconoir:submit-document"
    :layout="{
      type: 'single',
      iframe: false,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-form
        :inline="inline"
        :label-position="labelPosition"
        :label-width="`${labelWidth}px`"
        :size="size"
      >
        <el-form-item label="Name">
          <el-input placeholder="Name" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-input placeholder="Activity zone" />
        </el-form-item>
      </el-form>
      <template #controls>
        <HstNumber v-model="labelWidth" title="Custom Size" />
        <HstCheckbox v-model="inline" title="inline" />
        <HstButtonGroup
          v-model="labelPosition"
          title="LabelPosition"
          :options="[
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'top', value: 'top' },
          ]"
        />
        <HstButtonGroup
          v-model="size"
          title="Size"
          :options="sizeOptions"
        />
      </template>
    </Variant>
    <Variant
      title="Validation"
      :source="validationSource"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity count" prop="count">
          <el-select-v2
            v-model="ruleForm.count"
            placeholder="Activity count"
            :options="options"
          />
        </el-form-item>
        <el-form-item label="Activity time" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                label="Pick a date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col class="text-center" :span="2">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
                label="Pick a time"
                placeholder="Pick a time"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="Sponsorship" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form" prop="desc">
          <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Create
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </Variant>
    <Variant
      title="Custom Validation Rules"
      :source="customValidationRulesSource"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Submit
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">
            Reset
          </el-button>
        </el-form-item>
      </el-form>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
