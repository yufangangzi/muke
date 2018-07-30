import Vuex from 'vuex'
import defaultstate from './state/state'
import mutations from './mutations/mutation'
import getters from './getters/getters'
import actions from './actions/actions'
const isDev = process.env.NODE_ENV === 'development'
export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 参数为true  的时候 不允许直接改变 store 的内容  为false 时可以 一般在开发环境禁止掉
    state: defaultstate,
    mutations,
    getters,
    actions
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutation',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutation').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
