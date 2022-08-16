import { NextFunction, Request, response, Response } from "express";
import {verify} from "jsonwebtoken"

interface IPayload {
    sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        console.log("ue")
        return response.status(401).json({message: "Missing token"})
    }

    const [_, token] = authHeader.split(" ")
    try {
        const { sub } = verify(token, "backend-entregas-token-secret-key") as IPayload
        request.id_client = sub

        return next()
    } catch (error) {
        return response.status(401).json({message: "Invalid token"})
    }
}