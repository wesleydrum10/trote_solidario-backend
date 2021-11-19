import { getCustomRepository } from "typeorm";
import Notice from "../typeorm/entities/Notice";
import NoticeRepository from "../typeorm/repositories/NoticeRepository";

class ListNoticeService {

    public async execute(): Promise<Notice[]> {

        let noticeRepository = getCustomRepository(NoticeRepository)
        let notices = await noticeRepository.find();
        
        return notices;
    }
}

export default ListNoticeService;

