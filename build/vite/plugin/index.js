import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import Icons from 'unplugin-icons/vite'

import { unocss } from './unocss'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    vue(),
    VueSetupExtend(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    Icons({ compiler: 'vue3', autoInstall: true }),
    unocss(),
    configHtmlPlugin(viteEnv, isBuild),
  ]

  viteEnv?.VITE_APP_USE_MOCK && plugins.push(configMockPlugin(isBuild))

  return plugins
}
