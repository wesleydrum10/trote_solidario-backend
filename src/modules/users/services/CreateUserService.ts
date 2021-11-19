import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import AppError from "../../../shared/errors/AppErrors";
import UserRepository from '../typeorm/repositories/UserRepository';
import {hash} from 'bcryptjs'

interface IRequest {
    id_usuario: string,
    cod_usuario: number,
    password: string,
    nome_usuario: string,
    ocupacao_usuario: string,
    departamento_usuario: string
}

class CreateUserService {

    public async execute({cod_usuario, password, nome_usuario, ocupacao_usuario, departamento_usuario}: IRequest): Promise<User>{
        let userRepository = getCustomRepository(UserRepository)

        let userExist = await userRepository.findByCod(cod_usuario)
        if(userExist){
            throw new AppError(`Este usuário já está cadastrado`)
        }

        let hashedPassword = await hash(password, 8)

        let newUser = userRepository.create({
            cod_usuario,
            password: hashedPassword,
            nome_usuario, 
            ocupacao_usuario,
            departamento_usuario
        })

        await userRepository.save(newUser)
        return newUser
    }

}

export default CreateUserService
