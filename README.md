1.git clone https://github.com/yufangangzi/muke.git


2.npm install

3.npm run dev  开发环境

4.npm run build  生产环境打包代码

5.npm run lint   使用eslint 检查代码

6.npm run lint-fix  使用eslint 检查代码并且按照eslint  标准格式化代码


.editorconfig  文件中是规范不同编辑器中对代码的规范


该项目使用的是webpack 3   和webpack 4 的区别

1. config 中增加一个 mode: 他接收两个参数 development 或者 production
2. plugin 中 CommonsChunkPlugin 被废弃了   使用新的来替代
   optimization : {
     spliteChunk : {
       chunks:'all'
     },
     runtimeChunk:true
   }
   enter 中的vendor 不用写了

3. NoEmitOnErrorsPlugin 取消掉了
4. 需要安装 webpack-cli

在 vscode 中配置

"eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        {
        "language": "vue",
        "autoFix": true
        },
        "html",
        "vue"
    ],


服务端渲染 开发环境
创建 serer/server.js
npm i koa -S   安装完成后  在server.js 中

const Koa = require('koa')
const app = new Koa()
const isDev = process.env.NODE_ENV === 'development'

这里申明 idDev 是因为服务端渲染区分 开发环境和生产环境


下面是最简单的一个koa中间件，用来记录所有的请求及出现的错误，并且返回一个错误信息。
app.use(async (ctx, next) => {
 try {
   console.log(`request with path ${ctx.path}`)
   await next()
 } catch (err) {
   console.log(err)
   ctx.status = 500
   if (isDev) {
     ctx.body = err.message
   } else {
     ctx.body = 'please try again later'
   }
 }
})

服务端渲染 要安装 koa-router   npm i koa-router -S
这是koa提供的一个路由的工具。然后在server文件夹下面新建一个routers文件夹，紧接着在里面新建两个文件，一个是dev-ssr.js，另一个是ssr.js。前者是处理开发时服务端渲染的情况，后者是处理正式环境下的情况。

在dev-ssr.js文件中，首先要引入koa-router：
const Router = require('koa-router')

在这里，还需要使用到两个工具，需要安装下：
npm i axios -S
npm i memory-fs -D
memory-fs 的作用是来读写内存的

这两个工具引入进来：
const axios = require('axios')
const MemoryFS = require('memory-fs')


紧接着，再来引入两个工具：
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')


因为要在node开发环境中打包代码，并且需要服务端渲染。
接下来，要引入serverConfig，就是写的那个配置文件webpack.config.server.js：
const serverConfig = require('../../build/webpack.config.server')


然后，如何能在node开发环境中让webpack跑起来呢？
答案是通过serverCompiler:
const serverCompiler = webpack(serverConfig)
然后去new一个mfs实例：
const mfs = new MemoryFS()
serverCompiler.outputFileSystem = mfs
这样就指定了webpack的输出目录在MemoryFS里面。


有了这些配置之后，再去声明一个bundle：let bundle  用来记录webpack每次打包生成的新的文件。
serverCompiler.watch({}, (err, stats) => {
 if (err) throw err
 stats = stats.toJson()
 stats.erros.forEach(err => console.log(err))
 stats.hasWarnings.forEach(warn => console.warn(err))

 const bundlePath = path.join(
   serverConfig.output.path,
   'vue-ssr-server-bundle.json'
 )
 bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
})

这里使用watch()的好处是：跟使用webpack-dev-server一样，在client目录下每次修改一个文件，它都会重新执行一次打包，然后就可以拿到新的文件了。

serverCompiler.watch()的第一个参数是空对象，第二个参数是一个回调。如果有err直接抛出。

然后stats这块我感觉有点晦涩难懂，，然后有空再去看webpack的文档。
接下来就可以读取生成的bundle文件了，拼接读取文件的路径，设置文件名字，并且制定编码为utf-8，最后通过JSON.parse()将字符串转成JSON。


安装 koa-send  npm i koa-send -S  并且根目录下添加 favicon.ico  添加中间件
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', path.join(__dirname, '../'))
  } else {
    await next()
  }
})


服务端 改代码 每次需要重新启动  可以在根目录下添加 modemon.json  先安装 nodemon 的包  npm i nodemon -D
{
  "restartable": "rs",   // 重启的话 命令行输入 rs
  "ignore": [
    ".git",
    "node_modules/**/node_modules",
    ".eslintrc",
    "client",
    "build/webpack.config.client.js",
    "public",
    "server-build"
  ], // 忽略的
  "verbose": true,
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js json ejs"
}

pageage.json 中  dev:server:'nodemon server/serer.js'

每次需要启动两个服务 npm run dev:client  和  npm run dev:server
可以安装一个工具来帮忙  npm i concurrently -D

package.json 中命令行修改 "dev": "concurrently \"npm run dev:client\" \"npm run dev:server\""   里面的参数 接受的是字符串  需要用“” 转义


修改页面中的meta 标签

安装 vue-meta 插件 npm i vue-meta -S

在vue  文件中 添加 metaInfo:{
  title:'我是 title '
}

服务端渲染 需要在server-enter 中添加 context.meta = app.$meta()

server-render.js 中 添加 const {title} = context.meta.inject()  获取到title 然后传给模板
