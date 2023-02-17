## Attributes

| Name                | Description                                                                         | Type                  | Accepted Values                                    | Default         |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------- | --------------- |
| title               | Title                                                                               | String                | —                                                  | —               |
| confirm-button-text | Confirm button text                                                                 | String                | —                                                  | —               |
| cancel-button-text  | Cancel button text                                                                  | String                | —                                                  | —               |
| confirm-button-type | Confirm button type                                                                 | String                | primary / success / warning / danger / info / text | primary         |
| cancel-button-type  | Cancel button type                                                                  | String                | primary / success / warning / danger / info / text | text            |
| icon                | Icon Component                                                                      | `string \| Component` | —                                                  | QuestionFilled  |
| icon-color          | Icon color                                                                          | String                | —                                                  | #f90            |
| hide-icon           | is hide Icon                                                                        | Boolean               | —                                                  | false           |
| teleported          | whether popconfirm is teleported to the body                                        | boolean               | true / false                                       | true            |
| persistent          | when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed | boolean               | —                                                  | false           |
| width               | popconfirm width                                                                    | string/number         | -                                                  | Min width 150px |

## Slots

| Name      | Description                           |
| --------- | ------------------------------------- |
| reference | HTML element that triggers Popconfirm |

## Events

| Name    | Description                        | Parameters |
| ------- | ---------------------------------- | ---------- |
| confirm | triggers when click confirm button | —          |
| cancel  | triggers when click cancel button  | —          |
