import { Router } from "express";
import { userRoutes } from "./user.routes";
import { todoRoutes } from "./todo.routes";

const router = Router();


router.use("/user", userRoutes)
router.use("/todo", todoRoutes)

export {router}
