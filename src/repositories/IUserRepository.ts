import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUserRepository {

    create(data: ICreateUserDTO): Promise<void>;
    findById(id: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
    listAll(): Promise<User[]>;
}