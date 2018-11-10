const Router = require('koa-router')
const apiRouter = new Router({prefix: '/api'})

const successResponse = (data) => {
  return {
    success: true,
    data
  }
}
apiRouter
  .post('/todo', async (ctx) => {
    const data = await ctx.db.addTodo(ctx.request.body)
    ctx.body = successResponse(data)
  })
  .get('/todos', async (ctx) => {
    const todos = await ctx.db.getAllTodos()
    ctx.body = successResponse(todos)
  })

module.exports = apiRouter
