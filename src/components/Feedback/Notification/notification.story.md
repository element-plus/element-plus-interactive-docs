## Options

| Attribute                | Description                                                                                                        | Type                  | Accepted Values                             | Default       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------------------------------- | ------------- |
| title                    | title                                                                                                              | string                | —                                           | —             |
| message                  | description text                                                                                                   | string/Vue.VNode      | —                                           | —             |
| dangerouslyUseHTMLString | whether `message` is treated as HTML string                                                                        | boolean               | —                                           | false         |
| type                     | notification type                                                                                                  | string                | success/warning/info/error                  | —             |
| icon                     | custom icon component. It will be overridden by `type`                                                             | `string \| Component` | —                                           | —             |
| customClass              | custom class name for Notification                                                                                 | string                | —                                           | —             |
| duration                 | duration before close. It will not automatically close if set 0                                                    | number                | —                                           | 4500          |
| position                 | custom position                                                                                                    | string                | top-right/top-left/bottom-right/bottom-left | top-right     |
| showClose                | whether to show a close button                                                                                     | boolean               | —                                           | true          |
| onClose                  | callback function when closed                                                                                      | function              | —                                           | —             |
| onClick                  | callback function when notification clicked                                                                        | function              | —                                           | —             |
| offset                   | offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset | number                | —                                           | 0             |
| appendTo                 | set the root element for the notification                                                                          | string / HTMLElement  | -                                           | document.body |
| zIndex                   | initial zIndex                                                                                                     | number                | -                                           | 0             |

## Methods

`Notification` and `this.$notify` returns the current Notification instance. To manually close the instance, you can call `close` on it.
| Method | Description |
| ---- | ---- |
| close | close the Notification |