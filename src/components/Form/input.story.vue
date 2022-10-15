<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const textarea = ref('')
const textarea1 = ref('')
const textarea2 = ref('')
const select = ref('')
const text = ref('')
</script>

<template>
  <Story title="Form/Input">
    <Variant title="Basic Usage">
      <el-input v-model="input" placeholder="Please input" />
    </Variant>
    <Variant title="Disabled">
      <el-input v-model="input" disabled placeholder="Please input" />
    </Variant>
    <Variant title="Clearable">
      <el-input v-model="input" clearable placeholder="Please input" />
    </Variant>
    <Variant title="Formatter">
      <el-input
        v-model="input"
        placeholder="Please input"
        :formatter="(value:string) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="(value:string) => value.replace(/\$\s?|(,*)/g, '')"
      />
    </Variant>
    <Variant title="Password box">
      <el-input
        v-model="input"
        type="password"
        placeholder="Please input password"
        show-password
      />
    </Variant>
    <Variant title="Input with icon">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
      <el-input v-model="input3" class="w-50 m-2" placeholder="Pick a date">
        <template #suffix>
          <el-icon class="el-input__icon">
            <calendar />
          </el-icon>
        </template>
      </el-input>
      <el-input v-model="input4" class="w-50 m-2" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon">
            <search />
          </el-icon>
        </template>
      </el-input>
    </Variant>
    <Variant title="Textarea">
      <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
      />
    </Variant>
    <Variant title="Autosize Textarea">
      <el-input
        v-model="textarea1"
        autosize
        type="textarea"
        placeholder="Please input"
      />
      <div style="margin: 20px 0" />
      <el-input
        v-model="textarea2"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
      />
    </Variant>
    <Variant title="Mixed input">
      <div>
        <el-input v-model="input1" placeholder="Please input">
          <template #prepend>
            Http://
          </template>
        </el-input>
      </div>
      <div class="mt-4">
        <el-input v-model="input2" placeholder="Please input">
          <template #append>
            .com
          </template>
        </el-input>
      </div>
      <div class="mt-4">
        <el-input
          v-model="input3"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
      <div class="mt-4">
        <el-input
          v-model="input3"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
        </el-input>
      </div>
    </Variant>
    <Variant title="Sizes">
      <div class="demo-input-size">
        <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
        />
        <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
        <el-input
          v-model="input3"
          class="w-50 m-2"
          size="small"
          placeholder="Please Input"
        />
      </div>
    </Variant>
    <Variant title="Limit length">
      <el-input
        v-model="text"
        maxlength="10"
        placeholder="Please input"
        show-word-limit
        type="text"
      />
      <div style="margin: 20px 0" />
      <el-input
        v-model="textarea"
        maxlength="30"
        placeholder="Please input"
        show-word-limit
        type="textarea"
      />
    </Variant>
  </Story>
</template>

<style>
.mt-4{
  margin-top: 4px;
}
.w-50{
  width: 500px;
}
.m-2 {
  margin: 2px;
}
</style>

<docs lang="md">
## Basic usage

Input usage
</docs>
