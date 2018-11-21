const axios = require('axios')
const qs = require('qs')
const request = axios.create({
  baseURL: 'http://www.tlkg.com/mobileWeb'
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
module.exports = () => {
  // const getHeader = () => {
  //   return {
  //   }
  // }
  return {
    async getSingList (data) {
      return handLeRequest(
        await request.post(`/activity/list.kg`, qs.stringify(data))
      )
    },
    async getSingInfo (data) {
      console.log(data)
      return handLeRequest(
        await request.post('/ugc/info.kg', qs.stringify(data), {
          withCredentials: true,
          headers: {
            Cookie: 'TLKGUID=8e63457f-a9d3-4f10-8fe9-7de2aad486da; JSESSIONID=A1E00D158E74934035DEA4E62D720BB4-n1; route=d9d00f487c5de3a17d549d648a1703f9; cookie2=value; cookie3=value;'
          }
        })
      )
    }
  }
}
