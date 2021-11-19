import { EntityRepository, Repository } from "typeorm";
import Notice from "../entities/Notice";

@EntityRepository(Notice)
export default class NoticeRepository extends Repository<Notice> {
    
    public async findByName(titulo_aviso: string): Promise<Notice | undefined> {

        const notice = await this.findOne({
            where: {
                titulo_aviso
            }
        })

        return notice;
    } 
}
