
### Form Attributes

| Name                        | Description                                                                                                                    | Type                              | Default   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | --------- |
| `model`                     | Data of form component.                                                                                                        | `Record<string, any>`             | —         |
| `rules`                     | Validation rules of form.                                                                                                      | `FormRules`                       | —         |
| `inline`                    | Whether the form is inline.                                                                                                    | `boolean`                         | `false`   |
| `label-position`            | Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.                                       | `'left' \| 'right' \| 'top'`      | `'right'` |
| `label-width`               | Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.                   | `string \| number`                | —         |
| `label-suffix`              | Suffix of the label.                                                                                                           | `string`                          | —         |
| `hide-required-asterisk`    | Whether to hide required fields should have a red asterisk (star) beside their labels.                                         | `boolean`                         | `false`   |
| `require-asterisk-position` | Position of asterisk.                                                                                                          | `'left' \| 'right'`               | `'left'`  |
| `show-message`              | Whether to show the error message.                                                                                             | `boolean`                         | `true`    |
| `inline-message`            | Whether to display the error message inline with the form item.                                                                | `boolean`                         | `false`   |
| `status-icon`               | Whether to display an icon indicating the validation result.                                                                   | `boolean`                         | `false`   |
| `validate-on-rule-change`   | Whether to trigger validation when the `rules` prop is changed.                                                                | `boolean`                         | `true`    |
| `size`                      | Control the size of components in this form.                                                                                   | `'large' \| 'default' \| 'small'` | —         |
| `disabled`                  | Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component. | `boolean`                         | `false`   |
| `scroll-to-error`           | When validation fails, scroll to the first error form entry.                                                                   | `boolean`                         | `false`   |

### Form Methods

| Method          | Description                                                        | Type                                                                                                                             |
| --------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `validate`      | Validate the whole form. Receives a callback or returns `Promise`. | `(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>`                                  |
| `validateField` | Validate specified fields.                                         | `(props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>` |
| `resetFields`   | Reset specified fields and remove validation result.               | `(props?: Arrayable<FormItemProp>) => void`                                                                                      |
| `scrollToField` | Scroll to the specified fields.                                    | `(prop: FormItemProp) => void`                                                                                                   |
| `clearValidate` | Clear validation message for specified fields.                     | `(props?: Arrayable<FormItemProp>) => void`                                                                                      |

### Form Events

| Name       | Description                             | Parameters                                                        |
| ---------- | --------------------------------------- | ----------------------------------------------------------------- |
| `validate` | triggers after a form item is validated | `(prop: FormItemProp, isValid: boolean, message: string) => void` |

### Form Slots

| Name | Description               | Subtags  |
| ---- | ------------------------- | -------- |
| -    | customize default content | FormItem |

## Form Item API

### Form Item Attributes

| Name             | Description                                                                                                                                                   | Type                              | Default     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `prop`           | A key of `model`. It could be an array of property paths (e.g `['a', 'b', 0]`). In the use of `validate` and `resetFields` method, the attribute is required. | `string \| string[]`              | —           |
| `label`          | Label text.                                                                                                                                                   | `string`                          | —           |
| `label-width`    | Width of label, e.g. `'50px'`. `'auto'` is supported.                                                                                                         | `string \| number`                | —           |
| `required`       | Whether the field is required or not, will be determined by validation rules if omitted.                                                                      | `boolean`                         | `false`     |
| `rules`          | Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).    | `FormItemRule \| FormItemRule[]`  | —           |
| `error`          | Field error message, set its value and the field will validate error and show this message immediately.                                                       | `string`                          | —           |
| `show-message`   | Whether to show the error message.                                                                                                                            | `boolean`                         | `true`      |
| `inline-message` | Inline style validate message.                                                                                                                                | `boolean`                         | `false`     |
| `size`           | Control the size of components in this form-item.                                                                                                             | `'large' \| 'default' \| 'small'` | `'default'` |

#### FormItemRule

| Name      | Description                     | Type                 | Default |
| --------- | ------------------------------- | -------------------- | ------- |
| `trigger` | How the validator is triggered. | `'blur' \| 'change'` | —       |

### Form Item Slots

| Name    | Description                                   | Slot Scope  |
| ------- | --------------------------------------------- | ----------- |
| —       | Content of Form Item.                         | —           |
| `label` | Custom content to display on label.           | `{ label }` |
| `error` | Custom content to display validation message. | `{ error }` |

### Form Item Methods

| Method          | Description                                       | Type         |
| --------------- | ------------------------------------------------- | ------------ |
| `resetField`    | Reset current field and remove validation result. | `() => void` |
| `clearValidate` | Remove validation status of the field.            | `() => void` |
