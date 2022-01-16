import koa from "koa";
import Route from "koa-router";
import bodyParser from "koa-bodyparser"

class App {
    app;
    router;
    constructor(controller){
        this.router = new Route()
        this.app = new koa();
        this.initializeBodyParser()
        this.initializeAuth()
        this.initializeErrHandling()
        this.initializeControllers(controller)
    }

    listen() {
        // this.app = koa()
        this.app.listen(3000, ()=>{console.log("Example app listening at http://localhost:3000")})

    }

    initializeBodyParser(){
        this.app.use(bodyParser())
    }

    initializeAuth(){
        // 인증 미들웨어
    }

    initializeErrHandling(){
        // exception 
    }

    initializeControllers(controller) {
        this.app.use(this.router.routes())

        const route = new Route()

        this.router.get("/",(ctx)=> {
            ctx.body= "ok"
        })
        controller.forEach(router=>{
            route.use(router)
        })
        this.router.use("/api", route.routes())
    }
}

export default App;