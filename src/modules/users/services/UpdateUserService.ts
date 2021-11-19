import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";

interface IRequest {
    id_usuario: string,
    cod_usuario: number,
    password: string,
    nome_usuario: string,
    ocupacao_usuario: string,
    departamento_usuario: string
}

class UpdateUserService {
    public async execute({id_usuario,
                          cod_usuario, 
                          password,
                          nome_usuario, 
                          ocupacao_usuario, 
                          departamento_usuario}: IRequest): Promise<User>{
        
        let userRepository = getCustomRepository(UserRepository)
        let userExists = await userRepository.findOne(id_usuario)
        
        if (!userExists){
            throw new AppError('Usuário não existe')
        }

        userExists.cod_usuario = cod_usuario
        userExists.password = password
        userExists.nome_usuario = nome_usuario
        userExists.ocupacao_usuario = ocupacao_usuario
        userExists.departamento_usuario = departamento_usuario

        await userRepository.save(userExists)
        return userExists
    }
}

export default UpdateUserService