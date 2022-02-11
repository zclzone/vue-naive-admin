# VUE NAIVE ADMIN

## 简介

Vue Naive Admin，一个基于 Vue3.0、Vite、Naive UI 的后台管理模板，相较于其他比较流行的后台管理模板，此项目相对简洁、轻量，没有集成 TypeScript，没有集成国际化，没有集成复杂的主题配置，学习成本非常低，对新手极其友好。不过麻雀虽小五脏俱全，权限、Mock、菜单、axios 封装、pinia、项目配置、样式配置、环境配置，以及一些经常用的基础组件封装等等这些该有的都有，经过参考多个 vue3 后台管理模板后以最简洁优雅的方式实现，非常适用于中小型项目或者个人项目，当然，以此模板进行二次封装改造用于大型项目也未尝不可。

## 为什么要开发这个模板

1. Vue3 和 Vite 已经趋于成熟，学习 vite 和 vue3 非常有必要，通过开发模板进行学习是一个很好的方式，事实也证明我确实从中获益良多
2. 目前主流的 Vue3+Vite 后台管理模板都相对复杂，甚至感觉有点花里胡哨（没有贬低的意思，大部分的架构设计都很优秀，只是觉得集成了太多不实用的东西）
3. 自己搭的模板开发起来才最顺手。本人很反感拿别人的模板直接上手开发，如果非要拿别人的模板开发也会尽量先吃透再用，不吃透就没有代码的掌控感和安全感

## 功能

- 🍒 集成 Naive UI，尤大推荐的 UI 组件库，很香，https://www.naiveui.com
- 🍑 集成登陆、注销及权限验证（暂只支持角色页面权限，后续考虑添加按钮权限）
- 🍐 集成多环境配置，dev、测试、预发布和生产
- 🍎 集成 eslint + prettier，代码约束和格式化统一
- 🍉 集成 Mock 接口服务，dev 环境和发布环境都支持，可动态配置是否启用 mock 服务，不启用时不会加载 mock 包，减少打包体积
- 🍇 集成 unocss，antfu 大神开源的原子化 css 解决方案，非常轻量，目前我是自己写 scss 样式搭配着 unocss 使用的，很香
- 🍍 集成 pinia，Vuex 的替代方案，轻量、简单、易用，很香
- 🍏 集成 axios，支持多 axios 实例，支持线上环境免重新打包修改 baseURL
- 🍌 二次封装全局 Dialog、Message、LoadingBar 组件
- 🍋 二次封装 localStorage 和 sessionStorage，支持设置过期时间

## 文档

[羽雀文档：Vue Naive Admin](https://www.yuque.com/qszone/vue-naive-admin)

## 构建步骤

```shell
# 推荐配置git autocrlf 为 false（本项目规范使用lf换行符，此配置是为防止git自动将源文件转换为crlf）
# 不清楚为什么要这样做的请参考这篇文章：https://www.freesion.com/article/4532642129
git config --global core.autocrlf false

# 克隆项目
git clone https://github.com/zclzone/vue-naive-admin.git

# 进入项目目录
cd vue-naive-admin

# 安装依赖
pnpm i

# 启动
npm run dev
```

## 发布

```shell
# 构建测试环境
npm run build:test

# 构建预发布环境
npm run build:staging

# 构建生产环境
npm run build
```

## 其他指令

```shell
# eslint代码格式检查
npm run lint

# 代码检查并修复
npm run lint:fix

# 预览发布包效果（需先执行构建指令）
npm run preview
```
