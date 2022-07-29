 import { User } from "../model/User";

 
 interface IUserRepositoryDTO {
     //ATRIBUTES TO IMPLEMENT IN USER
     name: string
 }

 interface IUserRepository{
     //METHODES TO IMPLEMENT
    //  findByName(name: string): User | boolean;
    create({ name }: IUserRepositoryDTO): void;
    list(): User[];
 }

export { IUserRepository, IUserRepositoryDTO }