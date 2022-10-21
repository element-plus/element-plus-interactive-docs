## Button Attributes

| Name                                | Description                                                     | Type                  | Accepted Values                                               | Default |
| ----------------------------------- | --------------------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ------- |
| size                                | button size                                                     | string                | large / default /small                                        | —       |
| type                                | button type                                                     | string                | primary / success / warning / danger / info / <del>text</del> | —       |
| plain                               | determine whether it's a plain button                           | boolean               | —                                                             | false   |
| text <VersionTag version="2.2.0" /> | determine whether it's a text button                            | boolean               | —                                                             | false   |
| bg <VersionTag version="2.2.0" />   | determine whether the text button background color is always on | boolean               | —                                                             | false   |
| link <VersionTag version="2.2.1" /> | determine whether it's a link button                            | boolean               | —                                                             | false   |
| round                               | determine whether it's a round button                           | boolean               | —                                                             | false   |
| circle                              | determine whether it's a circle button                          | boolean               | —                                                             | false   |
| loading                             | determine whether it's loading                                  | boolean               | —                                                             | false   |
| loading-icon                        | customize loading icon component                                | `string \| Component` | —                                                             | Loading |
| disabled                            | disable the button                                              | boolean               | —                                                             | false   |
| icon                                | icon component                                                  | `string \| Component` | —                                                             | —       |
| autofocus                           | same as native button's `autofocus`                             | boolean               | —                                                             | false   |
| native-type                         | same as native button's `type`                                  | string                | button / submit / reset                                       | button  |
| auto-insert-space                   | automatically insert a space between two chinese characters     | boolean               |                                                               | —       |

## Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| —       | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

## Button-Group Attributes

| Name | Description                                      | Type   | Accepted Values                             | Default |
| ---- | ------------------------------------------------ | ------ | ------------------------------------------- | ------- |
| size | control the size of buttons in this button-group | string | large / default /small                      | —       |
| type | control the type of buttons in this button-group | string | primary / success / warning / danger / info | —       |

## Button-Group Slots

| Name | Description                    | Subtags |
| ---- | ------------------------------ | ------- |
| -    | customize button group content | Button  |
