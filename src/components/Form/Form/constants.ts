import type { FormInstance, FormRules } from 'element-plus'

export const validationSource = `<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

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
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: idx + 1,
  label: idx + 1,
}))
<\/script>

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
    <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Create</el-button
    >
    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
  </el-form-item>
</el-form>
`

export const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

export const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

export const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  formEl.resetFields()
}

export const customValidationRulesSource = `<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
<\/script>

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
    <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Submit</el-button
    >
    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
  </el-form-item>
</el-form>
`
