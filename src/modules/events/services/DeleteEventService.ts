import { getCustomRepository } from 'typeorm';
import AppError from "../../../shared/errors/AppErrors";
import EventRepository from '../typeorm/repositories/EventRepository';

interface IRequest {
    id_evento: string
}

class DeleteEventService {

    public async execute({id_evento}: IRequest): Promise<void>{

        let eventRepository = getCustomRepository(EventRepository)
        let event = await eventRepository.findOne(id_evento)

        if(!event){
            throw new AppError(`Este evento não existe`)
        }
        await eventRepository.remove(event)
    }

}

export default DeleteEventService