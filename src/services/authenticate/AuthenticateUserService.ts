import { inject, injectable } from "tsyringe";
import { AppError } from "../../errors/AppErrors";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
    username: string;
    password: string;
}

@injectable()
export class AuthenticateUserService {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository
    ) { }
    async execute({ username, password }: IRequest) {
        const user = await this.usersRepository.findByUsername(username);

        if (!user) {
            throw new AppError("Email or password incorrect", 400);
        }

        if (!await compare(password, user.password)) {
            throw new AppError("Email or password incorrect", 400);
        }

        const token = sign({}, "00b712ab088cf90525ccc95e7ba0fa21", {
            subject: user.id,
            expiresIn: "1d"
        });
        const tokenReturn = {
            token,
            user: {
                name: user.name,
                username: user.username
            }
        };
        return tokenReturn;
    }
}