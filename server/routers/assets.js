
const Router = require('koa-router')
const send = require('koa-send')

const assetsRouter = new Router({ prefix: '/assets' })

assetsRouter.get('/*', async ctx => {
  await send(ctx, '/client' + ctx.path)
})

module.exports = assetsRouter
