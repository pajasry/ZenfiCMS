import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectsUpdate1660566984684 implements MigrationInterface {
    name = "ProjectsUpdate1660566984684";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pages" ADD "path" character varying NOT NULL`);
        await queryRunner.query(
            `ALTER TABLE "pages" ADD CONSTRAINT "UQ_fd04e631bf857b757e33711e5be" UNIQUE ("name")`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "pages" DROP CONSTRAINT "UQ_fd04e631bf857b757e33711e5be"`
        );
        await queryRunner.query(`ALTER TABLE "pages" DROP COLUMN "path"`);
    }
}
