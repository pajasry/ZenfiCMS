import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1659204531157 implements MigrationInterface {
    name = "Init1659204531157";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "publicationStatuses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_dc41b063caa6a019138ee56b716" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "statusId" uuid, "authorId" uuid, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "jwtTokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" character varying NOT NULL, "isRevoked" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c6148cff14b93cd25aa0adf1fb5" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "jwtTokenId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_0776809f9165d3c9e1b007917f" UNIQUE ("jwtTokenId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "pages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "statusId" uuid, "authorId" uuid, CONSTRAINT "PK_8f21ed625aa34c8391d636b7d3b" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "posts" ADD CONSTRAINT "FK_b04784499a0aa9352f4511afa8f" FOREIGN KEY ("statusId") REFERENCES "publicationStatuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "posts" ADD CONSTRAINT "FK_c5a322ad12a7bf95460c958e80e" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "users" ADD CONSTRAINT "FK_0776809f9165d3c9e1b007917f8" FOREIGN KEY ("jwtTokenId") REFERENCES "jwtTokens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "pages" ADD CONSTRAINT "FK_227d4a2e732929702239015a4a1" FOREIGN KEY ("statusId") REFERENCES "publicationStatuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE "pages" ADD CONSTRAINT "FK_d2e423882ed3b21d37f9cb1ca7f" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "pages" DROP CONSTRAINT "FK_d2e423882ed3b21d37f9cb1ca7f"`
        );
        await queryRunner.query(
            `ALTER TABLE "pages" DROP CONSTRAINT "FK_227d4a2e732929702239015a4a1"`
        );
        await queryRunner.query(
            `ALTER TABLE "users" DROP CONSTRAINT "FK_0776809f9165d3c9e1b007917f8"`
        );
        await queryRunner.query(
            `ALTER TABLE "posts" DROP CONSTRAINT "FK_c5a322ad12a7bf95460c958e80e"`
        );
        await queryRunner.query(
            `ALTER TABLE "posts" DROP CONSTRAINT "FK_b04784499a0aa9352f4511afa8f"`
        );
        await queryRunner.query(`DROP TABLE "pages"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "jwtTokens"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "publicationStatuses"`);
    }
}
