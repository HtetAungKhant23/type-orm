import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveEmail1711382372229 implements MigrationInterface {
    name = 'RemoveEmail1711382372229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" text NOT NULL`);
    }

}
