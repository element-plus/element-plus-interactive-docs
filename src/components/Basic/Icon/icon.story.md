## Icon Usage

- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@element-plus/icons-vue@1.x](https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/)[@element-plus/icons-vue@latest](https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/) and the source [element-plus-icons](https://github.com/element-plus/element-plus-icons) out or [Icon Collection](#icon-collection)

## Installation

### Using packaging manager

```shell
# Choose a package manager you like.
# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```
## Icon Attributes

| Name    | Description                | Type                           | Default                |
| ------- | -------------------------- | ------------------------------ | ---------------------- |
| `color` | SVG tag's fill attribute   | `Pick<CSSProperties, 'color'>` | inherit from color     |
| `size`  | SVG icon size, size x size | `number \| string`             | inherit from font size |

## Icon Slots

| Name      | Description               |
| --------- | ------------------------- |
| `default` | customize default content |
