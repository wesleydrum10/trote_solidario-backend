import {Router} from 'express'
import SessionController from '../controllers/SessionController'
import {celebrate, Joi, Segments} from 'celebrate'

let sessionUserRouter = Router()
 
let sessionController = new SessionController()

sessionUserRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        cod_usuario: Joi.number().required(),
        password: Joi.string().required()
    }
}),
sessionController.create)

export default sessionUserRouter