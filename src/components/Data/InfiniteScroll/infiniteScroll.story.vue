<script setup lang="ts">
// Basic-Usage
const count = ref(2)
const load = () => {
  count.value += 2
}

const basicSource = computed(() => {
  return `<script setup lang="ts">
  import { ref } from 'vue'
  const count = ref(2)
  const load = () => {
    count.value += 2
  }
<\/script>
<template>
  <ul
    v-infinite-scroll="load"
    class="infinite-list"
    style="overflow: auto"
  >
    <li v-for="i in count" :key="i" class="infinite-list-item">
      {{ i }}
    </li>
  </ul>
</template>`
})

// Disable Loading
const count1 = ref(7)
const disabled = ref(true)
const load1 = () => {
  count1.value += 2
}

const disableSource = computed(() => {
  return `<script setup lang="ts">
  import { ref, computed } from 'vue'
  const count1 = ref(7)
  const disabled = ref(true)
  const load1 = () => {
    count1.value += 2
  }
<\/script>
<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
      v-infinite-scroll="load1"
      class="list"
      :infinite-scroll-disabled="${disabled.value}"
    >
      <li v-for="i in count1" :key="i" class="list-item">
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
    <Variant title="Basic usage" :source="basicSource">
      <ul
        v-infinite-scroll="load"
        class="infinite-list"
        style="overflow: auto"
      >
        <li v-for="i in count" :key="i" class="infinite-list-item">
          {{ i }}
        </li>
      </ul>
    </Variant>
    <Variant title="Disable Loading" :source="disableSource">
      <div class="infinite-list-wrapper" style="overflow: auto">
        <ul
          v-infinite-scroll="load1"
          class="list"
          :infinite-scroll-disabled="disabled"
        >
          <li v-for="i in count1" :key="i" class="list-item">
            {{ i }}
          </li>
        </ul>
      </div>
      <template #controls>
        <HstCheckbox v-model="disabled" title="infinite-scroll-disabled" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}

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
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
