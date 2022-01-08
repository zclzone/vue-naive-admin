import chalk from 'chalk'
import { runBuildConfig } from './build-config'

export const runBuild = async () => {
  try {
    runBuildConfig()
    console.log(`✨ ${chalk.cyan('build successfully!')}`)
  } catch (error) {
    console.log(chalk.red('vite build error:\n' + error))
    process.exit(1)
  }
}

runBuild()
