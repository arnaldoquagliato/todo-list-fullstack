//CONTINUAR A PARTIR DE CREATE TODO

import {Router} from "express";
import { createUserController } from "../modules/todos/useCases/CreateUser";
import { listUserController } from "../modules/todos/useCases/ListUser";

const userRoutes = Router();

userRoutes.post("/", (req, resp) => {
    return createUserController.handle(req, resp);
})

userRoutes.get("/", (req, resp) => {
    return listUserController.handle(req, resp);
})

export { userRoutes }