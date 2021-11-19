import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1632261882652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id_produto',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'cod_usuario',
                    type: 'int',
                },
                {
                    name: 'descricao_produto',
                    type: 'varchar'
                },
                {
                    name: 'nome_produto',
                    type: 'varchar'
                },
                {
                    name: 'quantidade_produto',
                    type: 'int'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
    }

}
