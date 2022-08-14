import { MigrationInterface, QueryRunner } from "typeorm";

export class PasswordTokens1659518540871 implements MigrationInterface {
    name = "PasswordTokens1659518540871";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "passwordTokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" character varying NOT NULL, "isRevoked" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3cd71838e137fdec986580fd9b9" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(`ALTER TABLE "users" ADD "passwordTokenId" uuid`);
        await queryRunner.query(
            `ALTER TABLE "users" ADD CONSTRAINT "UQ_605c9bf49da318ff5e4f00dff20" UNIQUE ("passwordTokenId")`
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD CONSTRAINT "FK_605c9bf49da318ff5e4f00dff20" FOREIGN KEY ("passwordTokenId") REFERENCES "passwordTokens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" DROP CONSTRAINT "FK_605c9bf49da318ff5e4f00dff20"`
        );
        await queryRunner.query(
            `ALTER TABLE "users" DROP CONSTRAINT "UQ_605c9bf49da318ff5e4f00dff20"`
        );
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "passwordTokenId"`);
        await queryRunner.query(`DROP TABLE "passwordTokens"`);
    }
}
