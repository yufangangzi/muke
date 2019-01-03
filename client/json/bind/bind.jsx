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
        <div>js中自己实现bind函数的方式。</div>
        <h3>bind的实现</h3>
        <img src='/assets/images/bind/bind-1.png' alt=''></img>
        <div>说实话，咋看这一段代码，感觉好像很平淡无奇，但是你要是细细去体味的话，简直能够让你回味无穷。</div>
        <h3>[].shift.call(arguments) 的含义</h3>
        <div>我相信，对于很多对 js 这门语言掌握并不算深的童鞋来说，这句代码的含义貌似并不怎么容易理解，。</div>
        <div>context = [].shift.call(arguments) 这一句就是把参数中的第一个剪切出来，赋给 context，那么也就相当于起到了将 参数中的 this 保存的目的。</div>
        <div>
          args = [].slice.call(arguments);
          这一句，将除了 this 上下文的所有参数，传给了 args ，以备后来使用。
        </div>
        <h3>bind的理解</h3>
        <div>bind 就是用来绑定上下文的，强制将函数的执行环境绑定到目标作用域中去。与 call 和 apply 其实有点类似，但是不同点在于，它不会立即执行，而是返回一个函数。因此我们要想自己实现一个 bind 函数，就必须要返回一个函数，而且这个函数会接收绑定的参数的上下文。</div>
        <div>
          这一段其实很好理解，因为bind 绑定了上下文，因此 self.apply 的第一个参数，是之前我们保存的 context。接下来，我们将 bind 的其余参数和调用bind后返回的函数在执行的过程中接收的参数进行拼接，作为一个数组传入apply的第二个参数中去。这就完美的实现了 bind 函数的功能，不得不说很是巧妙。
        </div>
      </div>
    )
  }
}
