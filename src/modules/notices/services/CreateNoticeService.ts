import { getCustomRepository } from 'typeorm';
import Notice from '../typeorm/entities/Notice';
import AppError from "../../../shared/errors/AppErrors";
import NoticeRepository from '../typeorm/repositories/NoticeRepository';

interface IRequest {
    cod_usuario: number,
    descricao_aviso: string,
    titulo_aviso: string,
    prazo_aviso: Date,
    data_aviso: Date,
    departamento_aviso: string
}

class CreateNoticeService {

    public async execute({cod_usuario, descricao_aviso, titulo_aviso, prazo_aviso, data_aviso,departamento_aviso}: IRequest): Promise<Notice>{
        let noticeRepository = getCustomRepository(NoticeRepository)

        let noticeExist = await noticeRepository.findByName(titulo_aviso)
        if(noticeExist){
            throw new AppError(`Já existe aviso com este nome`)
        }

        let newNotice = noticeRepository.create({
            cod_usuario,
            descricao_aviso, 
            titulo_aviso,
            prazo_aviso,
            data_aviso,
            departamento_aviso
            
        })

        await noticeRepository.save(newNotice)
        return newNotice
    }

}

export default CreateNoticeService
