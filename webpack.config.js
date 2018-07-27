const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

const config = {
  target:"web",
  entry:path.join(__dirname,'src/index.js'),
  output: {
    filename:'bundle[hash:8].js',
    path: path.join(__dirname,'dist')
  },
  module: {
    rules:[
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      
      {
        test:/\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader:'url-loader',
            options:{
              limit:1024,
              name:'[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    
    new HTMLPlugin() //可以取看配置项
  ]
}

if(isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use:[
      'style-loader',
      'css-loader',
      {
        loader:"postcss-loader",
        options:{
          sourceMap:true
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-modu-eval-source-map'
  config.devServer = {
    port:8000,
    host:'localhost',
    overlay: {
      errors:true //在网页上显示编译中的错误
    },
    open:true, //会打开浏览器页面
    // historyFallback:{
    //   //找不到的地址 再这里处理
    // }
    hot:true, // 当组件值变化时  只是会刷新单个组件
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app:path.join(__dirname,'src/index.js'),
    vendor:['vue']  //在数组上放 不会经常变化的框架  这样会把这些单独打包   需要配合下面的插件 webpack.optimize.CommonsChunkPlugin
  }
  config.output.filename = '[name].[chunkhash:8].js'   //chunkhash 和hash 的区别是  hash 是整个项目的hash  chunkhash 是针对单个文件的  这样有利于缓存的使用
  config.module.rules.push(
    {
      test:/\.styl/,
      use:ExtractPlugin.extract({
        fallback:'style-loader',
        use:[
          'css-loader',
          {
            loader:"postcss-loader",
            options:{
              sourceMap:true
            }
          },
          'stylus-loader'
        ]
      })
    }
  ),
  config.plugins.push(
    new ExtractPlugin('style.[contentHash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'runtime'
    })  // 是将有关webpack 的代码单独打包出来   作用 有新的包加入的时候 可以不用变更 hash
  )
}

module.exports = config