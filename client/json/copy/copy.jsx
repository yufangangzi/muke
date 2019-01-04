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
        <div>深拷贝和浅拷贝的区别 和实现深拷贝的方法</div>
        <div>数据的存储分为两种  ，一种是基础数据类型，一种是引用数据类型</div>
        <div>基础数据类型的数据是按照 key value 的方式存放在栈内存中</div>
        <img src='/assets/images/copy/copy-1.png' alt=''></img>
        <div>引用类型的数据是将 key  value 存放在栈内存中 但是 value 是一个地址指针  指向堆内存的一个地址。 所以引用类型实际上都是指向对内存的一个地址</div>
        <img src='/assets/images/copy/copy-2.png' alt=''></img>
        <div>实现深拷贝的几种方法</div>
        <div>首先是利用递归的方法去复制所以的属性</div>
        <img src='/assets/images/copy/copy-3.png' alt=''></img>
        <div>除了递归，我们还可以借用JSON对象的parse和stringify</div>
      </div>
    )
  }
}
