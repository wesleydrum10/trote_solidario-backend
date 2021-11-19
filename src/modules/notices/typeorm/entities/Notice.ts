import {
    Column,
    Entity,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
}
from "typeorm";

@Entity('notices')
class Notice {
    @PrimaryGeneratedColumn('uuid')
    id_aviso: string

    @Column('int')
    cod_usuario: number

    @Column()
    descricao_aviso: string

    @Column()
    titulo_aviso: string

    @Column()
    prazo_aviso: Date

    @Column()
    data_aviso: Date

    @Column()
    departamento_aviso: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Notice
