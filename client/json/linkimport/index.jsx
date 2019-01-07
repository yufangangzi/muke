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
        <h3>由link和@import的区别引发的CSS渲染杂谈</h3>
        <div>
          我们都知道，外部引入 CSS 有2种方式，link标签和@import。
          它们有何本质区别，有何使用建议，在考察外部引入 CSS 这部分内容时，经常被提起。

          如今，很多学者本着知其然不欲知其所以然的学习态度，不求甚解，只求结论。
          所以，本文遵循 css hack 的渐进识别原则，
          结论 → 区别 → 争议 → 细节 → 祖坟 → 感想，逐渐加深理论层级，
          力争每个 level 的读者，都能 get 到自己想要的内容，不必继续阅读下去。
        </div>
        <h3>结论</h3>
        <div>
        就结论而言，强烈建议使用link标签，慎用@import方式。
        这样可以避免考虑@import的语法规则和注意事项，避免产生资源文件下载顺序混乱和http请求过多的烦恼。
        </div>
        <h3>
          <a target="_blank" href="https://www.cnblogs.com/my--sunshine/p/6872224.html">详情</a>
        </h3>
      </div>
    )
  }
}
