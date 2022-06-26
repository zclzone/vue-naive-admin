import { createHtmlPlugin } from 'vite-plugin-html'

export function configHtmlPlugin(viteEnv, isBuild) {
  const { VITE_APP_TITLE } = viteEnv

  const htmlPlugin = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
    },
  })
  return htmlPlugin
}
