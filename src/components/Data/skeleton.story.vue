<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const animated = ref(true)
const rows = ref<number>(5)
const loading = reactive([true, false, true])
const currentDate = new Date().toDateString()

const lists = ref<ListItem[]>([])

const setLoading = (index: number) => {
  loading[index] = true
  setTimeout(() => {
    loading[index] = false
  }, 2000)
}

onMounted(() => {
  loading[1] = false
  lists.value = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
})
</script>

<template>
  <Story
    title="Data/Skeleton" icon="clarity:avatar-line"
    :layout="{
      type: 'grid',
      width: 700,
    }"
  >
    <Variant title="Basic usage">
      <el-skeleton />
      <br>
      <el-skeleton style="--el-skeleton-circle-size: 100px">
        <template #template>
          <el-skeleton-item variant="circle" />
        </template>
      </el-skeleton>
    </Variant>
    <Variant title="Configurable rows">
      <el-skeleton :rows="rows" />
      <template #controls>
        <HstNumber v-model="rows" title="rows" />
      </template>
    </Variant>
    <Variant title="Animation">
      <el-skeleton :rows="5" :animated="animated" />
      <template #controls>
        <HstCheckbox v-model="animated" title="animated" />
      </template>
    </Variant>
    <Variant title="Customized Template">
      <el-skeleton style="width: 240px">
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="p" style="width: 50%" />
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
      </el-skeleton>
    </Variant>
    <Variant title="Loading state">
      <el-skeleton style="width: 240px" :loading="loading[0]" animated>
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div class="skeleton-item-wrapper">
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
        <template #default>
          <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px">
              <span>Delicious hamburger</span>
              <div class="bottom card-header">
                <div class="time">
                  {{ currentDate }}
                </div>
                <el-button text class="button">
                  Operation button
                </el-button>
              </div>
            </div>
          </el-card>
        </template>
      </el-skeleton>
      <template #controls>
        <HstCheckbox v-model="loading[0]" title="loading" />
      </template>
    </Variant>
    <Variant title="Rendering a list of data">
      <el-space direction="vertical" alignment="flex-start">
        <el-button @click="setLoading(1)">
          Click me to reload
        </el-button>
        <el-skeleton style="width: 240px" :loading="loading[1]" animated :count="3">
          <template #template>
            <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 50%" />
              <div class="skeleton-item-wrapper">
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
          <template #default>
            <el-card
              v-for="item in lists"
              :key="item.name"
              :body-style="{ padding: '0px', marginBottom: '1px' }"
            >
              <img :src="item.imgUrl" style="width: 260px; height: 173px; overflow: scroll;" class="image multi-content">
              <div style="padding: 14px">
                <span>{{ item.name }}</span>
                <div class="bottom card-header">
                  <div class="time">
                    {{ currentDate }}
                  </div>
                  <el-button text class="button">
                    Operation button
                  </el-button>
                </div>
              </div>
            </el-card>
          </template>
        </el-skeleton>
      </el-space>
    </Variant>
    <Variant title="Avoiding rendering bouncing">
      <el-space direction="vertical" alignment="flex-start">
        <div>
          <label style="margin-right: 16px">Switch Loading</label>
          <el-switch v-model="loading[2]" />
        </div>
        <el-skeleton
          style="width: 240px"
          :loading="loading[2]"
          animated
          :throttle="500"
        >
          <template #template>
            <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 50%" />
              <div class="skeleton-item-wrapper">
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
          <template #default>
            <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              >
              <div style="padding: 14px">
                <span>Delicious hamburger</span>
                <div class="bottom card-header">
                  <div class="time">
                    {{ currentDate }}
                  </div>
                  <el-button text class="button">
                    operation button
                  </el-button>
                </div>
              </div>
            </el-card>
          </template>
        </el-skeleton>
      </el-space>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

The basic skeleton.

## Configurable rows

You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the others.

## Animation

We have provided a switch flag indicating whether showing the loading animation, called animated when this is true, all children of el-skeleton will show animation

## Customized Template

Element Plus only provides the most common template, sometimes that could be a problem, so you have a slot named template to do that work.

Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference.

## Loading state

When Loading ends, we always need to show the real UI with data to our end users. with the attribute loading we can control whether showing the DOM. You can also use slot default to structure the real DOM element.

## Rendering a list of data

Most of the time, skeleton is used as indicators of rendering a list of data which haven't been fetched from server yet, then we need to create a list of skeleton out of no where to make it look like it is loading, with count attribute, you can control how many these templates you need to render to the browser.

## Avoiding rendering bouncing

Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the throttle attribute.
</docs>

<style scoped>
.demo-type {
  display: flex;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 320px);
}
.skeleton-item-wrapper {
  display: flex;
  align-items: center;
  justify-items: space-between;
  margin-top: 16px;
  height: 16px;
}
</style>
