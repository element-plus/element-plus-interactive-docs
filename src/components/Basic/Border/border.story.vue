<script setup lang="ts">
const radiusGroup = ref([
  {
    name: 'No Radius',
    type: '',
  },
  {
    name: 'Small Radius',
    type: 'small',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Round Radius',
    type: 'round',
  },
])

const getValue = (type: string) => {
  const getCssVarValue = (prefix: string, type: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`,
    )
  return getCssVarValue('border-radius', type)
}

const shadowGroup = ref([
  {
    name: 'Basic Shadow',
    type: '',
  },
  {
    name: 'Light Shadow',
    type: 'light',
  },
  {
    name: 'Lighter Shadow',
    type: 'lighter',
  },
  {
    name: 'Dark Shadow',
    type: 'dark',
  },
])

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? '-' : ''}${type}`
}
</script>

<template>
  <Story
    title="Basic/Border"
    icon="teenyicons:border-radius-solid"
    source=" "
    :layout="{
      type: 'grid',
      width: 260,
    }"
  >
    <Variant title="Border style">
      <table class="demo-border">
        <tbody>
          <tr>
            <td class="text">
              Name
            </td>
            <td class="text">
              Thickness
            </td>
            <td class="line">
              Demo
            </td>
          </tr>
          <tr>
            <td class="text">
              Solid
            </td>
            <td class="text">
              1px
            </td>
            <td class="line">
              <div />
            </td>
          </tr>
          <tr>
            <td class="text">
              Dashed
            </td>
            <td class="text">
              2px
            </td>
            <td class="line">
              <div class="dashed" />
            </td>
          </tr>
        </tbody>
      </table>
    </Variant>
    <Variant title="Radius">
      <div class="demo-radius">
        <el-col
          v-for="(radius, i) in radiusGroup"
          :key="i"
          :xs="{ span: 12 }"
        >
          <div class="title">
            {{ radius.name }}
          </div>
          <code class="code-value">border-radius: {{ getValue(radius.type) || '0px' }}</code>
          <div
            class="radius"
            :style="{
              borderRadius: radius.type
                ? `var(--el-border-radius-${radius.type})`
                : '',
            }"
          />
        </el-col>
      </div>
    </Variant>
    <Variant title="Shadow">
      <div class="shadow-box">
        <div
          v-for="(shadow, i) in shadowGroup"
          :key="i"
          class="shadow-item"
        >
          <div
            class="shadow"
            :style="{
              boxShadow: `var(${getCssVarName(shadow.type)})`,
            }"
          />
          <span>
            {{ shadow.name }}
          </span>
          <code
            class="code-value"
          >
            {{ getCssVarName(shadow.type) }}
          </code>
        </div>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.demo-border .text {
  width: 15%;
}
.demo-border .line {
  width: 70%;
}
.demo-border .line div {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}
.demo-border .line .dashed {
  border-top: 2px dashed var(--el-border-color);
}

.demo-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}

.demo-radius .radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
}

.shadow-box {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.shadow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 11.5rem;
  margin: auto;
}

.shadow {
  display: inline-flex;
  width: 7.5rem;
  height: 7.5rem;
  margin: 0.5rem;
}

.code-value {
  border: 1px solid var(--el-border-color);
  background-color: var(--el-fill-color-light);
  font-size: 16px;
  margin: 10px 0;
  white-space: nowrap;
}
</style>
