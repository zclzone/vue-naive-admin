function addThemeColorCssVars() {
  const key = '__THEME_COLOR__'
  const defaultColor = '#316c72'
  const themeColor = window.localStorage.getItem(key) || defaultColor
  const cssVars = `--primary-color: ${themeColor}`
  document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()
