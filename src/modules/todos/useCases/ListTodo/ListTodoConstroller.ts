import {Request, Response} from 'express'
import { ListTodoUseCase } from "./ListTodoUseCase";

class ListTodoController {
    constructor(private listTodoUseCase: ListTodoUseCase){}

    handle(req: Request, resp: Response): Response{
        const all = this.listTodoUseCase.execute()

        return resp.json(all)
    }

}


export {ListTodoController}