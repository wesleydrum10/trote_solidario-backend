import { Request, Response } from "express";
import SessionService from "../services/SessionService";

export default class SessionController {
   
    public async create(request: Request, response: Response): Promise<Response> {
        
        let {cod_usuario, password} = request.body
        
        let session = new SessionService();
        
        let user = await session.execute({
            cod_usuario,
            password
        })

        return response.json(user) 
    }


}