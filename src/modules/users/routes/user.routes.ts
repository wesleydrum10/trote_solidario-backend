import {Router} from 'express';
import UserController from '../controllers/UserController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAuthenticated from '../../../shared/middleware/isAuthenticated';

let userRouter = Router()

let userController = new UserController()

userRouter.get('/', isAuthenticated, userController.index) 

userRouter.get('/:id_usuario', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_usuario: Joi.string().uuid().required()
    }
}),
userController.show)

userRouter.post('/',
celebrate({
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        password: Joi.string().required(),
        nome_usuario: Joi.string().required(),
        ocupacao_usuario: Joi.string().required(),
        departamento_usuario: Joi.string().required()
    }
}),
userController.create)

userRouter.delete('/:id_usuario', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_usuario: Joi.string().uuid().required()
    }
}),
userController.delete)

userRouter.put('/:id_usuario', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_usuario: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        password: Joi.string().required(),
        nome_usuario: Joi.string().required(),
        ocupacao_usuario: Joi.string().required(),
        departamento_usuario: Joi.string().required()
    }
}),
userController.update)

export default userRouter