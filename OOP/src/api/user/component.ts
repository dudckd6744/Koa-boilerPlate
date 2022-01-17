import Router from "koa-router"
import InvalidAuthorizedTokenError from "../../exception/invalidAuthorizedTokenException";

export default class UserComponent {
    router = new Router()

    constructor() {
        this.initializeRouter();
      }
      initializeRouter() {
        const router = new Router();
        const path = '/user';
        router
            .get("/", this.test)
            .post("/post", this.postTest)
            
        this.router.use(path, router.routes());
      }
    test = (ctx)=>{
        ctx.body='ok1'
    }
    postTest = (ctx)=>{
      if(ctx.request.body.test == "@"){
        ctx.body = ctx.request.body
      }else{
       throw new InvalidAuthorizedTokenError("tt")
      }
    }
}