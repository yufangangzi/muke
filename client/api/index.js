import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3333'
})
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
request.interceptors.response.use(data => {
  if (data.status === 200) {
    return data.data
  };
}, error => {
  return Promise.reject(error)
})
export default request
