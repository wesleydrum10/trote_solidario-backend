import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Event from "../typeorm/entities/Event";
import EventRepository from "../typeorm/repositories/EventRepository";


interface IRequest {
    id_evento: string
}

class ShowEventService {

    public async execute({id_evento}: IRequest): Promise<Event> {

        let eventRepository = getCustomRepository(EventRepository)
        let event = await eventRepository.findOne(id_evento)
        
        if (!event){
            throw new AppError('Evento não existe')
        }
        return event;
    }

}

export default ShowEventService;