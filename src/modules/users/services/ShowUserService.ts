import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";


interface IRequest {
    cod_usuario: string,
    password: string
}

class ShowUserService {

    public async execute({cod_usuario, password}: IRequest): Promise<String> {

        let userRepository = getCustomRepository(UserRepository)
        let user = await userRepository.findByCod(cod_usuario)
        
        if (user){

            const validatingPassword = await compare(password, user.password)
            
            if (validatingPassword) {
                return "Usuário Ok"
            }
            else {
                return "Usuário/Senha inválidos"
            }
        }
        else {
            return "Usuário/Senha inválidos"
        }
    }

}

export default ShowUserService;