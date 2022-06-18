import { defineConfig, loadEnv } from 'vite'
import path from 'path'

import { wrapperEnv, createProxy } from './build/utils'
import { createVitePlugins } from './build/plugin'
import { OUTPUT_DIR } from './build/constant'

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const isBuild = command === 'build'

  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv

  return {
    root,
    base: VITE_PUBLIC_PATH || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
    },
  }
})
