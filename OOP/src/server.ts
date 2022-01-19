import UserComponent from "./api/user/component";
import App from "./index";
import { initializeDatabase } from "./libs/database";

async function start() {
  await initializeDatabase();
  const app = new App([new UserComponent()]);
  app.listen();
}

start();
