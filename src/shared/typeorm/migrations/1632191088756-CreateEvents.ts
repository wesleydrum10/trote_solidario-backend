import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1632191088756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'events',
            columns: [
                {
                    name: 'id_evento',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'cod_sala',
                    type: 'int',
                },
                {
                    name: 'cod_usuario',
                    type: 'int'
                },
                {
                    name: 'data_evento',
                    type: 'timestamp with time zone'
                },
                {
                    name: 'descricao_evento',
                    type: 'varchar'
                },
                {
                    name: 'titulo_evento',
                    type: 'varchar'
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
        await queryRunner.dropTable('events')
    }
}
