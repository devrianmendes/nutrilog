/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userData" DROP CONSTRAINT "userData_userId_fkey";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "userData";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "completeName" VARCHAR(50) NOT NULL,
    "password" VARCHAR(64) NOT NULL,
    "banner" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersData" (
    "id" TEXT NOT NULL,
    "height" DECIMAL(3,2) NOT NULL,
    "weight" DECIMAL(4,1) NOT NULL,
    "birth" DATE NOT NULL,
    "goal" TEXT NOT NULL,
    "activityLevel" TEXT NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "usersData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "usersData" ADD CONSTRAINT "usersData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
