import { MigrationInterface, QueryRunner } from "typeorm";

export class default1687893144009 implements MigrationInterface {
    name = 'default1687893144009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "user_id" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "description"`);
    }

}
