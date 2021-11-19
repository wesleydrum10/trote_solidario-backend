import { getCustomRepository } from 'typeorm';
import Event from '../typeorm/entities/Event';
import AppError from "../../../shared/errors/AppErrors";
import EventRepository from '../typeorm/repositories/EventRepository';

interface IRequest {
    cod_sala: number,
    cod_usuario: number,
    data_evento: Date,
    descricao_evento: string,
    titulo_evento: string
}

class CreateEventService {

    public async execute({cod_sala, cod_usuario, data_evento, descricao_evento, titulo_evento}: IRequest): Promise<Event>{
        let eventRepository = getCustomRepository(EventRepository)

        let eventExist = await eventRepository.findByName(titulo_evento)
        if(eventExist){
            throw new AppError(`Já existe evento com este nome`)
        }

        let newEvent = eventRepository.create({
            cod_sala,
            cod_usuario, 
            data_evento,
            descricao_evento,
            titulo_evento
            
        })

        await eventRepository.save(newEvent)
        return newEvent
    }

}

export default CreateEventService