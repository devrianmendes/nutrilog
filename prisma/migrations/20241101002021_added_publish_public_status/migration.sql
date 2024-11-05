/*
  Warnings:

  - Added the required column `publish` to the `foodItems` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('approved', 'pending', 'rejected');

-- AlterTable
ALTER TABLE "foodItems" ADD COLUMN     "public" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publish" BOOLEAN NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pendente';
