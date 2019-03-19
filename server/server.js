const Koa = require('koa')
const send = require('koa-send')
const path = require('path')

const koaBody = require('koa-body')
// const pageRouter = require('./routers/dev-ssr')
// var history = require('connect-history-api-fallback')
const staticRouter = require('./routers/static')
const assetsRouter = require('./routers/assets')

const {apiRouter, singRouter, videoRouter, userRouter} = require('./routers/api.js')

const createDb = require('./db/db')
const config = require('../app.config')

const creatSing = require('./db/sing')
const sing = creatSing()

const creatVideo = require('./db/video')
const video = creatVideo()

const createUser = require('./db/user')
const user = createUser()

const db = createDb(config.db.appId, config.db.appKey)
const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      // next('/')
      ctx.body = 'please try again later'
    }
  }
})
app.use(async (ctx, next) => {
  ctx.db = db
  ctx.sing = sing
  ctx.video = video
  ctx.user = user
  await next()
})
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', path.join(__dirname, '../'))
  } else {
    await next()
  }
})
app.use(koaBody())
app.use(staticRouter.routes()).use(staticRouter.allowedMethods())

app.use(assetsRouter.routes()).use(assetsRouter.allowedMethods())
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
app.use(singRouter.routes()).use(singRouter.allowedMethods())
app.use(videoRouter.routes()).use(videoRouter.allowedMethods())
app.use(userRouter.routes()).use(userRouter.allowedMethods())

let pageRouter
if (isDev) {
  pageRouter = require('./routers/dev-ssr')
} else {
  // pageRouter = require('./routers/ssr')
  pageRouter = require('./routers/ssr-no-bundle')
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
