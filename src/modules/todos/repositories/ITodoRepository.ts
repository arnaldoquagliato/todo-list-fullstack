import { Todo } from "../model/Todo";


interface  ITodoRepositoryDTO {
    description: string;
}

interface  ITodoRepository {
    // IMPLEMENTS METHODS FOR TODO
    create({description}: ITodoRepositoryDTO):void
    list():Todo[]
    // findByName(name: string): Todo | boolean
}
export {ITodoRepositoryDTO, ITodoRepository}