import { getCustomRepository } from 'typeorm';
import AppError from "../../../shared/errors/AppErrors";
import NoticeRepository from '../typeorm/repositories/NoticeRepository';

interface IRequest {
    id_aviso: string
}

class DeleteNoticeService {

    public async execute({id_aviso}: IRequest): Promise<void>{

        let noticeRepository = getCustomRepository(NoticeRepository)
        let notice = await noticeRepository.findOne(id_aviso)

        if(!notice){
            throw new AppError(`Este aviso não existe`)
        }
        await noticeRepository.remove(notice)
    }

}

export default DeleteNoticeService