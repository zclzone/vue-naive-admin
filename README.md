<p align="center">
  <a href="https://github.com/zclzone/vue-naive-admin">
    <img alt="Vue Naive Admin Logo" width="200" src="https://assets.qszone.com/images/logo_qs.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/zclzone/vue-naive-admin/actions"><img allt="checks" src="https://badgen.net/github/checks/zclzone/vue-naive-admin"/></a>
  <a href="https://github.com/zclzone/vue-naive-admin"><img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin"/></a>
  <a href="https://github.com/zclzone/vue-naive-admin"><img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin"/></a>
  <a href="./LICENSE"><img allt="MIT License" src="https://badgen.net/github/license/zclzone/vue-naive-admin"/></a>
</p>

<p align='center'>
  <b>English</b> | 
  <a href="https://github.com/zclzone/vue-naive-admin/blob/main/README.zh-CN.md">简体中文</a>
</p>

### Introduction

[Vue Naive Admin](https://github.com/zclzone/vue-naive-admin) is a **completely open source free and commercially allowed ** admin template，Based on the latest technology stack of front-end such as `Vue3、Vite3、Pinia、Unocss and Naive UI`. Compared with other more popular backend management templates, this project is more concise, lightweight, fresh style, very low learning costs, ideal for small and medium-sized projects or personal projects.

### Features

- 🍒 Integrated [Naive UI](https://www.naiveui.com)，recommended by Evan You.
- 🍑 Integrated login, logout and permission verification.
- 🍐 Integrated multi-environment configuration, dev, test, production and github pages environments.
- 🍎 Integrated `eslint + prettier`.
- 🍌 Integrated `husky + commitlint`.
- 🍉 Integrated `Mock`.
- 🍍 Integrated `pinia`，lightweight, simple and easy to use alternative to vuex.
- 📦 Integrated `unplugin` auto import.
- 🤹 Integrated `iconify` icon，support custom svg icons.
- 🍇 Integrated `unocss`.

### Preview

[https://template.qszone.com](https://template.qszone.com)

[https://zclzone.github.io/vue-naive-admin](https://zclzone.github.io/vue-naive-admin)

### Docs

[Vue Naive Admin Docs](https://zclzone.github.io/vue-naive-admin-docs)


### Getting Started

```shell
# Recommended setup git autocrlf 为 false
git config --global core.autocrlf false

# Clone Project
git clone https://github.com/zclzone/vue-naive-admin.git

cd vue-naive-admin

# Install dependencies(Recommended use pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # Installed and can be ignored
pnpm i # or npm i

# Start
pnpm dev
```

### Build and Release

```shell
# Test Environment
pnpm build:test

# Github Environment
pnpm build:github

# Prod Environment
pnpm build
```

### Other

```shell
# eslint check
pnpm lint

# eslint check and fix
pnpm lint:fix

# Preview（Need to build first）
pnpm preview

# Commit（husky+commitlint）
pnpm cz
```

### Directory description

```
Vue Naive Admin
|-- .github                             // github相关，如推送github仓库后自动部署gh pages
|-- .husky                              // git commit钩子
|-- .vscode                             // vscode编辑器相关
|   |-- extensions.json                 // 插件推荐
|   |-- settings.json                   // 项目级别的vscode配置，优先级大于全局vscode配置
|-- build                               // 构建相关配置
|   |-- constant.js                     // 构建相关的常量
|   |-- utils.js                        // 构建相关的工具方法
|   |-- config                          
|   |   |-- define.js                   // 注入全局常量，启动或打包后将添加到window中
|   |   |-- proxy.js                    // 代理配置
|   |-- plugin                          
|   |   |-- html.js                     // vite-plugin-html插件，用于注入变量或者html标签
|   |   |-- mock.js                     // vite-plugin-mock插件，处理mock
|   |   |-- unplugin.js                 // unplugin相关插件，包含DefineOptions和自动导入
|   |-- script                          // 打包完成后执行的一些node脚本（不重要）
|       |-- build-cname.js              // 自动生成cname
|-- mock                                // mock
|   |-- utils.js                        // mock请求需要用到的工具方法
|   |-- api                             // mock接口
|-- public                              // 公共资源，文件夹下的文件会在打包后会直接加到dist根目录下
|-- settings                            // 项目配置
|   |-- proxy-config.js                 // 代理配置文件
|   |-- theme.json                      // 主题配置项，主题色等
|-- src
|   |-- api                             // 公共api
|   |-- assets                          // 静态资源
|   |   |-- images                      // 图片
|   |   |-- svg                         // svg图标
|   |-- components                      // 全局组件
|   |   |-- common                      // 公共组件
|   |   |-- icon                        // icon相关组件
|   |   |-- page                        // 页面组件
|   |   |-- query-bar                   // 查询选项
|   |   |-- table                       // 封装的表格组件
|   |-- composables                     // 封装的组合式函数
|   |-- layout                          // 布局相关组件
|   |   |-- components
|   |       |-- AppMain.vue             // 主体内容
|   |       |-- header                  // 头部
|   |       |-- sidebar                 // 侧边菜单栏
|   |       |-- tags                    // 多页签栏
|   |-- router                          // 路由
|   |   |-- guard                       // 路由守卫
|   |   |-- routes                      // 路由列表
|   |-- store                           // 状态管理（pinia）
|   |   |-- modules                     // 模块
|   |       |-- app                     // 管理页面重新加载、折叠菜单栏和keepAlive等
|   |       |-- permission              // 权限相关，管理权限菜单
|   |       |-- tags                    // 管理多页签
|   |       |-- user                    // 用户模块，管理用户信息、登录登出
|   |-- styles                          // 样式
|   |-- utils                           // 封装的工具方法
|   |   |-- auth                        // 权限相关，如token、跳转登录页等
|   |   |-- common                      // 通用
|   |   |-- http                        // 封装axios
|   |   |-- storage                     // 封装localStorage和sessionStorage
|   |-- views                           // 页面
|   |   |-- demo                        // 示例
|   |   |-- error-page                  // 错误页
|   |   |-- login                       // 登录页
|   |   |-- workbench                   // 首页  
|   |-- App.vue
|   |-- main.js
|-- .cz-config.js                       // git提交配置
|-- .editorconfig                       // 编辑器配置
|-- .env                                // 环境文件，所有环境都会载入
|-- .env.development                    // 开发环境文件
|-- .env.production                     // 生产环境文件
|-- .env.test                           // 测试环境文件
|-- .eslintignore                       // eslint忽略
|-- .eslintrc.js                        // eslint配置
|-- .gitignore                          // git忽略
|-- .prettierignore                     // prettier格式化忽略
|-- commitlint.config.js                // commitlint规范配置
|-- index.html                          
|-- jsconfig.json                       // js配置
|-- LICENSE                             // 协议
|-- package.json                        // 依赖描述文件
|-- pnpm-lock.yaml                      // 依赖锁定文件
|-- prettier.config.js                  // prettier格式化配置
|-- README.md                           // 项目描述文档（英文）
|-- README.zh-CN.md                     // 项目描述文档（中文）
|-- unocss.config.js                    // unocss配置
|-- vite.config.js                      // vite配置
```

### TS version: Qs Admin

#### source code

- gitub: [https://github.com/zclzone/qs-admin](https://github.com/zclzone/qs-admin)
- gitee: [https://gitee.com/zclzone/qs-admin-ts](https://gitee.com/zclzone/qs-admin-ts)

#### preview

- [https://admin.qszone.com](https://admin.qszone.com)
- [https://zclzone.github.io/qs-admin](https://zclzone.github.io/qs-admin)

### Communication group & About the author

<a href="https://blog.qszone.com/about/">
  <img src="https://assets.qszone.com/images/about.png" style="max-width: 400px" />
</a>





