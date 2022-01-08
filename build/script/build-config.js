import { GLOB_CONFIG_FILE_NAME, GLOB_CONFIG_NAME, OUTPUT_DIR } from '../constant'
import fs, { writeFileSync } from 'fs-extra'
import chalk from 'chalk'
import { getEnvConfig, getRootPath } from '../utils'

function createConfig(option) {
  const { config, configName, configFileName } = option
  try {
    const windowConf = `window.${configName}`
    const configStr = `${windowConf}=${JSON.stringify(config)};
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '')
    fs.mkdirp(getRootPath(OUTPUT_DIR))
    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr)
  } catch (error) {
    console.log(chalk.red('configuration file configuration file failed to package:\n' + error))
  }
}

export function runBuildConfig() {
  const config = getEnvConfig()
  const configName = GLOB_CONFIG_NAME
  const configFileName = GLOB_CONFIG_FILE_NAME
  createConfig({ config, configName, configFileName })
}
