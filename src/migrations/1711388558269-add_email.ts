import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmail1711388558269 implements MigrationInterface {
    name = 'AddEmail1711388558269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
