import {Router} from 'express'
import eventRouter from '../../../modules/events/routes/event.routes'
import noticeRouter from '../../../modules/notices/routes/notice.routes'
import productRouter from '../../../modules/products/routes/product.routes'
import userRouter from '../../../modules/users/routes/user.routes'
import sessionUserRouter from '../../../modules/users/routes/session.routes'

let routes = Router()

routes.use('/events', eventRouter)
routes.use('/notices', noticeRouter)
routes.use('/products', productRouter)
routes.use('/users', userRouter)
routes.use('/session', sessionUserRouter)

export default routes;

