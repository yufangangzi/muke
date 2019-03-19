const Router = require('koa-router')
const apiRouter = new Router({prefix: '/api'})
const singRouter = new Router({prefix: '/mobileWeb'})
const videoRouter = new Router({prefix: '/video'})
const userRouter = new Router({prefix: '/user'})
const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
userRouter
  .post('/getUser', async (ctx) => {
    const data = await ctx.user.getUsers()
    ctx.body = successResponse(data)
  })
  .post('/addUser', async (ctx) => {
    const data = await ctx.user.addUser(ctx.request.body)
    ctx.body = successResponse(data)
  })
  .post('/deleteUser', async (ctx) => {
    const data = await ctx.user.deleteUser(ctx.request.body)
    ctx.body = successResponse(data)
  })
  .post('/updateUser', async (ctx) => {
    const data = await ctx.user.updateUser(ctx.request.body)
    ctx.body = successResponse(data)
  })
apiRouter
  .post('/reg', async (ctx) => {
    // 注册
    const data = await ctx.db.addTodo(ctx.request.body)
    ctx.body = successResponse(data)
  })
  .get('/users', async (ctx) => {
    // 获取用户
    const todos = await ctx.db.getAllTodos()
    ctx.body = successResponse(todos)
  })
singRouter
  .post('/activity/list.kg', async (ctx) => {
    console.log('9999999999999')
    const data = await ctx.sing.getSingList(ctx.request.body)
    ctx.body = successResponse(data)
  })
  .post('/ugc/info.kg', async (ctx) => {
    const data = await ctx.sing.getSingInfo(ctx.request.body)
    ctx.body = successResponse(data)
  })
videoRouter
  .get('/list', async (ctx) => {
    const data = await ctx.video.getVideoList()
    ctx.body = successResponse(data)
  })
module.exports = {apiRouter, singRouter, videoRouter, userRouter}
