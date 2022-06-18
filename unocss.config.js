import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['f-c-c', 'flex justify-center items-center'],
    ['ellipsis', 'truncate'],
  ],
  rules: [
    ['color-primary', { color: 'var(--primaryColor)' }],
    ['bgc-primary', { backgroundColor: 'var(--primaryColor)' }],
  ],
  presets: [presetUno(), presetAttributify()],
})
