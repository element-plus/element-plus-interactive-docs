#!/usr/bin/env node
import { Command } from 'commander'
import { create } from './commands/create.js'
const program = new Command()

program
  .command('create')
  .arguments('[components...]')
  .description('创建一个组件文档')
  .action(create)
program.parse()
