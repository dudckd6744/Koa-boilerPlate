import koa from "koa"

class App {
    app;
    constructor(){
        this.app = new koa();
    }

    listen() {
        // this.app = koa()
        this.app.listen(3000, ()=>{console.log("Example app listening at http://localhost:3000")})

    }
}

const app = new App()
app.listen()