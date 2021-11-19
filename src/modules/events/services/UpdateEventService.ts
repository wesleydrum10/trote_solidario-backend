import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Event from "../typeorm/entities/Event";
import EventRepository from "../typeorm/repositories/EventRepository";

interface IRequest {
    id_evento: string,
    cod_sala: number,
    cod_usuario: number,
    data_evento: Date,
    descricao_evento: string,
    titulo_evento: string
}

class UpdateEventService {
    public async execute({id_evento, cod_sala, cod_usuario, data_evento, descricao_evento, titulo_evento}: IRequest): Promise<Event>{
        
        let eventRepository = getCustomRepository(EventRepository)
        let eventExists = await eventRepository.findOne(id_evento)
        
        if (!eventExists){
            throw new AppError('Evento não existe')
        }
        
        eventExists.cod_sala = cod_sala
        eventExists.cod_usuario = cod_usuario
        eventExists.data_evento = data_evento
        eventExists.descricao_evento = descricao_evento
        eventExists.titulo_evento = titulo_evento
        
        await eventRepository.save(eventExists)
        return eventExists
    }
}

export default UpdateEventService