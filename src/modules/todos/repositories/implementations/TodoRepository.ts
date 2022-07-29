import { Todo } from "../../model/Todo";
import { ITodoRepository, ITodoRepositoryDTO } from "../ITodoRepository";


class TodoRepository implements ITodoRepository {
    
    private  todos: Todo[]

    private static INSTANCE: TodoRepository;
    
    constructor() {
        this.todos = []
    }

    public static getInstance(): TodoRepository{
        if(!TodoRepository.INSTANCE){
            TodoRepository.INSTANCE = new TodoRepository();
        }

        return TodoRepository.INSTANCE;
    }

    create({ description }: ITodoRepositoryDTO): void {
        const todo = new Todo();

        Object.assign(todo, {
            description,
            create_at: new Date(),
        })

        this.todos.push(todo)
    }

    list(){
        return this.todos;
    }

}

export {TodoRepository}