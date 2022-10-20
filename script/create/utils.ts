/* eslint-disable no-console */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'fs'
import { lowerFirst, upperFirst } from '../utils'
import type { CategoryType, ComponentType } from './constant'
import { getCategory } from './questions/category'
import { categoryList, componentCollection, createStoryComponent, resolver } from './constant'

export const getComponentChoices = async () => {
  const category: CategoryType = await getCategory()
  // 读取已有的组件
  let files: string[] = []
  const choices = (componentCollection[category]?.components as [ComponentType])
  try {
    const path = resolver(`src/components/${category}/`)
    if (existsSync(path))
      files = readdirSync(path)
  }
  catch (e) {
    console.error(e.toString())
    process.exit(1)
  }
  if (files) {
    const existMap = {}
    const names = files?.map(f => upperFirst(f?.split('.')[0]))
    // 取交集，仅列出未创建的组件
    for (const k of names)
      existMap[k] = true
    return choices.filter(c => !existMap[c])
  }
}

export const generateStoryDoc = (component: ComponentType) => {
  const category = categoryList.find(type => (componentCollection[type]?.components as [ComponentType])?.includes(component))!
  if (!category)
    return console.log(`${component} not a legal component of EP, please check and re-enter!`)

  // 确定生成路径
  const fileName = `${lowerFirst(component)}.story.vue`
  const storyDocDir = resolver(`src/components/${category}/`)
  const storyDocFile = resolver(`src/components/${category}/${fileName}`)

  // 读取模板
  const template = createStoryComponent(category, component)
  // 生成文件
  try {
    // 目录不存在则新建
    if (!existsSync(storyDocDir))
      mkdirSync(storyDocDir)

    // 组件文档存在则退出
    if (existsSync(storyDocFile)) {
      console.log(`${fileName} Already existed!`)
      return
    }
    writeFileSync(storyDocFile, template, { encoding: 'utf-8' })

    console.log(`${fileName} Creation success!`)
    console.log(`path: ${storyDocFile}`)
  }
  catch (e) {
    console.error(e.toString())
    process.exit(1)
  }
}
