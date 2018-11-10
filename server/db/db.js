const sha1 = require('sha1')
const axios = require('axios')

const className = 'todos'

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})
const creastError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}
const handLeRequest = ({status, data, ...rest}) => {
  console.log(status)
  if (status === 200) {
    return data
  } else {
    throw creastError(status, rest)
  }
}
module.exports = (appId, appKey) => {
  const getHeader = () => {
    const now = Date.now()
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
    }
  }
  return {
    async getAllTodos () {
      console.log(getHeader())
      return handLeRequest(
        await request.get(`/${className}`, {
          headers: getHeader()
        })
      )
    },
    async addTodo (todo) {
      return handLeRequest(await request.post(
        `/${className}`,
        todo,
        {headers: getHeader()}
      ))
    }
  }
}
