import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
    
    constructor(private createUserUseCase: CreateUserUseCase){}

    handle(request: Request, response:Response): Response{
        const {name} = request.body

        this.createUserUseCase.execute({name})    
        
        return response.status(201).send()
    }
}


export {CreateUserController}