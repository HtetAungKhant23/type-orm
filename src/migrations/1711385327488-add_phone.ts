import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhone1711385327488 implements MigrationInterface {
    name = 'AddPhone1711385327488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
