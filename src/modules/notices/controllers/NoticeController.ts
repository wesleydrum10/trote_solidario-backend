import { Request, Response } from "express";
import CreateNoticeService from "../services/CreateNoticeService";
import DeleteNoticeService from "../services/DeleteNoticeService";
import ListNoticeService from "../services/ListNoticeService";
import ShowNoticeService from "../services/ShowNoticeService";
import UpdateNoticeService from "../services/UpdateNoticeService";
   
export default class NoticeController {
    
    public async create(request: Request, response: Response): Promise<Response> {
        
        let {cod_usuario, descricao_aviso, titulo_aviso, prazo_aviso, data_aviso,departamento_aviso} = request.body
        
        let createNotice = new CreateNoticeService();
        let newNotice = await createNotice.execute({
            cod_usuario, 
            descricao_aviso, 
            titulo_aviso, 
            prazo_aviso, 
            data_aviso,
            departamento_aviso
        })

        return response.json(newNotice)
    }

    public async delete(request: Request, response: Response): Promise<Response>{

        let {id_aviso} = request.params
        let deleteNoticeService = new DeleteNoticeService()
        await deleteNoticeService.execute({ id_aviso } )

        return response.json([])
    }
    
    public async index(request: Request, response: Response): Promise<Response>{

        let listNoticeService = new ListNoticeService()
        let notices = await listNoticeService.execute();
        return response.json(notices);
    }

    public async show(request: Request, response: Response): Promise<Response>{

        let {id_aviso} = request.params
        let showNoticeService = new ShowNoticeService()
        let notice = await showNoticeService.execute({id_aviso});
        return response.json(notice);
    }

    public async update(request: Request, response: Response): Promise<Response>{

        let {id_aviso} = request.params
        let {cod_usuario, descricao_aviso, titulo_aviso, prazo_aviso, data_aviso,departamento_aviso} = request.body
        let updateService = new UpdateNoticeService() 
        let notice = await updateService.execute({id_aviso, cod_usuario, descricao_aviso, titulo_aviso, prazo_aviso, data_aviso,departamento_aviso})
        
        return response.json(notice)
    }
}