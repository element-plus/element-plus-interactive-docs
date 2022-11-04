## Collapse Attributes

| Name                  | Description                        | Type                                                 | Accepted Values | Default |
| --------------------- | ---------------------------------- | ---------------------------------------------------- | --------------- | ------- |
| model-value / v-model | currently active panel             | string (accordion mode) / array (non-accordion mode) | —               | —       |
| accordion             | whether to activate accordion mode | boolean                                              | —               | false   |

## Collapse Events

| Name   | Description                        | Parameters                                                          |
| ------ | ---------------------------------- | ------------------------------------------------------------------- |
| change | triggers when active panels change | (activeNames: array (non-accordion mode) / string (accordion mode)) |

## Collapse Slots

| Name | Description               | Subtags       |
| ---- | ------------------------- | ------------- |
| -    | customize default content | Collapse Item |

## Collapse Item Attributes

| Name     | Description                        | Type          | Accepted Values | Default |
| -------- | ---------------------------------- | ------------- | --------------- | ------- |
| name     | unique identification of the panel | string/number | —               | —       |
| title    | title of the panel                 | string        | —               | —       |
| disabled | disable the collapse item          | boolean       | —               | —       |

## Collapse Item Slot

| Name  | Description                    |
| ----- | ------------------------------ |
| —     | content of Collapse Item       |
| title | content of Collapse Item title |
