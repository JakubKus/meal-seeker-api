import {MigrationInterface, QueryRunner} from "typeorm";

export class init1653235624709 implements MigrationInterface {
    name = 'init1653235624709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "history_record_entity" ("id" character varying NOT NULL, "mealName" character varying NOT NULL, "addedDate" TIMESTAMP NOT NULL DEFAULT now(), "addedById" character varying NOT NULL, CONSTRAINT "PK_a199611b29adb8070341ead8841" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_entity" ("id" character varying NOT NULL, "name" character varying NOT NULL, "addedById" character varying NOT NULL, "properties" jsonb NOT NULL, CONSTRAINT "PK_9a848665c1f6ad0b0ebe591f064" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "meal_entity"`);
        await queryRunner.query(`DROP TABLE "history_record_entity"`);
    }

}
