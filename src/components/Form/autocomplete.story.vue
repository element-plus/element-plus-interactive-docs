<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { logEvent } from 'histoire/client'
interface LinkItem {
  value: string
  link: string
}
const clearable = ref(true)
const triggerOnFocus = ref(false)
const state1 = ref('')
const state = ref('')
const isAsync = ref(true)
const links = ref<LinkItem[]>([])
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestions
  cb(results)
}
let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}
const handleSelect = (value: any) => {
  logEvent('select', value)
}
onMounted(() => {
  links.value = loadAll()
})
</script>

<template>
  <Story title="Form/Autocomplete" auto-props-disabled>
    <Variant title="Basic Usage">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        :clearable="clearable"
        placeholder="Please Input"
        :trigger-on-focus="triggerOnFocus"
        @select="handleSelect"
      />
      <template #controls>
        <HstCheckbox v-model="clearable" title="Clearable" />
        <HstCheckbox v-model="triggerOnFocus" title="Trigger on focus" />
      </template>
    </Variant>
    <Variant title="Custom template">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearch"
        popper-class="my-autocomplete"
        placeholder="Please input"
        @select="handleSelect"
      >
        <template #suffix>
          <el-icon
            class="el-input__icon"
            @click="logEvent('iconClick', $event)"
          >
            <edit />
          </el-icon>
        </template>
        <template #default="{ item }">
          <div class="value">
            {{ item.value }}
          </div>
          <span class="link">{{ item.link }}</span>
        </template>
      </el-autocomplete>
      <template #controls>
        <HstCheckbox v-model="clearable" title="Clearable" />
      </template>
    </Variant>
    <Variant title="Remote search">
      <el-autocomplete
        v-model="state"
        :clearable="clearable"
        :fetch-suggestions="isAsync ? querySearchAsync : querySearch"
        placeholder="Please input"
        @select="handleSelect"
      />
      <template #controls>
        <HstCheckbox v-model="clearable" title="Clearable" />
        <HstCheckbox v-model="isAsync" title="Remote search" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage
You can get some recommended tips based on the current input.

Autocomplete component provides input suggestions. The `fetch-suggestions` attribute is a method that returns suggested input. In this example, `querySearch(queryString, cb)` returns suggestions to Autocomplete via `cb(data)` when suggestions are ready.

## Custom template
Customize how suggestions are displayed.

Use `scoped slot` to customize suggestion items. In the scope, you can access the suggestion object via the `item` key.
## Remote search
Search data from server-side.
</docs>
