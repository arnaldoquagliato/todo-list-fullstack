import {Router} from "express";
import { createTodoController } from "../modules/todos/useCases/CreateTodo";
import { listTodoController } from "../modules/todos/useCases/ListTodo";

const todoRoutes = Router();

todoRoutes.post("/", (req, resp) => {
    return createTodoController.handle(req, resp);
})


todoRoutes.get("/", (req, resp) => {
    return listTodoController.handle(req, resp);
})

export { todoRoutes }