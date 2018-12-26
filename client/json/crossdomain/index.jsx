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
        <div>使用crossdomain.xml让Flash可以跨域传输数据</div>
        <h3>一、概述</h3>
        <div>位于http://hr64.xyz域中的SWF文件要访问http://www.163.com的文件时，SWF首先会检查163服务器目录下是否有crossdomain.xml文件，如果没有，

则访问不成功；若crossdomain.xml文件存在，且里边设置了允许http://hr64.xyz域访问，那么通信正常。所以要使Flash可以跨域传输数据，其关键就是crossdomain.xml。</div>
        <h3>二、crossdomain.xml文件格式</h3>
        <div>crossdomain.xml的格式非常简单，其根节点为cross-domain-policy ，其下包含一个或多个allow-access-from节点，allow-access-from有一个属性domain，其值为允许访问的域，

可以是确切的 IP 地址、一个确切的域或一个通配符域（任何域）。下边是两个例子：</div>
        <img src='/assets/images/crossdomain/domain-1.png' alt=''></img>
        <div>当Flex访问WebService服务时，在本地能够正常访问，当部署到web容器中发布为web服务后，再调用WebServicIE，此时就会被拒绝访问，这就是Flex跨域访问的沙箱问题，
为了解决Flex跨域访问WebService的问题，可采用如下方案：
首先，跨域访问被拒绝是因为提供服务方没有配置安全策略文件，即crossdomain.xml，如果你不想用crossdomain.xml就要用到代理，即自己写一个后台读取webservice，

然后提供给自己的flex应用，因为在flashplayer中，要跨域必须要有策略文件。考虑到flashplayer升级到9.124之后，加强了安全性，

之前的crossdomain.xml的写法发生了变化，以下就是该文件的完整写法：</div>
        <div>表示该服务允许任何外域来访问。
关于crossdomain.xml的放置目录问题，有如下解决方案，可放置在：
1） 如果这个目录是容器的根目录，可以通过以下的url访问crossdomain.xml:
http://localhost:8080/crossdomain.xml 。
2） 如果crossdomain.xml不是放在根目录下，而是在某个webapp下面，在flex中就需要在初始化的时候应用
Security.loadPolicyFile("http:// hr64.xyz:8080/aaa/crossdomain.xml");
其中aaa为webapp的名称
这样，外部Flex访问该服务发布的WebService时，flashplayer首先找的就是crossdomain.xml文件，若安全机制设置为允许访问，则访问成功</div>
      </div>
    )
  }
}
