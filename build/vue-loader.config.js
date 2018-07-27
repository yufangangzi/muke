module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 帮助我们去掉template 中多余的空格
    extractCss: !isDev, // 一般在。vue 文件中的css 不会被单独打包出去的 这里设置为true 后可以单独打包    默认是不会把里面的单独 打包的  利于异步加载
    cssModules: {
      localIdentName: '[path]-[name]-[hash:base64:5]', // 生成的classname 是根据路径和文件名 加hash 来命名
      camelCase: true // 在css 中类名中间不能加-   这个是解决这个的
    }
    // hotReload: false,         // 设置为false 时会关闭热重载
    // loader:{
    //   // js:'coffe-loader'  //在这个里面可以写某部分内容使用什么loader 去解析
    // },
    // preLoader:{
    //   // 先用这个里面的去解析  然后再去loader  解析
    // }
  }
}
