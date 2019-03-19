import request from './index'

const getUser = (data) => {
  return request.post('/user/getUser', data)
}
const addUser = (data) => {
  return request.post('/user/addUser', data)
}
const deleteUser = (data) => {
  return request.post('/user/deleteUser', data)
}
const updateUser = (data) => {
  return request.post('/user/updateUser', data)
}
export {getUser, addUser, deleteUser, updateUser}
