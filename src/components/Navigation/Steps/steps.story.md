## Steps Attributes

| Name           | Description                                                                   | Type            | Accepted Values                           | Default    |
| -------------- | ----------------------------------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| space          | the spacing of each step, will be responsive if omitted. Supports percentage. | number / string | —                                         | —          |
| direction      | display direction                                                             | string          | vertical/horizontal                       | horizontal |
| active         | current activation step                                                       | number          | —                                         | 0          |
| process-status | status of current step                                                        | string          | wait / process / finish / error / success | process    |
| finish-status  | status of end step                                                            | string          | wait / process / finish / error / success | finish     |
| align-center   | center title and description                                                  | boolean         | —                                         | false      |
| simple         | whether to apply simple theme                                                 | boolean         | -                                         | false      |

## Steps Slots

| Name | Description               | Subtags |
| ---- | ------------------------- | ------- |
| -    | customize default content | Step    |

## Step Attributes

| Name        | Description                                                              | Type                  | Accepted Values                           | Default |
| ----------- | ------------------------------------------------------------------------ | --------------------- | ----------------------------------------- | ------- |
| title       | step title                                                               | string                | —                                         | —       |
| description | step description                                                         | string                | —                                         | —       |
| icon        | step custom icon. Icons can be passed via named slot as well             | `string \| Component` | —                                         | —       |
| status      | current status. It will be automatically set by Steps if not configured. | string                | wait / process / finish / error / success | —       |

## Step Slots

| Name        | Description      |
| ----------- | ---------------- |
| icon        | custom icon      |
| title       | step title       |
| description | step description |
