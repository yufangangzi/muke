import csrf from './csrf.js'
import prototype from './prototype.js'
import prototype1 from './prototype1.js'
import prototype2 from './prototype2.js'
import prototype3 from './prototype3.js'
const contents = {
  'default': [
    '自己的总结'
  ],
  'js-1': [
    '先说说JSONP是怎么产生的：',
    '其实网上关于JSONP的讲解有很多,说说自己关于它的理解',
    '1. ajax请求由于浏览器的限制有跨域的影响',
    '2. 不过我们发现，在web页面上调用js文件不受跨域的影响（凡是拥有src属性的标签都拥有跨域的能力，比如script,img,iframe）',
    '3. 当前阶段如果想通过纯web端跨域访问数据就只有一种可能,那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用',
    '4. 为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。',
    '5. ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加script标签来调用服务器提供的js脚本',
    '6. 其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取'
  ],
  'js-2': [
    '<em>HTTP简介</em>',
    'HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。',
    'HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。',
    'HTTP协议工作于客户端-服务端架构为上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。Web服务器根据接收到的请求后，向客户端发送响应信息',
    '<em>主要特点</em>',
    '1、简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。',
    '2、灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。',
    '3.无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。',
    '4.无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。',
    '5、支持B/S及C/S模式。',
    '<em>HTTP之URL</em>',
    'HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。URL是一种特殊类型的URI，包含了用于查找某个资源的足够的信息URL,全称是UniformResourceLocator, 中文叫统一资源定位符,是互联网上用来标识某一处资源的地址。以下面这个URL为例，介绍下普通URL的各部分组成：http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name',
    '从上面的URL可以看出，一个完整的URL包括以下几部分：',
    '1.协议部分：该URL的协议部分为“http：”，这代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等等本例中使用的是HTTP协议。在"HTTP"后面的“//”为分隔符',
    '2.域名部分：该URL的域名部分为“www.aspxfans.com”。一个URL中，也可以使用IP地址作为域名使用',
    '3.端口部分：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口',
    '4.虚拟目录部分：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/”',
    '5.文件名部分：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名',
    '6.锚部分：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分',
    '7.参数部分：从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为“boardID=5&ID=24618&page=1”。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符。',
    '<em>URI和URL的区别</em>',
    'URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。</br>Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的URI一般由三部组成：',
    '①访问资源的命名机制②存放资源的主机名③资源自身的名称，由路径表示，着重强调于资源。',
    'URL是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。',
    'URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL一般由三部组成：',
    '①协议(或称为服务方式)②存有该资源的主机IP地址(有时也包括端口号)③主机资源的具体地址。如目录和文件名等',
    '<em>HTTP之请求消息Request</em>',
    '客户端发送一个HTTP请求到服务器的请求消息包括以下格式：',
    '请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。',
    '第一部分：请求行，用来说明请求类型,要访问的资源以及所使用的HTTP版本.</br>GET说明请求类型为GET,[/562f25980001b1b106000338.jpg]为要访问的资源，该行的最后一部分说明使用的是HTTP1.1版本。',
    '第二部分：请求头部，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息</br>从第二行起为请求头部，HOST将指出请求的目的地.User-Agent,服务器端和客户端脚本都能访问它,它是浏览器类型检测逻辑的重要基础.该信息由你的浏览器来定义,并且在每个请求中自动发送等等',
    '第三部分：空行，请求头部后面的空行是必须的,即使第四部分的请求数据为空，也必须有空行。',
    '第四部分：请求数据也叫主体，可以添加任意的其他数据。',
    '<em>HTTP之响应消息Response</em>',
    '一般情况下，服务器接收并处理客户端发过来的请求后会返回一个HTTP的响应消息。',
    'HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。',
    '第一部分：状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。</br>第一行为状态行，（HTTP/1.1）表明HTTP版本为1.1版本，状态码为200，状态消息为（ok）',
    '第二部分：消息报头，用来说明客户端要使用的一些附加信息</br>第二行和第三行为消息报头，Date:生成响应的日期和时间；Content-Type:指定了MIME类型的HTML(text/html),编码类型是UTF-8',
    '第三部分：空行，消息报头后面的空行是必须的',
    '第四部分：响应正文，服务器返回给客户端的文本信息。空行后面的html部分为响应正文。',
    '<em>HTTP之状态码</em>',
    '状态代码有三位数字组成，第一个数字定义了响应的类别，共分五种类别:',
    '1xx：指示信息--表示请求已接收，继续处理',
    '2xx：成功--表示请求已被成功接收、理解、接受',
    '3xx：重定向--要完成请求必须进行更进一步的操作',
    '4xx：客户端错误--请求有语法错误或请求无法实现',
    '5xx：服务器端错误--服务器未能实现合法的请求',
    '常见状态码：',
    '200 OK                        //客户端请求成功',
    '400 Bad Request               //客户端请求有语法错误，不能被服务器所理解',
    '401 Unauthorized              //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用',
    '403 Forbidden                 //服务器收到请求，但是拒绝提供服务',
    '404 Not Found                 //请求资源不存在，eg：输入了错误的URL',
    '500 Internal Server Error     //服务器发生不可预期的错误',
    '503 Server Unavailable        //服务器当前不能处理客户端的请求，一段时间后可能恢复正常',
    '<a href="https://www.cnblogs.com/jianying/p/7992622.html" target="view_window">更多状态码</a>',
    '<em>HTTP请求方法</em>',
    '根据HTTP标准，HTTP请求可以使用多种请求方法。',
    'HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。',
    'HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。',
    'GET     请求指定的页面信息，并返回实体主体。',
    'HEAD     类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头',
    'POST     向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。',
    'PUT     从客户端向服务器传送的数据取代指定的文档的内容。',
    'DELETE      请求服务器删除指定的页面。',
    'CONNECT     HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。',
    'OPTIONS     允许客户端查看服务器的性能。',
    'TRACE     回显服务器收到的请求，主要用于测试或诊断。',
    '<em>HTTP工作原理</em>',
    'HTTP协议定义Web客户端如何从Web服务器请求Web页面，以及服务器如何把Web页面传送给客户端。HTTP协议采用了请求/响应模型。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或者错误代码、服务器信息、响应头部和响应数据。',
    '以下是 HTTP 请求/响应的步骤，个人理解',
    '1、客户端连接到Web服务器',
    'Http 的header会给我们的请求包装，比如AF中经常设置的可接受的Accept（text/html） --》域名解析，根据域名找到服务器的IP --> 发起TCP的3次握手 --> 建立TCP连接后发起http请求 --> 服务器响应http请求，浏览器得到html代码 --> 浏览器解析html代码，并请求html代码中的资源（如js、css、图片等） --> 浏览器对页面进行渲染呈现给用户',
    '每次都请求都会经过  客户端的应用层（http协议）-->  客户端的传输层（tcp或udp协议） -->客户端的网络层（ip协议） --> 客户端的链路层（网卡，路由器等） -->  ------------------经过dns解析，穿越多个isp（互联网服务提供商，移动，联通，电信等），各种数据交换，找到了服务器------------------- 服务器的链路层  -->服务器的网络层  -->服务器的传输层  -->服务器的应用层。 这个请求完成了。',
    '以下就是上面过程的一一分析，我们就以Chrome浏览器为例：',
    '<b>1.域名解析（DNS解析）</b>    ',
    '首先Chrome浏览器会解析 www.linux178.com 这个域名（准确的叫法应该是主机名）对应的IP地址。怎么解析到对应的IP地址？',
    '① Chrome浏览器 会首先搜索浏览器自身的DNS缓存（缓存时间比较短，大概只有1分钟，且只能容纳1000条缓存），看自身的缓存中是否有www.linux178.com 对应的条目，而且没有过期，如果有且没有过期则解析到此结束。注：我们怎么查看Chrome自身的缓存？可以使用 chrome://net-internals/#dns 来进行查看',
    '② 如果浏览器自身的缓存里面没有找到对应的条目，那么Chrome会搜索操作系统自身的DNS缓存,如果找到且没有过期则停止搜索解析到此结束.注：怎么查看操作系统自身的DNS缓存，以Windows系统为例，可以在命令行下使用 ipconfig /displaydns 来进行查看  ',
    '③ 如果在Windows系统的DNS缓存也没有找到，那么尝试读取hosts文件（位于C:Windows-System32-drivers-etc），看看这里面有没有该域名对应的IP地址，如果有则解析成功。',
    '④ 如果在hosts文件中也没有找到对应的条目，浏览器就会发起一个DNS的系统调用，就会向本地配置的首选DNS服务器（一般是电信运营商提供的，也可以使用像Google提供的DNS服务器）发起域名解析请求（通过的是UDP协议向DNS的53端口发起请求，这个请求是递归的请求，也就是运营商的DNS服务器必须得提供给我们该域名的IP地址），运营商的DNS服务器首先查找自身的缓存，找到对应的条目，且没有过期，则解析成功。如果没有找到对应的条目，则有运营商的DNS代我们的浏览器发起迭代DNS解析请求，它首先是会找根域的DNS的IP地址（这个DNS服务器都内置13台根域的DNS的IP地址），找打根域的DNS地址，就会向其发起请求（请问www.linux178.com这个域名的IP地址是多少啊？），根域发现这是一个顶级域com域的一个域名，于是就告诉运营商的DNS我不知道这个域名的IP地址，但是我知道com域的IP地址，你去找它去，于是运营商的DNS就得到了com域的IP地址，又向com域的IP地址发起了请求（请问www.linux178.com这个域名的IP地址是多少?）,com域这台服务器告诉运营商的DNS我不知道www.linux178.com这个域名的IP地址，但是我知道linux178.com这个域的DNS地址，你去找它去，于是运营商的DNS又向linux178.com这个域名的DNS地址（这个一般就是由域名注册商提供的，像万网，新网等）发起请求（请问www.linux178.com这个域名的IP地址是多少？），这个时候linux178.com域的DNS服务器一查，诶，果真在我这里，于是就把找到的结果发送给运营商的DNS服务器，这个时候运营商的DNS服务器就拿到了www.linux178.com这个域名对应的IP地址，并返回给Windows系统内核，内核又把结果返回给浏览器，终于浏览器拿到了www.linux178.com  对应的IP地址，该进行一步的动作了。',
    '<b>2.发起TCP的3次握手</b> ',
    '拿到域名对应的IP地址之后，User-Agent（一般是指浏览器）会以一个随机端口（1024 < 端口 < 65535）向服务器的WEB程序（常用的有httpd,nginx等）80端口发起TCP的连接请求。这个连接请求（原始的http请求经过TCP/IP4层模型的层层封包）到达服务器端后（这中间通过各种路由设备，局域网内除外），进入到网卡，然后是进入到内核的TCP/IP协议栈（用于识别该连接请求，解封包，一层一层的剥开），还有可能要经过Netfilter防火墙（属于内核的模块）的过滤，最终到达WEB程序（本文就以Nginx为例），最终建立了TCP/IP的连接。',
    '2个计算机通信是靠协议（目前流行的TCP/IP协议）来实现,如果2个计算机使用的协议不一样，那是不能进行通信的，所以这个3次握手就相当于试探一下对方是否遵循TCP/IP协议，协商完成后就可以进行通信了，当然这样理解不是那么准确。',
    '为什么HTTP协议要基于TCP来实现？',
    '目前在Internet中所有的传输都是通过TCP/IP进行的，HTTP协议作为TCP/IP模型中应用层的协议也不例外，TCP是一个端到端的可靠的面向连接的协议，所以HTTP基于传输层TCP协议不用担心数据的传输的各种问题。',
    '<b>3.建立TCP连接后发起http请求</b> ',
    '<b>4.服务器端响应http请求，浏览器得到html代码</b> ',
    '<em>GET和POST请求的区别</em>',
    '1、GET提交，请求的数据会附在URL之后（就是把数据放置在HTTP协议头中），以?分割URL和传输数据，多个参数用&连接.如果数据是英文字母/数字，原样发送，如果是空格，转换为+，如果是中文/其他字符，则直接把字符串用BASE64加密，',
    'POST提交：把提交的数据放置在是HTTP包的包体中。上文示例中红色字体标明的就是实际的传输数据',
    '2、传输数据的大小：首先声明：HTTP协议没有对传输的数据大小进行限制，HTTP协议规范也没有对URL长度进行限制。',
    '而在实际开发中存在的限制主要有：',
    'GET:特定浏览器和服务器对URL长度有限制，例如 IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系 统的支持。',
    'POST:由于不是通过URL传值，理论上数据不受 限。但实际各个WEB服务器会规定对post提交数据大小进行限制，Apache、IIS6都有各自的配置。',
    '3、安全性 POST的安全性要比GET的安全性高。比如：通过GET提交数据，用户名和密码将明文出现在URL上，因为(1)登录页面有可能被浏览器缓存；(2)其他人查看浏览器的历史纪录，那么别人就可以拿到你的账号和密码了，除此之外，使用GET提交数据还可能会造成Cross-site request forgery攻击',
    'GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值。',
    'http://www.cnblogs.com/ranyonsue/p/5984001.html'
  ]
}
export default Object.assign(contents, csrf, prototype, prototype1, prototype2, prototype3)
