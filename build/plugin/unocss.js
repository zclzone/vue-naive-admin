import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://github.com/antfu/unocss
export function unocss() {
  return Unocss({
    presets: [presetUno(), presetAttributify(), presetIcons()],
  })
}
