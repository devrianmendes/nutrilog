/*
  Warnings:

  - You are about to drop the column `calories` on the `foodItems` table. All the data in the column will be lost.
  - Added the required column `kcal` to the `foodItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foodItems" DROP COLUMN "calories",
ADD COLUMN     "kcal" DECIMAL(5,1) NOT NULL,
ALTER COLUMN "publish" SET DEFAULT false,
ALTER COLUMN "status" SET DEFAULT 'rejected';
