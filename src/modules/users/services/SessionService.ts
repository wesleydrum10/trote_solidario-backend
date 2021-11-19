import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";
import {sign} from 'jsonwebtoken'
import authConfig from '../../../config/auth'

interface IRequest {
    cod_usuario: number,
    password: string
}

interface IResponse {
    user: User,
    token: string
}

class SessionService {
    
    public async execute({cod_usuario, password}: IRequest): Promise<IResponse> {
        let userRepository = getCustomRepository(UserRepository)

        let user = await userRepository.findByCod(cod_usuario)
        
        if (!user){ 
            throw new AppError(`Incorrect code user / password combination`, 401)
        }

        let passwordConfirmed = await compare(password, user.password)

        if (!passwordConfirmed){ 
            throw new AppError(`Incorrect code user / password combination`, 401)
        }

        let token = sign({}, authConfig.jwt.secret, {
            subject: user.id_usuario,
            expiresIn: authConfig.jwt.expiresIn
        })

        return {
            user, 
            token
        }
    }
}

export default SessionService