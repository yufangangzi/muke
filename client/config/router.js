import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    routes,
    // base: '/base/'
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      // to 事是要去的路由  from 是从哪里来的  savedPosition  是记录之前页面滚动状态
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    },
    fallback: true // 在不能支持该模式的时候会自动转为hash 模式
    // parseQuery (query) {
    // },
    // stringifyQuery (obj) {
    // }
  })
}
