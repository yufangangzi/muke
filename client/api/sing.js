import request from './index'

const singList = (data) => {
  return request.post('/mobileWeb/activity/list.kg', data)
}
const singInfo = (data) => {
  return request.post('/mobileWeb/ugc/info.kg', data)
}
export {singList, singInfo}
