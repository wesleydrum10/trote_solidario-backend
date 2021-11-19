import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
    id_produto: string,
    cod_usuario: number,
    descricao_produto: string,
    nome_produto: string,
    quantidade_produto: number
}

class UpdateProductService {
    public async execute({id_produto, 
                          cod_usuario, 
                          descricao_produto, 
                          nome_produto,
                          quantidade_produto}: IRequest): Promise<Product>{
        
        let productRepository = getCustomRepository(ProductRepository)
        let productExists = await productRepository.findOne(id_produto)
        
        if (!productExists){
            throw new AppError('Produto não existe')
        }

        productExists.id_produto = id_produto
        productExists.cod_usuario = cod_usuario
        productExists.descricao_produto = descricao_produto
        productExists.nome_produto = nome_produto
        productExists.quantidade_produto = quantidade_produto

        await productRepository.save(productExists)
        return productExists
    }
}

export default UpdateProductService