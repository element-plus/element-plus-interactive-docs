import { existsSync, mkdirSync, writeFileSync } from 'fs'
import inquirer from 'inquirer'
import { categoryList, componentCollection, createStoryComponent, resolver } from '../common/constant.js'
const categoryQ = {
  type: 'list',
  name: 'category',
  message: '（必填）请选择创建组件的类型：',
  choices: categoryList,
}
const createComponentsQ = category => ({
  type: 'checkbox',
  name: 'components',
  message: '（必填）请选择创建组件name：',
  choices: componentCollection[category]?.components,
  validate: (value) => {
    if (!value.length)
      return '组件 name 是必填项！'

    return true
  },
})
const lowerFirst = (name) => {
  if (!name)
    return ''
  if (name.length === 1)
    return name.toLowerCase()
  return name[0].toLowerCase() + name.substring(1)
}

const generateStoryDoc = (component, category) => {
  if (!category)
    category = categoryList.find(type => componentCollection[type]?.components?.includes(component))
  if (!category)
    return console.log(`${component}没有对应的类型！`)

  // 确定生成路径
  const fileName = `${lowerFirst(component)}.story.vue`
  const storyDocDir = resolver(`src/components/${category}/`)
  const storyDocFile = resolver(`src/components/${category}/${fileName}`)

  // 读取模板
  const template = createStoryComponent(component)
  // 生成文件
  try {
    // 目录不存在则新建
    if (!existsSync(storyDocDir))
      mkdirSync(storyDocDir)

    // 组件文档存在则退出
    if (existsSync(storyDocFile)) {
      console.log(`${fileName}已存在！`)
      return
    }
    writeFileSync(storyDocFile, template, { encoding: 'utf-8' })

    console.log(`${fileName}创建成功！`)
    console.log(`path:${storyDocFile}`)
  }
  catch (e) {
    console.error(e.toString())
    process.exit(1)
  }
}
export async function create(components) {
  // 参数没有带上组件名
  if (!components.length) {
    const { category } = await inquirer.prompt([categoryQ])
    const { components } = await inquirer.prompt([createComponentsQ(category)])
    components.forEach(c => generateStoryDoc(c, category))
  }

  // 组件名合法性检验

  components.forEach(c => generateStoryDoc(c))
}
