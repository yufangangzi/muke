import request from './index'

// const aiqiyilist = 'https://pcw-api.iqiyi.com/video/recommend/personalmovie?page_id=1&display_size=20&language=chs&location_mode=cn&area=shad&rltfmt=json&entity_source=all&pay_type=31&play_platform=PC_QIYI&is_vip=0&uid=78c6db0b3a010433f71a462692f067e4&pru=1328919509&ppuid=1328919509&callback=window.Q.__callbacks__.cbd8ml11'
// const aList = 'https://pcw-api.iqiyi.com/video/recommend/personalmovie?page_id=1&display_size=20&language=chs&location_mode=cn&area=shad&rltfmt=json&entity_source=all&pay_type=31&play_platform=PC_QIYI&is_vip=0'
const getList = () => {
  return request.get('video/list')
}
export {getList}
