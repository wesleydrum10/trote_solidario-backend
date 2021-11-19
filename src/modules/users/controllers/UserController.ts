import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";
import UpdateUserService from "../services/UpdateUserService";
   
export default class UserController {
    
    public async create(request: Request, response: Response): Promise<Response> {
        
        let {id_usuario, cod_usuario, password, nome_usuario, ocupacao_usuario, departamento_usuario} = request.body
        let createUser = new CreateUserService();

        let newUser = await createUser.execute({
            id_usuario,
            cod_usuario,
            password,
            nome_usuario, 
            ocupacao_usuario,
            departamento_usuario
        })

        return response.json(newUser)
    }

    public async delete(request: Request, response: Response): Promise<Response>{

        let {id_usuario} = request.params
        let deleteUserService = new DeleteUserService()
        await deleteUserService.execute({ id_usuario } )

        return response.json([])
    }
    
    public async index(request: Request, response: Response): Promise<Response>{

        let listUserService = new ListUserService()
        let users = await listUserService.execute();
        return response.json(users);
    }

    public async show(request: Request, response: Response): Promise<Response>{

        let {id_usuario} = request.params
        let showUserService = new ShowUserService()
        let user = await showUserService.execute({id_usuario});
        return response.json(user);
    }

    public async update(request: Request, response: Response): Promise<Response>{

        let {id_usuario} = request.params
        let {cod_usuario, password, nome_usuario, ocupacao_usuario, departamento_usuario} = request.body
        let updateService = new UpdateUserService() 
        let user = await updateService.execute({id_usuario, cod_usuario, password, nome_usuario, ocupacao_usuario, departamento_usuario})
        
        return response.json(user)
    }
}