import {
    Column,
    Entity,
    UpdateDateColumn,
    CreateDateColumn,
    PrimaryGeneratedColumn
} from 'typeorm'

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id_produto: string

    @Column('int')
    cod_usuario: number

    @Column()
    descricao_produto: string

    @Column()
    nome_produto: string

    @Column('int')
    quantidade_produto: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Product