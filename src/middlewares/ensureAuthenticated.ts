import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppErrors";
interface IPayload {
    sub: string
}


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(400).json({ error: "Token Missing" })
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "00b712ab088cf90525ccc95e7ba0fa21") as IPayload;

        request.user = {
            id: user_id
        }
        next()
    }
    catch {
        return response.status(400).json({ error: "Invalid Token" })
    }
}