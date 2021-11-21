import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} 
from "typeorm";

@Entity('events')
class Event {
    @PrimaryGeneratedColumn('uuid')
    id_evento: string;  

    @Column('int')
    cod_sala: number;

    @Column()
    cod_usuario: string;

    @Column()
    data_evento: Date;

    @Column()
    descricao_evento: string;

    @Column()
    titulo_evento: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Event;