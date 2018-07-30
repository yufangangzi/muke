import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createStore from './store/store'
import createRouter from './config/router'
// import './assets/styles/test.css'
import './assets/styles/globle.styl'
// import './assets/styles/teststylus.styl'
// import './assets/images/timg1.jpg'
Vue.use(VueRouter)
Vue.use(Vuex)

const root = document.createElement('div')
document.body.appendChild(root)
const router = createRouter()
const store = createStore()
store.registerModule('c', {
  state: {
    text: 88
  }
}) // store 增加了一个可以添加模块的功能

store.watch((state) => state.count + 1, (newCount) => {
  console.log('new count wetched', newCount)
}) // 接受两个函数  后面是前一个的回掉 当地一个函数变化后 回掉第二个函数

store.subscribe((mutation, state) => {
  console.log(mutation.type) // 调用的哪个mutation
  console.log(mutation.payload) // mutation 传的值
})
store.subscribeAction((action, state) => {
  console.log(action.type) // 调用的哪个action
  console.log(action.payload) // action 传的值
})
router.beforeEach((to, from, next) => {
  // 可以验证是否登陆 跳转登陆页面
  console.log('llll')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('222222')
  next()
})
router.afterEach((to, from) => {
  console.log('33333')
})
new Vue({
  router: router,
  store,
  render: (h) => h(App)
}).$mount(root)
