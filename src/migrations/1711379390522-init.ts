import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1711379390522 implements MigrationInterface {
  name = 'Init1711379390522';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
