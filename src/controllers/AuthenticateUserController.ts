import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserService } from '../services/authenticate/AuthenticateUserService';

export class AuthenticateUserController {

    async create(request: Request, response: Response): Promise<Response> {
        const { password, username } = request.body;

        const authenticateUserService = container.resolve(AuthenticateUserService);

        const token = await authenticateUserService.execute({ username, password });

        return response.status(200).json(token);
    }
}