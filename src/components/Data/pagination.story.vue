<script setup lang="ts">
import { reactive, ref } from 'vue'
import { logEvent } from 'histoire/client'

// Basic Usage Variant Props
const basicTotalA = ref(50)
const basicTotalB = ref(1000)

// Number of pagers Variant Props
const numberOfPagerCase = reactive({
  pageSize: 20,
  pageCount: 9,
  total: 800,
})

// Buttons with background color Variant Props
const buttonWithBackgroundColorCase = reactive({
  backgroud: true,
  total: 1000,
})

// Small Pagination Variant Props
const smallPaginationCase = reactive({
  background: true,
  small: true,
  total: 50,
})

// Hide pagination when there is only one page Variant Props
const hideOnSinglePaginationCase = reactive({
  hide: false,
  total: 5,
})

// More Elements Variant Props
const commonSmall = ref(false)
const commonBackground = ref(false)
const commonDisabled = ref(false)

const totalItemCountCase = reactive({
  currentPage: 5,
  pageSize: 100,
  total: 1000,
})

const changePageSizeCase = reactive({
  currentPage: 5,
  pageSize: 100,
  pageSizes: [100, 200, 300, 400],
  total: 1000,
})

const jumpToCase = reactive({
  currentPage: 5,
  pageSize: 100,
  total: 1000,
})

const allCombinedCase = reactive({
  currentPage: 4,
  pageSize: 100,
  pageSizes: [100, 200, 300, 400],
  total: 400,
})

const handleSizeChange = (val: number) => {
  logEvent('per page items: ', { perPageItemCount: val })
}

const handleCurrentChange = (val: number) => {
  logEvent('current page: ', { currentPage: val })
}
</script>

