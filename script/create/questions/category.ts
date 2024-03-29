import inquirer from 'inquirer'
import { categoryList } from './../constant'

const category = {
  type: 'list',
  name: 'category',
  message: 'Please select the type of components:',
  choices: categoryList,
}

export async function getCategory() {
  return (await inquirer.prompt([category])).category
}
