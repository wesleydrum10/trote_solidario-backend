import { getCustomRepository } from 'typeorm';
import AppError from "../../../shared/errors/AppErrors";
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    id_usuario: string
}

class DeleteUserService {

    public async execute({id_usuario}: IRequest): Promise<void>{

        let userRepository = getCustomRepository(UserRepository)
        let user = await userRepository.findOne(id_usuario)

        if(!user){
            throw new AppError(`Usuário não existe`)
        }
        await userRepository.remove(user)
    }

}

export default DeleteUserService