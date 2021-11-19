import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppErrors";
import authConfig from '../../config/auth'

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
    
    let authHeaders = request.headers.authorization 

    if (!authHeaders){
        throw new AppError(`JWT Token is missing`)
    }

    let [, token] = authHeaders.split(' ') 

    try { 
        let decodedToken = verify(token, authConfig.jwt.secret)
        return next()
    }
    catch { 
        throw new AppError(`Invalid JWT Token`)
    }
}