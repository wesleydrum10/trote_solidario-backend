import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";


interface IRequest {
    id_produto: string
}

class ShowProductService {

    public async execute({id_produto}: IRequest): Promise<Product> {

        let productRepository = getCustomRepository(ProductRepository)
        let product = await productRepository.findOne(id_produto)
        
        if (!product){
            throw new AppError('Produto não existe')
        }
        return product;
    }

}

export default ShowProductService;