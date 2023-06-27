import { MigrationInterface, QueryRunner } from "typeorm";

export class default1687893296617 implements MigrationInterface {
    name = 'default1687893296617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" ADD "user_id" text NOT NULL`);
    }

}
