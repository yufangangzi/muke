const Router = require('koa-router')
const apiRouter = new Router({prefix: '/api'})

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
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

module.exports = apiRouter
