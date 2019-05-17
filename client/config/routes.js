// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/index.vue'
// 如果要异步加载对应的组件  就不使用上面直接引用的方式  在下面的 component 中使用 () => import('../views/login/index.vue')
// 这样写的时候 需要下载个插件  babel-plugin-syntax-dynamic-import
// import goLogin from '../views/components/login/function.js'
import Works from '../views/work/index.vue'
export const app = [
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
  }
]
export const family = {
  path: '/family',
  name: 'family',
  component: () => import('../views/family/index.vue')
}
export const viewpage = {
  path: '/viewpage',
  name: 'viewpage',
  component: () => import('../views/viewpage/index.vue')
}
export const worksjs = {
  path: '/work',
  name: 'work',
  title: 'js',
  pathname: 'js',
  component: Works,
  children: [
    {
      path: '/js-1',
      title: 'JSONP的认识',
      name: 'js-1'
    },
    {
      path: '/js-2',
      title: 'http',
      name: 'js-2'
    },
    {
      path: '/js-3',
      title: 'CSRF',
      name: 'js-3'
    },
    {
      path: '/js-4',
      title: '原型链的理解',
      name: 'js-4'
    },
    {
      path: '/js-5',
      title: '原型链的继承',
      name: 'js-5'
    },
    {
      path: '/js-6',
      title: '借用构造函数',
      name: 'js-6'
    },
    {
      path: '/js-7',
      title: '组合继承',
      name: 'js-7'
    },
    {
      path: '/class',
      name: 'classs',
      title: '类',
      component: () => import('../json/class/class.jsx')
    },
    {
      path: '/promise',
      name: 'promises',
      title: 'promise',
      component: () => import('../json/promise/promise.jsx')
    },
    {
      path: '/reg',
      name: 'reg',
      title: 'reg',
      component: () => import('../json/reg/reg.jsx')
    },
    {
      path: '/domain',
      name: 'domain',
      title: 'domain',
      component: () => import('../json/crossdomain/index.jsx')
    },
    {
      path: '/XSS',
      name: 'XSS',
      title: 'XSS',
      component: () => import('../json/xss/index.jsx')
    },
    {
      path: '/bind',
      name: 'bind',
      title: 'bind',
      component: () => import('../json/bind/bind.jsx')
    },
    {
      path: '/copy',
      name: 'copy',
      title: 'copy',
      component: () => import('../json/copy/copy.jsx')
    },
    {
      path: '/link',
      name: 'link',
      title: 'link',
      component: () => import('../json/linkimport/index.jsx')
    },
    {
      path: '/webpack',
      name: 'webpack',
      title: 'webpack',
      component: () => import('../json/webpack4/index.jsx')
    }
  ]
}
export const worksMain = {
  path: '/work',
  name: 'work',
  pathname: 'default',
  title: '知识总结'
}
export const workscss = {
  path: '/work',
  name: 'work',
  pathname: 'css',
  title: 'css'
}
export const works = [
  worksMain,
  worksjs,
  workscss
]
export const routes = [
  ...app,
  family,
  viewpage,
  worksjs,
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
