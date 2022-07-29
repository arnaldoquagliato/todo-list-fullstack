import { TodoRepository } from "../../repositories/implementations/TodoRepository";
import { CreateTodoController } from "./CreateTodoController";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

const todoRepository = TodoRepository.getInstance();

const createTodoUseCase = new CreateTodoUseCase(todoRepository);

const createTodoController = new CreateTodoController(createTodoUseCase);



export {createTodoUseCase, createTodoController}

