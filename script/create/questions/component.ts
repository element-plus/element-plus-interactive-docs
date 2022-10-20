import inquirer from 'inquirer'
import { getComponentChoices } from '../utils'

const componentName = {
  type: 'checkbox',
  name: 'components',
  message: 'Please select create components name:',
  choices: await getComponentChoices(),
  validate: (value: string) => {
    if (!value.length)
      return 'Component name is required!'

    return true
  },
}

export const getComponentsName = async () => {
  return (await inquirer.prompt([componentName])).components
}
