import html from 'vite-plugin-html'
import { version } from '../../../package.json'
import { GLOB_CONFIG_FILE_NAME } from '../../constant'

export function configHtmlPlugin(viteEnv, isBuild) {
  const { VITE_APP_TITLE, VITE_PUBLIC_PATH } = viteEnv
  const path = VITE_PUBLIC_PATH.endsWith('/') ? VITE_PUBLIC_PATH : `${VITE_PUBLIC_PATH}/`

  const getAppConfigSrc = () => {
    return `${path}${GLOB_CONFIG_FILE_NAME}?v=${version}-${new Date().getTime()}`
  }

  const htmlPlugin = html({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
      tags: isBuild
        ? [
            {
              tag: 'script',
              attrs: {
                src: getAppConfigSrc(),
              },
            },
          ]
        : [],
    },
  })
  return htmlPlugin
}
