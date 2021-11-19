import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import {errors} from 'celebrate'
import AppError from '../../shared/errors/AppErrors'

var cors = require('cors')

let servidor = express();

import routes from './routes/routes'

servidor.use(express.json())

servidor.use(cors())

servidor.use(routes)

servidor.use(errors())

import './../typeorm'

servidor.use(
    (error:Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError){ 
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        console.log(error)
        
        return response.status(500).json({
            status:'error',
            message: 'Internal server error'
        })
    }
)

servidor.listen(3333, () => {
    console.log(`Server up and running`)
})

