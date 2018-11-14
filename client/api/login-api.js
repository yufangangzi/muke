import request from './index'

const reglogin = form => {
  return request.post('/api/reg', form)
}
const gotologin = form => {
  return request.post('/api/login', form)
}
const isLogin = () => {
  return request.get('/api/users')
}
export {
  gotologin,
  isLogin,
  reglogin
}
