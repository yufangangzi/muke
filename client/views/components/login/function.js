import Vue from 'vue'
import Component from './func-login'
import {isLogin} from '../../../api/login-api'
import notify from '../notify/function'
const Login = Vue.extend(Component)

const goLogin = (options) => {
  if (Vue.prototype.$isServer) return
  const instance = new Login({
    propsData: {
    },
    data: {
    }
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.$on('close', () => {
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  instance.vm.$on('submit', form => {
    isLogin(form).then(res => {
      const list = res.data
      const islo = list.filter(item => {
        return item.name === form.name && item.password === form.password
      })
      if (islo.length > 0) {
        notify({
          content: '登录成功'
        })
        window.localStorage.setItem('isLogin', 'login')
        document.body.removeChild(instance.vm.$el)
        instance.vm.$destroy()
      } else {
        notify({
          content: '用户不正确'
        })
      }
    })
  })
  return instance.vm
}
export default goLogin
