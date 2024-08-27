/*
  Warnings:

  - Added the required column `description` to the `foodCategories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foodCategories" ADD COLUMN     "description" VARCHAR(30) NOT NULL;
