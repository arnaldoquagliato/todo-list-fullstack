import { Todo } from "../../model/Todo";
import { ITodoRepository } from '../../repositories/ITodoRepository'

class ListTodoUseCase{
    constructor(private todoRepository: ITodoRepository ){}

    execute(){
        return this.todoRepository.list()    
    }
}



export {ListTodoUseCase}