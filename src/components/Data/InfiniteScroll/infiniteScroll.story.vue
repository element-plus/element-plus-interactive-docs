<script setup lang="ts">
// Basic-Usage
const count = ref(7)
const distance = ref(0)
const delay = ref(200)
const disabled = ref(false)
const refresh = ref(true)
function load() {
  return count.value += 2
}

debouncedWatch(delay, () => {
  refresh.value = false
  setTimeout(() => refresh.value = true, 0)
}, { debounce: 500, maxWait: 1000 })

debouncedWatch(distance, () => {
  refresh.value = false
  setTimeout(() => refresh.value = true, 0)
}, { debounce: 500, maxWait: 1000 })

const disableSource = computed(() => {
  return `<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(7)
  const disabled = ref(false)
  const delay = ref(200)
  const distance = ref(0)
  const load = () => count.value += 2
<\/script>
<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load"
      class="list"
      :infinite-scroll-disabled="${disabled.value}"
      :infinite-scroll-delay="${delay.value}"
      :infinite-scroll-distance="${distance.value}"
    >
      <li v-for="i in count" :key="i" class="list-item">
        {{ i }}
      </li>
    </ul>
  </div>
</template>`
})
</script>

<template>
  <Story
    title="Data/InfiniteScroll"
    icon="carbon:auto-scroll"
  >
    <Variant title="Basic usage" :source="disableSource">
      <div class="infinite-list-wrapper" style="overflow: auto">
        <ul
          v-if="refresh"
          v-infinite-scroll="load"
          class="list"
          :infinite-scroll-disabled="disabled"
          :infinite-scroll-delay="delay"
          :infinite-scroll-distance="distance"
        >
          <li v-for="i in count" :key="i" class="list-item">
            {{ i }}
          </li>
        </ul>
      </div>
      <template #controls>
        <HstCheckbox v-model="disabled" title="infinite-scroll-disabled" />
        <HstNumber v-model="delay" title="infinite-scroll-delay" />
        <HstNumber v-model="distance" title="infinite-scroll-distance" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
