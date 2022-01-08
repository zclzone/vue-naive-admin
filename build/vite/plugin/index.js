import vue from '@vitejs/plugin-vue'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import { unocss } from './unocss'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [vue(), unocss(), configHtmlPlugin(viteEnv, isBuild)]

  viteEnv?.VITE_APP_USE_MOCK && plugins.push(configMockPlugin(isBuild))

  return plugins
}
