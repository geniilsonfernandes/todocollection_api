import { Router } from "express";
import { CreateUserController } from "./modules/users/useCases/CreateUser/CreateUserController";

const routes = Router();

const userControler = new CreateUserController();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.get("/user", userControler.handle);

export default routes;
