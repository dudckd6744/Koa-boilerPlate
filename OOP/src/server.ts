import UserComponent from "./api/user/component";
import App from "./index"

async function start (){
    const app = new App([new UserComponent()]);
    app.listen();
}

start()