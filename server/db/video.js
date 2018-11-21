const axios = require('axios')
const request = axios.create({
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
    async getVideoList (data) {
      return handLeRequest(
        await request.get(`https://pcw-api.iqiyi.com/video/recommend/personalmovie?page_id=1&display_size=20&language=chs&location_mode=cn&area=shad&rltfmt=json&entity_source=all&pay_type=31&play_platform=PC_QIYI&is_vip=0`)
      )
    }
  }
}
