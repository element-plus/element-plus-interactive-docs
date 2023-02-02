## Dropdown Attributes

| Name           | Description                                                                                                           | Type            | Accepted Values                                          | Default                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| type           | menu button type, refer to `Button` Component, only works when `split-button` is true                                 | string          | —                                                        | —                                                                          |
| size           | menu size, also works on the split button                                                                             | string          | large / default / small                                  | default                                                                    |
| max-height     | the max height of menu                                                                                                | string / number | —                                                        | —                                                                          |
| split-button   | whether a button group is displayed                                                                                   | boolean         | —                                                        | false                                                                      |
| disabled       | Whether to disable                                                                                                    | boolean         | —                                                        | false                                                                      |
| placement      | placement of pop menu                                                                                                 | string          | top/top-start/top-end/bottom/bottom-start/bottom-end     | bottom                                                                     |
| trigger        | how to trigger                                                                                                        | string          | hover/click/contextmenu                                  | hover                                                                      |
| hide-on-click  | whether to hide menu after clicking menu-item                                                                         | boolean         | —                                                        | true                                                                       |
| show-timeout   | Delay time before show a dropdown (only works when trigger is `hover`)                                                | number          | —                                                        | 250                                                                        |
| hide-timeout   | Delay time before hide a dropdown (only works when trigger is `hover`)                                                | number          | —                                                        | 150                                                                        |
| role           | The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation' | string          | —                                                        | 'menu'                                                                     |
| tabindex       | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown                  | number          | —                                                        | 0                                                                          |
| popper-class   | custom class name for Dropdown's dropdown                                                                             | string          | —                                                        | —                                                                          |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                | Object          | refer to [popper.js](https://popper.js.org/docs/v2/) doc | `{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}` |
| teleported     | whether the dropdown popup is teleported to the body                                                                  | boolean         | —                                                        | true                                                                       |


## Dropdown-Item Attributes

| Name     | Description                                                 | Type                  | Accepted Values | Default |
| -------- | ----------------------------------------------------------- | --------------------- | --------------- | ------- |
| command  | a command to be dispatched to Dropdown's `command` callback | string/number/object  | —               | —       |
| disabled | whether the item is disabled                                | boolean               | —               | false   |
| divided  | whether a divider is displayed                              | boolean               | —               | false   |
| icon     | custom icon                                                 | `string \| Component` | —               | —       |
