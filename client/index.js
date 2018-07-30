import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
// import './assets/styles/test.css'
import './assets/styles/globle.styl'
// import './assets/styles/teststylus.styl'
// import './assets/images/timg1.jpg'
Vue.use(VueRouter)

const root = document.createElement('div')
document.body.appendChild(root)
const router = createRouter()
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
  render: (h) => h(App)
}).$mount(root)
