import {MigrationInterface, QueryRunner} from "typeorm";

export class StatusVariant1659456526233 implements MigrationInterface {
    name = 'StatusVariant1659456526233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publicationStatuses" ADD "variant" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publicationStatuses" DROP COLUMN "variant"`);
    }

}
