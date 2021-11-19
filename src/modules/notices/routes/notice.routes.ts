import {Router} from 'express';
import NoticeController from '../controllers/NoticeController';
import {celebrate, Joi, Segments} from 'celebrate';
import isAuthenticated from '../../../shared/middleware/isAuthenticated';

let noticeRouter = Router()

let noticeController = new NoticeController()

noticeRouter.get('/', isAuthenticated, noticeController.index) 
noticeRouter.get('/:id_aviso',
celebrate({
    [Segments.PARAMS]: {
        id_aviso: Joi.string().uuid().required()
    }
}),
noticeController.show)

noticeRouter.post('/', isAuthenticated,
celebrate({
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        descricao_aviso: Joi.string().required(),
        titulo_aviso: Joi.string().required(),
        prazo_aviso: Joi.date().required(),
        data_aviso: Joi.date().required(),
        departamento_aviso: Joi.string().required()
    }
}),
noticeController.create)

noticeRouter.delete('/:id_aviso', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_aviso: Joi.string().uuid().required()
    }
}),
noticeController.delete)

noticeRouter.put('/:id_aviso', isAuthenticated,
celebrate({
    [Segments.PARAMS]: {
        id_aviso: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        descricao_aviso: Joi.string().required(),
        titulo_aviso: Joi.string().required(),
        prazo_aviso: Joi.date().required(),
        data_aviso: Joi.date().required(),
        departamento_aviso: Joi.string().required()
    }
}),
noticeController.update)

export default noticeRouter