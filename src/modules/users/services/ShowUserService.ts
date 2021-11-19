import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";


interface IRequest {
    id_usuario: string
}

class ShowUserService {

    public async execute({id_usuario}: IRequest): Promise<User> {

        let userRepository = getCustomRepository(UserRepository)
        let user = await userRepository.findOne(id_usuario)
        
        if (!user){
            throw new AppError('Usuário não existe')
        }
        return user;
    }

}

export default ShowUserService;