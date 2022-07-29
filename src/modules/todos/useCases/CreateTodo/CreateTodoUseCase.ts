import { ITodoRepository } from "../../repositories/ITodoRepository";


interface IRequest {
    description: string
}

class CreateTodoUseCase {

    constructor(private todoRepository: ITodoRepository){}

    execute({description}: IRequest): void{
        this.todoRepository.create({description})
    }
}


export {CreateTodoUseCase}