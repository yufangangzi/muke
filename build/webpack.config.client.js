const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const isDev = process.env.NODE_ENV === 'development'
const devServer = {
  port: 8000,
  host: 'localhost',
  overlay: {
    errors: true // 在网页上显示编译中的错误
  },
  historyApiFallback: {
    index: '/public/index.html'// 找不到的地址 再这里处理  刷新的时候 会出现 404   这里的路径事和output 中的publickpath有关系的   如果设置了publickpath  需在前面加上
  },
  open: false, // 会打开浏览器页面
  hot: true // 当组件值变化时  只是会刷新单个组件
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new VueLoaderPlugin(),

  new HTMLPlugin({
    // filename: '../index.html',
    // inject: false
    template: path.join(__dirname, './template.html')
  }), // 可以取看配置项
  new VueClientPlugin()
]

let config
if (isDev) {
  config = merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devtool: '#cheap-modu-eval-source-map',
    devServer: devServer,
    plugins: defaultPlugins.concat(
      [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    )
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/client-entry.js'),
      vendor: ['vue'] // 在数组上放 不会经常变化的框架  这样会把这些单独打包   需要配合下面的插件 webpack.optimize.CommonsChunkPlugin
    },
    output: {
      filename: '[name].[chunkhash:8].js', // chunkhash 和hash 的区别是  hash 是整个项目的hash  chunkhash 是针对单个文件的  这样有利于缓存的使用
      publicPath: '/public/'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader', // 热更新中可能需要换位 vue-style-loader
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: defaultPlugins.concat(
      [
        new ExtractPlugin('style.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime'
        }) // 是将有关webpack 的代码单独打包出来   作用 有新的包加入的时候 可以不用变更 hash
      ]
    )
  })
}

module.exports = config
