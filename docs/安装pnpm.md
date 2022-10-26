## 安装pnpm

### 使用Corepack安装（推荐）

从 v16.13 开始，Node.js 发布了 Corepack 来管理包管理器。 这是一项实验性功能，需要通过运行如下脚本来启用它：

```
npx corepack enable // 可能需要管理员权限
```

这将自动在您的系统上安装 pnpm。 但是，它可能不是最新版本的 pnpm。 若要升级，请检查[最新的 pnpm 版本](https://github.com/pnpm/pnpm/releases/latest)  并运行，如 7.14.0
```
corepack prepare pnpm@7.14.0 --activate
```

如果是 Node.js v16.17 或者更新的版本，可以直接安装最新版本的 pnpm
```
corepack prepare pnpm@latest --activate
```

### 使用npm安装

```
npm i -g pnpm
```

更新，卸了重新装

```
npm uninstall -g pnpm
npm i -g pnpm
```