import { MigrationInterface, QueryRunner } from "typeorm";

export class default1688843642531 implements MigrationInterface {
    name = 'default1688843642531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_44a1f7af32d396c871bb73fb1a8"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_44a1f7af32d396c871bb73fb1a8" FOREIGN KEY ("collection_id") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_44a1f7af32d396c871bb73fb1a8"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_44a1f7af32d396c871bb73fb1a8" FOREIGN KEY ("collection_id") REFERENCES "collections"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
