import vue from '@vitejs/plugin-vue'

/**
 * * 扩展setup插件，支持在script标签中使用name属性
 * usage: <script setup name="MyComp"></script>
 */
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus'

/**
 * * unocss插件，原子css
 * https://github.com/antfu/unocss
 */
import Unocss from 'unocss/vite'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'

import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import unplugin from './unplugin'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [vue(), vueSetupExtend(), ...unplugin, configHtmlPlugin(viteEnv, isBuild), Unocss()]

  if (viteEnv?.VITE_APP_USE_MOCK) {
    plugins.push(configMockPlugin(isBuild))
  }

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return plugins
}
