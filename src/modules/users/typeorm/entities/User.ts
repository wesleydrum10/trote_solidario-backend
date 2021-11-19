import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id_usuario: string

    @Column()
    cod_usuario: number

    @Column()
    nome_usuario: string
    
    @Column()
    password: string

    @Column()
    ocupacao_usuario: string

    @Column()
    departamento_usuario: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default User