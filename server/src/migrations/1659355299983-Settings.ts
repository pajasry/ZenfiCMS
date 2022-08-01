import { MigrationInterface, QueryRunner } from "typeorm";

export class Settings1659355299983 implements MigrationInterface {
    name = "Settings1659355299983";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "settings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "googleAnalyticsId" character varying, CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "publicationStatuses" ADD CONSTRAINT "UQ_fa4c166dc323f39248cfa686130" UNIQUE ("name")`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "publicationStatuses" DROP CONSTRAINT "UQ_fa4c166dc323f39248cfa686130"`
        );
        await queryRunner.query(`DROP TABLE "settings"`);
    }
}
