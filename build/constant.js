export const OUTPUT_DIR = 'dist'

export const PROXY_CONFIG = {
  /**
   * @desc    替换匹配值
   * @请求路径  http://localhost:3100/api/user
   * @转发路径  http://localhost:8080/user
   */
  '/api': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp('^/api'), ''),
  },
  /**
   * @desc    不替换匹配值
   * @请求路径  http://localhost:3100/api/v2/user
   * @转发路径  http://localhost:8080/api/v2/user
   */
  '/api/v2': {
    target: 'http://localhost:8080',
    changeOrigin: true,
  },
  /**
   * @desc    替换部分匹配值
   * @请求路径  http://localhost:3100/api/v3/user
   * @转发路径  http://localhost:8080/user
   */
  '/api/v3': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp('^/api'), ''),
  },
}
