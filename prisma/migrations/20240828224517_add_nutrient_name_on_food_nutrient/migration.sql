/*
  Warnings:

  - Added the required column `nutrientName` to the `foodNutrients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foodNutrients" ADD COLUMN     "nutrientName" VARCHAR(50) NOT NULL;
