import {Router} from 'express';
import ProductController from '../controllers/ProductController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAuthenticated from '../../../shared/middleware/isAuthenticated';

let productRouter = Router()

let productController = new ProductController()

productRouter.get('/', isAuthenticated, productController.index) 
productRouter.get('/:id_produto',
celebrate({
    [Segments.PARAMS]: {
        id_produto: Joi.string().uuid().required()
    }
}),
productController.show)

productRouter.post('/', isAuthenticated,
celebrate({
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        descricao_produto: Joi.string().required(),
        nome_produto: Joi.string().required(),
        quantidade_produto: Joi.number().required()
    }
}),
productController.create)

productRouter.delete('/:id_produto', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_produto: Joi.string().uuid().required()
    }
}),
productController.delete)

productRouter.put('/:id_produto', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_produto: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        descricao_produto: Joi.string().required(),
        nome_produto: Joi.string().required(),
        quantidade_produto: Joi.number().required()
    }
}),
productController.update)

export default productRouter