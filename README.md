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

