import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Notice from "../typeorm/entities/Notice";
import NoticeRepository from "../typeorm/repositories/NoticeRepository";


interface IRequest {
    id_aviso: string
}

class ShowNoticeService {

    public async execute({id_aviso}: IRequest): Promise<Notice> {

        let noticeRepository = getCustomRepository(NoticeRepository)
        let notice = await noticeRepository.findOne(id_aviso)
        
        if (!notice){
            throw new AppError('Aviso não existe')
        }
        return notice;
    }

}

export default ShowNoticeService;