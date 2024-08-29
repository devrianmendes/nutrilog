/*
  Warnings:

  - Added the required column `unity` to the `foodItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foodItems" ADD COLUMN     "unity" TEXT NOT NULL;
