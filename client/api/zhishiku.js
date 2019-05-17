import request from './index'

const getView = (data) => {
  const reg = /(png|jpg)/g
  const type = reg.test(data.viewname) ? 'tupian' : 'not'
  return request.post('/zhishiku/getname', data, { headers: { 'tupiantype': type } })
}
const getFiles = data => {
  return request.post('/zhishiku/getFiles', data)
}
export {getView, getFiles}
