import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Notice from "../typeorm/entities/Notice";
import NoticeRepository from "../typeorm/repositories/NoticeRepository";

interface IRequest {
    id_aviso: string,
    cod_usuario: number,
    descricao_aviso: string,
    titulo_aviso: string,
    prazo_aviso: Date,
    data_aviso: Date,
    departamento_aviso: string
}

class UpdateNoticeService {
    public async execute({id_aviso, 
                          cod_usuario, 
                          descricao_aviso, 
                          titulo_aviso, 
                          prazo_aviso, 
                          data_aviso, 
                          departamento_aviso}: IRequest): Promise<Notice>{
        
        let noticeRepository = getCustomRepository(NoticeRepository)
        let noticeExists = await noticeRepository.findOne(id_aviso)
        
        if (!noticeExists){
            throw new AppError('Aviso não existe')
        }
    
        noticeExists.id_aviso = id_aviso
        noticeExists.cod_usuario = cod_usuario
        noticeExists.descricao_aviso = descricao_aviso
        noticeExists.titulo_aviso = titulo_aviso
        noticeExists.prazo_aviso = prazo_aviso
        noticeExists.data_aviso = data_aviso
        noticeExists.departamento_aviso = departamento_aviso   

        await noticeRepository.save(noticeExists)
        return noticeExists
    }
}

export default UpdateNoticeService