import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import AppError from "../../../shared/errors/AppErrors";
import ProductRepository from '../typeorm/repositories/ProductRepository';

interface IRequest {
    cod_usuario: number,
    descricao_produto: string,
    nome_produto: string,
    quantidade_produto: number
}

class CreateProductService {

    public async execute({cod_usuario, descricao_produto, nome_produto, quantidade_produto}: IRequest): Promise<Product>{
        let productRepository = getCustomRepository(ProductRepository)

        let productExist = await productRepository.findByName(nome_produto)
        if(productExist){
            throw new AppError(`Já existe produto com este nome`)
        }

        let newProduct = productRepository.create({
            cod_usuario,
            descricao_produto, 
            nome_produto,
            quantidade_produto
        })

        await productRepository.save(newProduct)
        return newProduct
    }

}

export default CreateProductService
