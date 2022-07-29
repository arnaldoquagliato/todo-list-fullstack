import { ListTodoController } from "./ListTodoConstroller";
import { ListTodoUseCase } from "./ListTodoUseCase"
import { TodoRepository } from "../../repositories/implementations/TodoRepository";

const todoRepository = TodoRepository.getInstance();
const listTodoUseCase = new ListTodoUseCase(todoRepository);
const listTodoController = new ListTodoController(listTodoUseCase);

export {listTodoController}
