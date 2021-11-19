import { getCustomRepository } from 'typeorm';
import AppError from "../../../shared/errors/AppErrors";
import ProductRepository from '../typeorm/repositories/ProductRepository';

interface IRequest {
    id_produto: string
}

class DeleteProductService {

    public async execute({id_produto}: IRequest): Promise<void>{

        let productRepository = getCustomRepository(ProductRepository)
        let product = await productRepository.findOne(id_produto)

        if(!product){
            throw new AppError(`Este produto não existe`)
        }
        await productRepository.remove(product)
    }

}

export default DeleteProductService