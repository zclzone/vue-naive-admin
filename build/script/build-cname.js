import { resolve } from 'path'
import chalk from 'chalk'
import { writeFileSync } from 'fs-extra'
import { OUTPUT_DIR } from '../constant'
import { getEnvConfig, getRootPath } from '../utils'

export function runBuildCNAME() {
  const { VITE_CNAME } = getEnvConfig()
  if (!VITE_CNAME) return
  try {
    writeFileSync(resolve(getRootPath(), `${OUTPUT_DIR}/CNAME`), VITE_CNAME)
  } catch (error) {
    console.log(chalk.red('CNAME file failed to package:\n' + error))
  }
}
