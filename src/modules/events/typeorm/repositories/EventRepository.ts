import { EntityRepository, Repository } from "typeorm";
import Event from "../entities/Event";

@EntityRepository(Event)
export default class EventRepository extends Repository<Event> {
    
    public async findByName(titulo_evento: string): Promise<Event | undefined> {

        const event = await this.findOne({
            where: {
                titulo_evento
            }
        })

        return event;
    } 
}