import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNotices1632191102844 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'notices',
            columns: [
                {
                    name: 'id_aviso',
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
                    name: 'descricao_aviso',
                    type: 'varchar'
                },
                {
                    name: 'titulo_aviso',
                    type: 'varchar'
                },
                {
                    name: 'prazo_aviso',
                    type: 'timestamp with time zone'
                },
                {
                    name: 'data_aviso',
                    type: 'timestamp with time zone'
                },
                {
                    name: 'departamento_aviso',
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
        await queryRunner.dropTable('notices')
    }
}
