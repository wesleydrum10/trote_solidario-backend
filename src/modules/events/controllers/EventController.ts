import { Request, Response } from "express";
import CreateEventService from "../services/CreateEventService";
import DeleteEventService from "../services/DeleteEventService";
import ListEventService from "../services/ListEventService";
import ShowEventService from "../services/ShowEventService";
import UpdateEventService from "../services/UpdateEventService";
   
export default class EventController {
    
    public async create(request: Request, response: Response): Promise<Response> {
        
        let {cod_sala, cod_usuario, data_evento, descricao_evento, titulo_evento} = request.body
        
        let createEvent = new CreateEventService();
        let newEvent = await createEvent.execute({
            cod_sala, 
            cod_usuario, 
            data_evento, 
            descricao_evento, 
            titulo_evento
        })

        return response.json(newEvent)
    }

    public async delete(request: Request, response: Response): Promise<Response>{

        let {id_evento} = request.params
        let deleteEventService = new DeleteEventService()
        await deleteEventService.execute({ id_evento } )

        return response.json([])
    }
    
    public async index(request: Request, response: Response): Promise<Response>{

        let listEventService = new ListEventService()
        let events = await listEventService.execute();
        return response.json(events);
    }

    public async show(request: Request, response: Response): Promise<Response>{

        let {id_evento} = request.params
        let showEventService = new ShowEventService()
        let event = await showEventService.execute({id_evento});
        return response.json(event);
    }

    public async update(request: Request, response: Response): Promise<Response>{

        let {id_evento} = request.params
        let {cod_sala, cod_usuario, data_evento, descricao_evento, titulo_evento} = request.body
        let updateService = new UpdateEventService() 
        let event = await updateService.execute({id_evento, cod_sala, cod_usuario, data_evento, descricao_evento, titulo_evento})
        
        return response.json(event)
    }
}