import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      context.meta = app.$meta()
      resolve(app)
      // Promise.all(matchedComponents.map(Component => {
      //   if (Component.asyncData) {
      //     return Component.asyncData({
      //       route: router.currentRoute,
      //       router,
      //       store
      //     })
      //   }
      // })).then(data => {
      //   context.meta = app.$meta()
      //   context.state = store.state
      //   context.router = router
      //   resolve(app)
      // })
    })
  })
}
