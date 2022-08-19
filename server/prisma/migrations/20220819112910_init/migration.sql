-- CreateTable
CREATE TABLE "jwtTokens" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "jwtTokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passwordTokens" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "passwordTokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jwtTokenId" TEXT NOT NULL,
    "passwordTokenId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pageStatuses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "variant" TEXT NOT NULL,

    CONSTRAINT "pageStatuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attaches" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "attaches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isHomepage" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "parentId" TEXT,
    "thumbnailId" TEXT,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pageStatuses_name_key" ON "pageStatuses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "attaches_name_key" ON "attaches"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pages_name_key" ON "pages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pages_path_key" ON "pages"("path");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_jwtTokenId_fkey" FOREIGN KEY ("jwtTokenId") REFERENCES "jwtTokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_passwordTokenId_fkey" FOREIGN KEY ("passwordTokenId") REFERENCES "passwordTokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "pageStatuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "pages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_thumbnailId_fkey" FOREIGN KEY ("thumbnailId") REFERENCES "attaches"("id") ON DELETE SET NULL ON UPDATE CASCADE;
