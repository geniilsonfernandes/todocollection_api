import { MigrationInterface, QueryRunner } from "typeorm";

export class default1687643165516 implements MigrationInterface {
    name = 'default1687643165516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "collections" DROP CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "collections" ADD CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "collections" ADD CONSTRAINT "FK_da613d6625365707f8df0f65d81" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collections" DROP CONSTRAINT "FK_da613d6625365707f8df0f65d81"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "collections" DROP CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e"`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "collections" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "collections" ADD CONSTRAINT "PK_21c00b1ebbd41ba1354242c5c4e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "collections" DROP COLUMN "userId"`);
    }

}
