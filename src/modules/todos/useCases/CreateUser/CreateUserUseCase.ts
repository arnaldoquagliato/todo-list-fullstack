import { IUserRepository } from "../../repositories/IUserRepository";


interface IRequest {
    name: string,
}

class CreateUserUseCase {

    constructor(private userCategory: IUserRepository){}

    execute({name}: IRequest): void{

      this.userCategory.create({name})
    }
}


export {CreateUserUseCase}