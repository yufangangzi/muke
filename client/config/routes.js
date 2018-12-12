// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/index.vue'
// 如果要异步加载对应的组件  就不使用上面直接引用的方式  在下面的 component 中使用 () => import('../views/login/index.vue')
// 这样写的时候 需要下载个插件  babel-plugin-syntax-dynamic-import
// import goLogin from '../views/components/login/function.js'
export default [
  {
    path: '/',
    redirect: 'app'
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/todo/todo.vue'),
    beforeEnter: (to, from, next) => {
      console.log('router before enter')
      next()
    },
    children: [
      {
        path: 'text',
        component: () => import('../views/login/index.vue')
      }
    ]
  },
  {
    path: '/family',
    name: 'family',
    component: () => import('../views/family/index.vue')
    // beforeEnter: (to, from, next) => {
    //   console.log(from)
    //   console.log(to)
    //   if (window.localStorage.getItem('isLogin') === 'login') {
    //     next()
    //   } else {
    //     goLogin({toname: to.name})
    //   }
    // }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work/index.vue')
  },
  {
    path: '/sing',
    name: 'sing',
    component: () => import('../views/sing/index.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('../views/sing/play.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/video/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]
