import { User } from "../../model/User"
import { IUserRepository, IUserRepositoryDTO } from "../IUserRepository";

class UserRepository implements IUserRepository{
    
    private users: User[]

    private static INSTANCE: UserRepository;

    private constructor(){
        this.users = []
    }

    public static getInstance(): UserRepository{
        if(!UserRepository.INSTANCE){
            UserRepository.INSTANCE = new UserRepository()
        }

        return UserRepository.INSTANCE
    }

    // IMPLEMENT METHODS
    // findByName(name: string): User | boolean{
    //     const user =  this.users.find(user => user.name === name);
        
    //     if(user) return user
        
    //     return false
    // }

    list(){
        return this.users;
    }

    create({name}: IUserRepositoryDTO):void{
        const category = new User();

        Object.assign(category, {
            name,
            created_at: new Date()
        })

     this.users.push(category)
    }
}


export {UserRepository}