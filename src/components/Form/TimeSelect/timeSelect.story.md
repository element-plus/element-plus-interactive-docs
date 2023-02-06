## TimeSelect Attributes


| Name                  | Description                                              | Type                  | Accepted Values                                                                        | Default     |
| --------------------- | -------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | binding value                                            | string                | —                                                                                      | —           |
| disabled              | whether TimeSelect is disabled                           | boolean               | —                                                                                      | false       |
| editable              | whether the input is editable                            | boolean               | —                                                                                      | true        |
| clearable             | whether to show clear button                             | boolean               | —                                                                                      | true        |
| size                  | size of Input                                            | string                | large / default / small                                                                | default     |
| placeholder           | placeholder in non-range mode                            | string                | —                                                                                      | —           |
| name                  | same as `name` in native input                           | string                | —                                                                                      | —           |
| effect                | Tooltip theme, built-in theme: `dark` / `light`          | string                | string                                                                                 | light       |
| prefix-icon           | Custom prefix icon component                             | `string \| Component` | —                                                                                      | Clock       |
| clear-icon            | Custom clear icon component                              | `string \| Component` | —                                                                                      | CircleClose |
| start                 | start time                                               | string                | —                                                                                      | 09:00       |
| end                   | end time                                                 | string                | —                                                                                      | 18:00       |
| step                  | time step                                                | string                | —                                                                                      | 00:30       |
| min-time              | minimum time, any time before this time will be disabled | string                | —                                                                                      | 00:00       |
| max-time              | maximum time, any time after this time will be disabled  | string                | —                                                                                      | —           |
| format                | set format of time                                       | string                | see [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats) | HH:mm       |
