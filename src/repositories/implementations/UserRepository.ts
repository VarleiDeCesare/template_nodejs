import { createQueryBuilder, getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, username, password, email }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            password
        });

        await this.repository.save(user);
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.repository.findOne({ username })
        return user;
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id);
    }

    async listAll(): Promise<User[]> {
        return await this.repository
            .createQueryBuilder("users")
            .select(["users.name", "users.username", "users.email"])
            .getMany();
    }
}

export { UserRepository };
