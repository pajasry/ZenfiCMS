-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_jwtTokenId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_passwordTokenId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "jwtTokenId" DROP NOT NULL,
ALTER COLUMN "passwordTokenId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_jwtTokenId_fkey" FOREIGN KEY ("jwtTokenId") REFERENCES "jwtTokens"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_passwordTokenId_fkey" FOREIGN KEY ("passwordTokenId") REFERENCES "passwordTokens"("id") ON DELETE SET NULL ON UPDATE CASCADE;
