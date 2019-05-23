前端路由的原理  找到一个与地址匹配的组建并将它渲染出来，一般是两种方案
1.通过在地址中加入#来欺骗浏览器，地址的改变是在进行页内导航
2.使用h5 window.history功能，使用url的hash来模拟

通过 vue的router 来分析
实现路由的几个步骤

1.插件
先安装 <router-view></router-view> 和<router-link></router-link>
给当前应用下所有的组建都注入 $router和 $route
Vue.use(VueRouter)
2. 定义各个路由下使用的组件，简称路由组件
3. 创建 VueRouter 实例 router
4. 创建 启动应用
// 一定要确认注入了 router 


动态路由匹配
 const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
或者使用 2.2 中引入的 beforeRouteUpdate 守卫：
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}