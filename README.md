# 学习 babel 的配置功能

## 预设

### [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)

它能让你使用最新的 JavaScript 语法而无需操心对目标环境所支持的语法设置相应的语法转换插件（以及可选的 polyfills）。这样能让你的工作更轻松，也能让打出来的 JavaScript 包更小！

### [@babel/preset-react](https://www.babeljs.cn/docs/babel-preset-react)

解析 jsx 语法成 createElement

### [@babel/preset-typescript](https://www.babeljs.cn/docs/babel-preset-typescript)

解析 typescript

## 集成

### [@babel/cli](https://www.babeljs.cn/docs/babel-cli)

Babel 自带了一个内置的 CLI 命令行工具，可通过命令行编译文件。

### [@babel/polyfill](https://www.babeljs.cn/docs/babel-polyfill)

针对浏览器不识别的语法 做兼容处理 是需要安装在生产环境的

Babel 7.4.0 之后已经废弃, 建议使用 core-js

### [@babel/plugin-transform-runtime](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)

- 当你使用 generators/async 函数时，自动引入 @babel/runtime/regenerator 。
- 如有必要，可以使用 core-js 作为帮助函数，如果需要被 polyfill
- 移除内联的 Babel helper，并使用模块 @babel/runtime/helpers 代替。
- 可以将 helper 和 polyfill 都改为从一个统一的地方引入，并且引入的对象和全局变量是完全隔离的

### [@babel/standalone](https://www.babeljs.cn/docs/babel-standalone)

@babel/standalone 提供了 babel 的独立构建，用于浏览器和其他非 Node.js 环境。

## 工具

### [@babel/parser](https://www.babeljs.cn/docs/babel-parser)

将 js 转成 ast

### [@babel/core](https://www.babeljs.cn/docs/babel-core)

包括了整个 babel 工作流，也就是说在@babel/core 里面我们会使用到@babel/parser、transformer、以及@babel/generator

### [@babel/runtime](https://www.babeljs.cn/docs/babel-runtime)

在低版本浏览器适配高版本语法的兼容方法

### [@babel/generator](https://www.babeljs.cn/docs/babel-generator)

ast 转成 代码

### [@babel/code-frame](https://www.babeljs.cn/docs/babel-code-frame)

用于生成错误信息并且打印出错误原因和错误行数。（其实就是个 console 工具类）

### [@babel/template](https://www.babeljs.cn/docs/babel-template)

主要用途是为 parser 提供模板引擎，更加快速的转化成 AST

### [@babel/traverse](https://www.babeljs.cn/docs/babel-traverse)

用途是来便利 AST 树，也就是在@babel/generator 过程中生效。
主要是针对 ast 树做一些字段的格式化或修改

### [@babel/types](https://www.babeljs.cn/docs/babel-types)

用途是在创建 AST 的过程中判断各种语法的类型
