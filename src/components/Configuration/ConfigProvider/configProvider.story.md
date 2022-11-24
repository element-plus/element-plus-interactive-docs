## Config Provider Attributes

| Name                  | Description                                                                                                                                                            | Type                                                                                                                               | Accepted Values                                                                         | Default                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| locale                | Locale Object                                                                                                                                                          | [Language](https://github.com/element-plus/element-plus/blob/a98ff9b40c0c3d2b9959f99919bd8363e3e3c25a/packages/locale/index.ts#L5) | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | [English](https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts) |
| size                  | global component size                                                                                                                                                  | string                                                                                                                             | large / default /small                                                                  | default                                                                                     |
| zIndex                | global Initial zIndex                                                                                                                                                  | number                                                                                                                             | -                                                                                       | -                                                                                           |
| namespace             | global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | string                                                                                                                             | -                                                                                       | el                                                                                          |
| button                | button related configuration, [see the following table](#button-attributes)                                                                                            | ButtonGlobalConfig                                                                                                                 | -                                                                                       | see the following table                                                                     |
| message               | message related configuration, [see the following table](#message-attributes)                                                                                          | MessageGlobalConfig                                                                                                                | -                                                                                       | see the following table                                                                     |
| experimental-features | features at experimental stage to be added, all features are default to be set to false                                                                                | Object                                                                                                                             | -                                                                                       | -                                                                                           |

## Button Attribute

| Attribute       | Description                                                 | Type    | Accepted Values | Default |
| --------------- | ----------------------------------------------------------- | ------- | --------------- | ------- |
| autoInsertSpace | automatically insert a space between two chinese characters | boolean | -               | false   |

## Message Attribute

| Attribute | Description                                                           | Type   | Accepted Values | Default |
| --------- | --------------------------------------------------------------------- | ------ | --------------- | ------- |
| max       | the maximum number of messages that can be displayed at the same time | number | -               | -       |

## Config Provider Slots

| Name | Description               | Scope                                                   |
| ---- | ------------------------- | ------------------------------------------------------- |
| -    | customize default content | config: provided global config (inherited from the top) |