<template>
  <Story
    title="Data/Pagination"
    icon="fluent:dual-screen-pagination-20-regular"
    :layout="{ type: 'grid', width: 550 }"
  >
    <!-- Basic Usage Variant -->
    <Variant title="Basic Usage">
      <div>
        <div>
          When you have few pages
        </div>
        <el-pagination layout="prev, pager, next" :total="basicTotalA" />
      </div>
      <el-divider />
      <div>
        <div>
          When you have more than 7 pages
        </div>
        <el-pagination layout="prev, pager, next" :total="basicTotalB" />
      </div>
      <template #controls>
        <HstNumber v-model="basicTotalA" title="BasicTotalA" /><br>
        <HstNumber v-model="basicTotalB" title="BasicTotalB" />
      </template>
    </Variant>

    <!-- Number of pagers Variant -->
    <Variant title="Number of pagers">
      <el-pagination
        layout="prev, pager, next"
        :page-size="numberOfPagerCase.pageSize"
        :pager-count="numberOfPagerCase.pageCount"
        :total="numberOfPagerCase.total"
      />
      <template #controls>
        <HstNumber v-model="numberOfPagerCase.pageSize" title="PageSize" /><br>
        <HstNumber v-model="numberOfPagerCase.pageCount" title="PageCount" /><br>
        <HstNumber v-model="numberOfPagerCase.total" title="Total" />
      </template>
    </Variant>

    <!-- Buttons with background color Variant -->
    <Variant title="Buttons with background color">
      <el-pagination
        layout="prev, pager, next"
        :background="buttonWithBackgroundColorCase.backgroud"
        :total="buttonWithBackgroundColorCase.total"
      />
      <template #controls>
        <HstCheckbox v-model="buttonWithBackgroundColorCase.backgroud" title="With background Color" />
      </template>
    </Variant>

    <!-- Small Pagination Variant -->
    <Variant title="Small Pagination">
      <div>
        <div>Buttons without background color</div>
        <el-pagination
          layout="prev, pager, next"
          :small="smallPaginationCase.small"
          :total="smallPaginationCase.total"
        />
      </div><br>
      <div>
        <div>Buttons with background color</div>
        <el-pagination
          layout="prev, pager, next"
          :background="smallPaginationCase.background"
          :small="smallPaginationCase.small"
          :total="smallPaginationCase.total"
        />
      </div>
      <template #controls>
        <HstCheckbox v-model="smallPaginationCase.small" title="Small Pagination" /><br>
        <HstNumber v-model="smallPaginationCase.total" title="Total" />
      </template>
    </Variant>

    <!-- Hide pagination when there is only one page Variant -->
    <Variant title="Hide pagination when there is only one page">
      <div>
        <div>Whether hide</div>
        <el-pagination
          layout="prev, pager, next"
          :hide-on-single-page="hideOnSinglePaginationCase.hide"
          :total="hideOnSinglePaginationCase.total"
        />
      </div>
      <template #controls>
        <HstCheckbox v-model="hideOnSinglePaginationCase.hide" title="Whether hide" /><br>
      </template>
    </Variant>

    <!-- More Elements Variant -->
    <Variant title="More Elements">
      <div class="my-4">
        <div class="mb-2">
          Total item count
        </div>
        <el-pagination
          v-model:currentPage="totalItemCountCase.currentPage"
          layout="total, prev, pager, next"
          :page-size="totalItemCountCase.pageSize"
          :small="commonSmall"
          :disabled="commonDisabled"
          :background="commonBackground"
          :total="totalItemCountCase.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <el-divider />
      <div class="my-4">
        <div class="mb-2">
          Change page size
        </div>
        <el-pagination
          v-model:current-page="changePageSizeCase.currentPage"
          v-model:page-size="changePageSizeCase.pageSize"
          layout="sizes, prev, pager, next"
          :page-sizes="changePageSizeCase.pageSizes"
          :small="commonSmall"
          :disabled="commonDisabled"
          :background="commonBackground"
          :total="changePageSizeCase.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <el-divider />
      <div class="my-4">
        <div class="mb-2">
          Jump to
        </div>
        <el-pagination
          v-model:current-page="jumpToCase.currentPage"
          v-model:page-size="jumpToCase.pageSize"
          layout="prev, pager, next, jumper"
          :small="commonSmall"
          :disabled="commonDisabled"
          :background="commonBackground"
          :total="jumpToCase.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <el-divider />
      <div class="my-4">
        <div class="mb-2">
          All combined
        </div>
        <el-pagination
          v-model:current-page="allCombinedCase.currentPage"
          v-model:page-size="allCombinedCase.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="allCombinedCase.pageSizes"
          :small="commonSmall"
          :disabled="commonDisabled"
          :background="commonBackground"
          :total="allCombinedCase.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>

      <template #controls>
        <HstCheckbox v-model="commonSmall" title="Small" /><br>
        <HstCheckbox v-model="commonBackground" title="Background color" /><br>
        <HstCheckbox v-model="commonDisabled" title="Disabled" /><br>
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Set `layout` with different pagination elements you wish to display spearated with a comma.
Pagination elements are: `prev` (a button navigating to the previous page), `next` (a button navigating to the next page), `pager` (page list), `jumper` (a jump-to input), `total` (total item count), `size` (a select to determine page size) and `->`(every element after this symbol will be pulled to the right).

## Number of pagers

By default, Pagination collapses extra pager buttons when it has more than 7 pages. This can be configured with the `pager-count` attribute.

## Buttons with background color

Set the `background` attribute and the buttons will hava a background color.

## Small Pagination

Use small pagination in the case of limited space.
Just set the `small` attribute to `true` and the Pagination becomes smaller.

## Hide pagination when there is only one page

When there is only one page, hide the pagination by setting the `hide-on-single-page` attribute.

## More elements

Add more modules based on your scenario.

This example is a complete use case.
It uses `size-change` and `current-change` event to handle page size changes and current page changes.
`page-sizes` accepts an array of integers, each of which represents a different page size in the `sizes` select options, e.g. `[100, 200, 300, 400]` indicates that the select will have four options: 100, 200, 300 or 400 items per page.
</docs>
