import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '../services/users/CreateUserService';
import { ListUsersService } from '../services/users/ListUsersService';



export class UserController {

    async create(request: Request, response: Response): Promise<Response> {
        const createUserService = container.resolve(CreateUserService);
        const { name, username, email, password } = request.body;

        await createUserService.execute({
            name,
            username,
            email,
            password
        });

        return response.status(200).send();
    }

    async listAll(request: Request, response: Response): Promise<Response> {
        const listUsersService = container.resolve(ListUsersService);
        return response.status(200).json(await listUsersService.execute());

    }



}