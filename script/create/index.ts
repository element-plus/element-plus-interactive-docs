import { Command } from 'commander'
import { create } from './create'
const program = new Command()

program
  .command('create')
  .arguments('[components...]')
  .description('创建一个组件文档')
  .action(create)
program.parse()
