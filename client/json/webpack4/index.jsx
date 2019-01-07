import '../work.less'
export default {
  data () {
    return {
      author: 'hejing',
      hakz: '{',
      haky: '}'
    }
  },
  render () {
    return (
      <div class="main-box">
        <h3>webpack4 的尝试</h3>
        <div>webpack4 零配置下系统的默认配置为</div>
        <div>
          <p>1 入口路径为：/src/index.js，打包输出路径：/dist/main.js</p>
          <p>2 未传--mode参数时，默认是-mode production，会进行压缩混淆。传入--mode development指定为开发环境打包。</p>
        </div>
        <h5>webpack cli执行</h5>
        <div>
          <p> 1 npx是npm 5.2.0及以上内置的包执行器，npx webpack --mode development会直接找项目的/node_modules/.bin/里面的命令执行，方便快捷。</p>
          <p> 2 使用npm脚本，配置好之后直接npm run xxx</p>
        </div>
        <h5>配置结构</h5>
        <img src='/assets/images/webpack/webpack-1.png' alt=''></img>
        <div>
        各个配置项的用法和细节将结合具体的功能实现来讲。
        </div>
        <div>
          <a target="_blank" href="https://webpack.docschina.org/configuration/#%2525E9%252580%252589%2525E9%2525A1%2525B9">官方文档</a>
        </div>
        <h5>基本的项目脚手架功能</h5>
        <div>
          <p>1 多入口配置</p>
          <div>一个入口文件对应输出一个出口文件，因为太简单，不再赘述。这里讲下多对一、多对多。

这里涉及到webpack配置中的灵魂成员：entry 及 output</div>
          <h5>多进一出</h5>
          <div>entry传入数组相当于将数组内所有文件都打包到bundle.js中。</div>
          <img src='/assets/images/webpack/webpack-2.png' alt=''></img>
          <h5>多进多出</h5>
          <div>entry传入对象，key称之为chunk，将不同入口文件分别打包到不同的js。</div>
          <div>output.filename改为用中括号占位来命名，从而生成多个文件，name是entry中各个chunk，具体可参考<a href="https://doc.webpack-china.org/configuration/output#output-filename" target="_blank" rel="nofollow">官方文档</a>
            <img src='/assets/images/webpack/webpack-3.png' alt=''></img>
          </div>
          <div>PS. 在output中，还有一个叫publicPath非常重要，设置不正确会导致生成错的引用路径，从而找不到资源。这里先不展开，后面结合图片处理再细述。</div>
          <h5>清空某目录或子目录及文件</h5>
          <div>这里先插入一个实用功能，因为在每次打包后，dist目录都有无用文件残留，最好每次打包前都清空dist目录。</div>
          <div>npm install -D clean-webpack-plugin</div>
          <img src='/assets/images/webpack/webpack-4.png' alt=''></img>
          <h5> html自动构建</h5>
          <div>回到正题，通过上面的配置，js已实现正确的进出关系，那该怎么引用呢，难道需要手动引入吗？下面看下怎样配置实现将html文件进行自动构建。这里需要借助插件。</div>
          <div>npm install html-webpack-plugin -D</div>
          <img src='/assets/images/webpack/webpack-5.png' alt=''></img>
          <div>在上面1的配置基础上加上plugins，就可以将打包文件自动注入到entry.html中，而且资源的引用路径都是正确的。</div>
          <h6>多页面场景</h6>
          <div>需要构建多个页面，每个页面分别引用不同入口，怎么破？</div>
          <img src='/assets/images/webpack/webpack-6.png' alt=''></img>
          <div>要几个页面就new几个，通过chunks传入需要引用的入口。</div>
          <h6>其他功能</h6>
          <div>
          从上面的配置可以看到，除了自动引用之外，html-webpack-plugin还提供了压缩、url后加hash等实用功能。具体参考<a href="https://github.com/jantimon/html-webpack-plugin#options" target="_blank" rel="nofollow">配置文档</a>
          </div>
          <h5>CSS处理——内联</h5>
          <div>有了JS和HTML，我们看看CSS该怎样自动内联进页面。</div>
          <div>因为webpack原生具有了模块打包的能力，因此我们可以直接用commonjs规范，无需其他插件。而如果我们在js中直接require或者import了一个css文件，此时肯定是需要额外步骤告诉webpack该怎样处理。这里涉及到webpack另一个配置项：module及相关的loader。</div>
          <div>下面以处理css以及less为例：</div>
          <div>
            <p>1 less：先编译成css，再把css内联进页面</p>
            <p>2 css：内联进页面</p>
          </div>
          <div>处理less和css等非js资源，需要安装相对应的loader</div>
          <div>
            <p>npm install -D css-loader # 负责处理其中的@import和url()</p>
            <p>npm install -D style-loader # 负责内联</p>
            <p>npm install -D less less-loader # less编译，处理less文件</p>
          </div>
          <h6>module配置</h6>
          <div>我觉得module配置是webpack里面最繁琐的一块，光是配置loader就有三种不同的写法。下面只列出loader配置项，具体其他的module配置项可参见官方文档。</div>
          <div>记住module的配置的其中一种套路：</div>
          <div>
            <em>module.rules[i].test：命中规则</em>
            <em>module.rules[i].use：传入数组（loader名或对象数组），从右到左执行</em>
            <em>或module.rules[i].loader ：传入字符串，这是module.rules[i].use: [ loader  ]的简写。</em>
          </div>
          <img src='/assets/images/webpack/webpack-7.png' alt=''></img>
          <div>最终以style的形式内联进页面</div>
          <h5>CSS处理——合并抽离</h5>
          <div>样式少可以内联，多了还是得抽离。而抽离文件已超过了loader的范围，需要借助plugins来完成：extract-text-webpack-plugin。</div>
          <div>有了之前的html自动构建配置，抽离后的CSS也会自动引入</div>
          <div>
          # @next为webpack4使用版本
          npm install -D extract-text-webpack-plugin@next
          </div>
          <div>
            <h6>抽离套路：</h6>
            <div>1 实例化ExtractTextPlugin</div>
            <div>1----1 每个实例抽离成文件时是以entry为单位，所以一个入口文件（entry）只能抽出一个文件，多entry时在设置filename需要注意<a href="https://github.com/webpack-contrib/extract-text-webpack-plugin#options" target="_blank" rel="nofollow">写法</a>。</div>
            <div>1----2可多次实例化，分别抽离CSS、LESS，下同</div>
            <div>2 将实例放入到plugins</div>
            <div>3 在css对应的module.rules.use调用extract方法。</div>
            <img src='/assets/images/webpack/webpack-8.png' alt=''></img>
            <h6>关于extract方法</h6>
            <div>这里将use的值改成extract之后，感觉怎么和上面说的套路又不一样了。</div>
            <div>莫慌，其实它只是个语法糖，从返回值就知道，还是返回loader对象数组。</div>
            <h6>关于options.fallback</h6>
            <div>顾名思义就是不被抽离时的降级处理。什么时候降级呢？</div>
            <div>实例时传入了disable: true</div>
            <div>code splitting异步打包的文件内如果有引用样式，默认情况下这些样式不会被抽离，此时被降级。<a href="https://github.com/zhengweikeng/blog/issues/9" target="_blank" rel="nofollow">参考博文</a></div>
            <div>如果异步文件也想抽离样式怎么办？用allChunks</div>
            <img src='/assets/images/webpack/webpack-9.png' alt=''></img>
          </div>
          <div>
            <h5> 图片(字体/svg)处理</h5>
            <div>好了轮到图片、字体这些资源了。我们希望做到</div>
            <div>1 -- 图片能正确被webpack打包，小于一定大小的图片直接base64内联。</div>
            <div>2 -- 打包之后各个入口（css/js/html）还能正常访问到图片，图片引用路径不乱。</div>
            <div>字体和svg等资源同理</div>
            <h6>(1) 安装依赖</h6>
            <div>npm install -D url-loader file-loader</div>
            <div>url-loader: 小于limit值时，直接base64内联，大于limit就干脆不管了，直接扔给file-loader处理，不装直接报错，之前还以为会自动调用，所以这两者都得装上。</div>
            <h6>(2) 不同入口（css/js/html）引用图片</h6>
            <div> 1 html</div>
            <div>html文件是通过html-wepback-plugin生成的，如果希望webpack能够正确处理打包之后图片的引用路径，需要在模板文件中这样引用图片。</div>
            <img src='/assets/images/webpack/webpack-10.png' alt=''></img>
            <div> 2 css/js</div>
            <img src='/assets/images/webpack/webpack-11.png' alt=''></img>
            <h6>(3) 配置</h6>
            <img src='/assets/images/webpack/webpack-12.png' alt=''></img>
            <div>上述配置除了limit和fallback是url-loader(文档)的参数以外，其他配置项如name, outputPath都会透传给file-loader(文档)。</div>
            <div>关于name, outputPath, publicPath</div>
            <div>1 图片最终的输出路径：path.join(outputPath, name)</div>
            <div>2 图片的引用路径： 指定了publicPath：path.join(publicPath, name)，这里会忽略掉outputPath  否则用默认的output.publicPath：path.join(__webpack_public_path__, outputPath, name)</div>
            <h6>(4) 打包结果</h6>
            <div>根据上面的引用路径生成规则path.join('', 'images/','[name].[ext]?[hash]')，也就是各引用入口（html/css）必须和images目录同级才能访问到图片。而css放在了style目录下，与images不同级。</div>
            <div>引用路径不对？用publicPath修正
要解决上面的问题，可以在抽离css时设定publicPath。</div>
            <div></div>
          </div>
          <h5> ES6转义</h5>
          <img src='/assets/images/webpack/webpack-13.png' alt=''></img>
          <div>
            <h5>webpack-dev-server</h5>
            <div>开发调试怎么少的了本地服务器。npm install -D webpack-dev-server。基础配置比较简单，参见<a href="https://webpack.docschina.org/configuration/dev-server/" target="_blank" rel="nofollow">官方文档</a>，配置好之后直接webpack-dev-server即可。</div>
            <div>contentBase和publicPath</div>
            <div>(1) contentBase  也就是指定静态服务器的根目录，可以访问到不通过webpack处理的文件。</div>
            <div>(2) publicPath </div>
            <div>对于webpack打包的文件：虽然我们指定了打包输出目录dist，但是实际上并不会生成dist，而是打包后直接传给devserver，然后放到内存中。不过可以通过：http://localhost:3000/webpack-dev-server查看打包目录下的文件。</div>
            <div>publicPath是告诉浏览器通过什么路径去访问上面的webpack打包目录。默认值是/。也就是说我们可以通过：http://localhost:3000/index.html,http://localhost:3000/style/vutify.css来访问打包文件。这点要和contentBase的静态文件服务器区分开。

另一个容易导致文件404的是：把publicPath设置为打包目录/dist。这样的话，就需要多加一层：

http://localhost:3000/dist/index.html,

http://localhost:3000/dist/style/vutify.css才能访问。</div>
            <div></div>
          </div>
          <h5>热更新 HMR</h5>
          <div>webpack-dev-server在试图重新加载整个页面（LiveReload）之前，会尝试使用热更新（HMR）来更新。</div>
          <img src='/assets/images/webpack/webpack-14.png' alt=''></img>
          <h5>域名与代理</h5>
          <h6>场景1：</h6>
          <div>真机上访问devServer，进行开发、调试、体验。

解决方法：

host指定为无线网卡的ip，如192.168.0.104，PC与其他移动设备处于同一wifi环境下时即可访问。</div>
          <img src='/assets/images/webpack/webpack-15.png' alt=''></img>
          <h6>场景2：</h6>
          <div>后台数据接口为http://c.y.qq.com/xxx，如果用localhost:3000访问的话，会遇到跨域的问题，需要使用y.qq.com域名访问。</div>
          <div>解决方法：</div>
          <div>将本地服务器放在80端口上（Mac下需要sudo起服务），配置host：y.qq.com 127.0.0.1，此时使用http://y.qq.com/即可访问本地服务器。</div>
          <h6>场景3：</h6>
          <div>后台服务搭在本地8360端口，页面在3000端口。</div>
          <a href="https://webpack.docschina.org/configuration/dev-server/#devserver-proxy" target="_blank" rel="nofollow">devserver-proxy官方文档</a>
        </div>
      </div>
    )
  }
}
