import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

@EntityRepository(Product)
export default class ProductRepository extends Repository<Product> {
    
    public async findByName(nome_produto: string): Promise<Product | undefined> {

        const product = await this.findOne({
            where: {
                nome_produto
            }
        })

        return product;
    } 
}
