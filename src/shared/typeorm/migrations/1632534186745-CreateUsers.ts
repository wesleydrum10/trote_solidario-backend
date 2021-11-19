import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1632534186745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id_usuario',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'cod_usuario',
                    type: 'int'
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'nome_usuario',
                    type: 'varchar',
                },
                {
                    name: 'ocupacao_usuario',
                    type: 'varchar'
                },
                {
                    name: 'departamento_usuario',
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
        await queryRunner.dropTable('users')
    }

}
