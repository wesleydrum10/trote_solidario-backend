import { getCustomRepository } from "typeorm";
import Event from "../typeorm/entities/Event";
import EventRepository from "../typeorm/repositories/EventRepository";

class ListEventService {

    public async execute(): Promise<Event[]> {

        let eventRepository = getCustomRepository(EventRepository)
        let events = await eventRepository.find();
        
        return events;
    }
}

export default ListEventService;

