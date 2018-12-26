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
        <h3>XSS定义</h3>
        <div>XSS, 即为（Cross Site Scripting）, 中文名为跨站脚本, 是发生在目标用户的浏览器层面上的，当渲染DOM树的过程成发生了不在预期内执行的JS代码时，就发生了XSS攻击。</div>
        <div>
        跨站脚本的重点不在‘跨站’上，而在于‘脚本’上。大多数XSS攻击的主要方式是嵌入一段远程或者第三方域上的JS代码。实际上是在目标网站的作用域下执行了这段js代码。
        </div>
        <h3>XSS攻击方式</h3>
        <div>
        反射型XSS，也叫非持久型XSS，是指发生请求时，XSS代码出现在请求URL中，作为参数提交到服务器，服务器解析并响应。响应结果中包含XSS代码，最后浏览器解析并执行。
        </div>
        <div>从概念上可以看出，反射型XSS代码是首先出现在URL中的，然后需要服务端解析，最后需要浏览器解析之后XSS代码才能够攻击</div>
        <div>举一个小栗子。</div>
        <div>
        使用express起一个web服务器，然后设置一下请求接口。通过ajax的GET请求将参数发往服务器，服务器解析成json后响应。将返回的数据解析后显示到页面上。（没有对返回的数据进行解码和过滤等操作。）
        </div>
        <div>https://www.cnblogs.com/unclekeith/p/7750681.html</div>
      </div>
    )
  }
}
