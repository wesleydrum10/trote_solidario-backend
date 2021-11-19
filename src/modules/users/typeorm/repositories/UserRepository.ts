import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    
    public async findByCod(cod_usuario: number): Promise<User | undefined> {

        const user = await this.findOne({
            where: {
                cod_usuario
            }
        })

        return user;
    }
    
    public async findByPass(password: string): Promise<User | undefined> {
        
        const user = await this.findOne({
            where: {
                password
            }
        })

        return user
    }

    public async findById(id_usuario: string): Promise<User | undefined> {

        const user = await this.findOne({
            where: {
                id_usuario
            }
        })

        return user;
    }
}
