import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [['f-c-c', 'flex justify-center items-center']],
  presets: [presetUno(), presetAttributify()],
})
