import { Request, Response } from "express";
import { CreateTodoUseCase } from "./CreateTodoUseCase";


class CreateTodoController {
    
    constructor(private createTodoUseCase: CreateTodoUseCase){}

    handle(request: Request, response:Response): Response{
        const {description} = request.body

        this.createTodoUseCase.execute({description})    
        
        return response.status(201).send()
    }
}


export {CreateTodoController}