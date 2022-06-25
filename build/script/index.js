import chalk from 'chalk'
import { runBuildCNAME } from './build-cname'

export const runBuild = async () => {
  try {
    runBuildCNAME()
    console.log(`✨ ${chalk.cyan('build successfully!')}`)
  } catch (error) {
    console.log(chalk.red('vite build error:\n' + error))
    process.exit(1)
  }
}

runBuild()
