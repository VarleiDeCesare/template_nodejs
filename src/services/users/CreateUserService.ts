import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { AppError } from "../../errors/AppErrors";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) { }
    async execute({ name, email, username, password }: ICreateUserDTO): Promise<void> {


        if (await this.userRepository.findByUsername(username)) {
            throw new Error("User with this username already exists!")
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            username,
            password: passwordHash,
            email,
        });
    };
}
