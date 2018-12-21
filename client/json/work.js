import {worksjs} from '../config/routes.js'
console.log(worksjs)
const works = [
  {
    id: 'default',
    title: '知识总结'
  },
  {
    id: 'js',
    title: 'js',
    component: [
      {
        title: 'JSONP的认识',
        name: 'js-1'
      },
      {
        title: 'http',
        name: 'js-2'
      },
      {
        title: 'CSRF',
        name: 'js-3'
      },
      {
        title: '原型链的理解',
        name: 'js-4'
      },
      {
        title: '原型链的继承',
        name: 'js-5'
      },
      {
        title: '借用构造函数',
        name: 'js-6'
      },
      {
        title: '组合继承',
        name: 'js-7'
      }
    ]
  },
  {
    id: 'css',
    title: 'css'
  }
]
export default works
