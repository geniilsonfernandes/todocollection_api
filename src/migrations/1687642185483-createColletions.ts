import { MigrationInterface, QueryRunner } from "typeorm";

export class createColletions1687642185483 implements MigrationInterface {
    name = 'createColletions1687642185483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "collections" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "collections"`);
    }

}
