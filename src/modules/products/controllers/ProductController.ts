import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";
   
export default class ProductController {
    
    public async create(request: Request, response: Response): Promise<Response> {
        
        let {cod_usuario, descricao_produto, nome_produto, quantidade_produto} = request.body
        
        let createProduct = new CreateProductService();
        let newProduct = await createProduct.execute({
            cod_usuario,
            descricao_produto, 
            nome_produto,
            quantidade_produto
        })

        return response.json(newProduct)
    }

    public async delete(request: Request, response: Response): Promise<Response>{

        let {id_produto} = request.params
        let deleteProductService = new DeleteProductService()
        await deleteProductService.execute({ id_produto } )

        return response.json([])
    }
    
    public async index(request: Request, response: Response): Promise<Response>{

        let listProductService = new ListProductService()
        let products = await listProductService.execute();
        return response.json(products);
    }

    public async show(request: Request, response: Response): Promise<Response>{

        let {id_produto} = request.params
        let showProductService = new ShowProductService()
        let product = await showProductService.execute({id_produto});
        return response.json(product);
    }

    public async update(request: Request, response: Response): Promise<Response>{

        let {id_produto} = request.params
        let {cod_usuario, descricao_produto, nome_produto, quantidade_produto} = request.body
        let updateService = new UpdateProductService() 
        let product = await updateService.execute({id_produto, cod_usuario, descricao_produto, nome_produto, quantidade_produto})
        
        return response.json(product)
    }
}