const koa = require("koa")
const Router = require("koa-router")

const app = new koa()
const router = new Router()

router.get("/", (ctx) => {
    ctx.body = "hellow word"
})

app.use(router.routes())
app.listen(2000)