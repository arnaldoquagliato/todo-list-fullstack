import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";


class ListUserUseCase {
    constructor(private userRespository: IUserRepository){}

    execute(): User[]{
        const users = this.userRespository.list();
        
        return users
    }
}


export {ListUserUseCase}