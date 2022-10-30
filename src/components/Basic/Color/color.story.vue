<script setup lang="ts">
</script>

<template>
  <Story
    title="Basic/Color"
    :layout="{
      type: 'single',
      iframe: true,
    }"
    icon="carbon:container-software"
  >
    <Variant title="Basic Usage" source=" ">
      <h1>
        Color
      </h1>
      <p>
        Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.
      </p>
      <h2>Main Color</h2>
      <p>
        The main color of Element Plus is bright and friendly blue.
      </p>
      <MainColor />
      <h2>Secondary Color</h2>
      <p>
        Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)
      </p>
      <SecondaryColors />
      <h2>
        Neutral Color
      </h2>
      <p>
        Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.
      </p>
      <NeutralColor />
    </Variant>
  </Story>
</template>

<style lang="scss">
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 8px 0;
  height: 112px;
  box-sizing: border-box;
  color: var(--el-color-white);
  font-size: 14px;

  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;

    .bg-blue-sub-item {
      height: 100%;
      display: inline-block;

      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }

    .bg-secondary-sub-item {
      height: 100%;
      display: inline-block;
      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }
  }

  .value {
    margin-top: 2px;
  }
}

.demo-color-box-lite {
  color: var(--el-text-color-primary);
}
</style>
