
下载 eslint插件 并且修改下面的配置
"editor.tabSize": 2,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",{
            "language": "vue",
            "autoFix": true
          },"html",
          "vue"
    ],
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    },
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "vetur.format.defaultFormatter.js": "vscode-typescript"



项目中配置  eslint 

创建 .eslintrc 的文件  
{
  "extends": "standard",
  "plugins": [
    "html"
  ],
  "parser":"babel-eslint"
}

需要安装的包  npm install eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
 "lint": "eslint --ext .js --ext .jsx --ext .vue client/",    可以检测
 "lint-fix":"eslint --fix --ext .js --ext .jsx --ext .vue client/"    可以检测修复


npm i eslint-loader babel-eslint -D

{
        test:/\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude:/node_modules/,
        enforce:'pre'  //去预处理
      },

添加 .editorconfig  文件  在不同的编辑器使用相同的规则

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2         //缩进
indent_style = space   //制表符
insert_final_newline = true  //在文件最后面添加空行   在vscode 中添加了editorconfig 的插件
trim_trailing_whitespace = true  //去掉后面无用的空格



子路由 在history 模式下的刷新问题  ？