<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { logEvent } from 'histoire/client'
interface LinkItem {
  value: string
  link: string
}
const state1 = ref('')
const state2 = ref('')
const state = ref('')
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
  <Story title="Form/Autocomplete">
    <Variant title="Basic">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        placeholder="Please Input"
        @select="handleSelect"
      />
    </Variant>
    <Variant title="trigger on input">
      <el-autocomplete
        v-model="state2"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        placeholder="Please Input"
        @select="handleSelect"
      />
    </Variant>
    <Variant title="Custom templete">
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
    </Variant>
    <Variant title="Remote search">
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="Please input"
        @select="handleSelect"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage
You can get some recommended tips based on the current input.

Autocomplete component provides input suggestions. The `fetch-suggestions` attribute is a method that returns suggested input. In this example, `querySearch(queryString, cb)` returns suggestions to Autocomplete via `cb(data)` when suggestions are ready.
## Trigger on input
You can set trigger-on-focus to control whether show suggestions when input focus
## Custom templete
Customize how suggestions are displayed.

Use `scoped slot` to customize suggestion items. In the scope, you can access the suggestion object via the `item` key.
## Remote search
Search data from server-side.
</docs>
