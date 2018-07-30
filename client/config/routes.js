// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/index.vue'
// 如果要异步加载对应的组件  就不使用上面直接引用的方式  在下面的 component 中使用 () => import('../views/login/index.vue')
// 这样写的时候 需要下载个插件  babel-plugin-syntax-dynamic-import

export default [
  {
    path: '/',
    redirect: 'app'
  },
  {
    path: '/app',
    // props: true, // 设置为 true  这样就相当于给组件通过 props  传第参数   也可以直接来赋值
    components: {
      default: () => import('../views/todo/todo.vue'),
      a: () => import('../views/login/index.vue')
    },
    beforeEnter: (to, from, next) => {
      console.log('router before enter')
      next()
    },
    // name: 'app',
    // meta: {
    //   title: 'this is app',
    //   decriptCion: 'ddd'
    // },
    children: [
      {
        path: 'text',
        component: () => import('../views/login/index.vue')
      }
    ]
  },
  {
    path: '/login',
    components: {
      default: () => import('../views/login/index.vue'),
      a: () => import('../views/todo/todo.vue')
    }
  }
]
