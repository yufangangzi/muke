import request from './index'

const getView = (data) => {
  return request.post('/zhishiku/getname', data)
}
const getFiles = data => {
  return request.post('/zhishiku/getFiles', data)
}
export {getView, getFiles}
