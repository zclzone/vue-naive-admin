import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import { unocss } from './unocss'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    VueSetupExtend(),
    unocss(),
    configHtmlPlugin(viteEnv, isBuild),
  ]

  viteEnv?.VITE_APP_USE_MOCK && plugins.push(configMockPlugin(isBuild))

  return plugins
}
