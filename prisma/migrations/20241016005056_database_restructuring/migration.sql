/*
  Warnings:

  - You are about to alter the column `calories` on the `foodItems` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(5,1)`.
  - You are about to alter the column `description` on the `meals` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `name` on the `nutrients` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `nutrients` table. All the data in the column will be lost.
  - You are about to drop the column `preparationId` on the `recipes` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `usersData` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `usersData` table. All the data in the column will be lost.
  - You are about to drop the `foodNutrients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mealFoodItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mealRecipes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `preparations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recipeFoodItems` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[foodItemId]` on the table `nutrients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `usersData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `visibleFat` to the `foodItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumedOn` to the `meals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mealType` to the `meals` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `meals` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `carb` to the `nutrients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutrients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fibr` to the `nutrients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodItemId` to the `nutrients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prot` to the `nutrients` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `recipes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "foodNutrients" DROP CONSTRAINT "foodNutrients_foodItemId_fkey";

-- DropForeignKey
ALTER TABLE "foodNutrients" DROP CONSTRAINT "foodNutrients_nutrientsId_fkey";

-- DropForeignKey
ALTER TABLE "mealFoodItems" DROP CONSTRAINT "mealFoodItems_foodItemId_fkey";

-- DropForeignKey
ALTER TABLE "mealFoodItems" DROP CONSTRAINT "mealFoodItems_mealId_fkey";

-- DropForeignKey
ALTER TABLE "mealRecipes" DROP CONSTRAINT "mealRecipes_mealId_fkey";

-- DropForeignKey
ALTER TABLE "mealRecipes" DROP CONSTRAINT "mealRecipes_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipeFoodItems" DROP CONSTRAINT "recipeFoodItems_foodItemId_fkey";

-- DropForeignKey
ALTER TABLE "recipeFoodItems" DROP CONSTRAINT "recipeFoodItems_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "recipes" DROP CONSTRAINT "recipes_preparationId_fkey";

-- AlterTable
ALTER TABLE "foodCategories" ALTER COLUMN "description" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "foodItems" ADD COLUMN     "visibleFat" BOOLEAN NOT NULL,
ALTER COLUMN "calories" SET DATA TYPE DECIMAL(5,1);

-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "consumedOn" DATE NOT NULL,
ADD COLUMN     "mealType" SMALLINT NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "nutrients" DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "carb" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "fat" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "fibr" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "foodItemId" TEXT NOT NULL,
ADD COLUMN     "prot" DECIMAL(4,1) NOT NULL;

-- AlterTable
ALTER TABLE "recipes" DROP COLUMN "preparationId",
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "completeName" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "usersData" DROP COLUMN "height",
DROP COLUMN "weight";

-- DropTable
DROP TABLE "foodNutrients";

-- DropTable
DROP TABLE "mealFoodItems";

-- DropTable
DROP TABLE "mealRecipes";

-- DropTable
DROP TABLE "preparations";

-- DropTable
DROP TABLE "recipeFoodItems";

-- CreateTable
CREATE TABLE "bodyMeasurements" (
    "id" TEXT NOT NULL,
    "height" DECIMAL(3,2) NOT NULL,
    "weight" DECIMAL(4,1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "bodyMeasurements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prepMethods" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "factorValueMin" SMALLINT NOT NULL,
    "factorValueMax" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prepMethods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodItemRecipes" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "foodItemId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "foodItemRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodPrepMethods" (
    "id" TEXT NOT NULL,
    "adjustedKcal" DECIMAL(4,1) NOT NULL,
    "adjustedFat" DECIMAL(4,1) NOT NULL,
    "foodItemId" TEXT NOT NULL,
    "prepMethodId" TEXT NOT NULL,

    CONSTRAINT "foodPrepMethods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodItemsMeals" (
    "id" TEXT NOT NULL,
    "mealId" TEXT NOT NULL,
    "foodItemId" TEXT NOT NULL,

    CONSTRAINT "foodItemsMeals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mealsRecipes" (
    "id" TEXT NOT NULL,
    "mealId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "mealsRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "bodyMeasurements_userId_createdAt_idx" ON "bodyMeasurements"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "foodItems_id_createdBy_idx" ON "foodItems"("id", "createdBy");

-- CreateIndex
CREATE INDEX "meals_createdBy_mealType_idx" ON "meals"("createdBy", "mealType");

-- CreateIndex
CREATE UNIQUE INDEX "nutrients_foodItemId_key" ON "nutrients"("foodItemId");

-- CreateIndex
CREATE INDEX "nutrients_foodItemId_idx" ON "nutrients"("foodItemId");

-- CreateIndex
CREATE INDEX "users_id_email_idx" ON "users"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "usersData_userId_key" ON "usersData"("userId");

-- CreateIndex
CREATE INDEX "usersData_userId_idx" ON "usersData"("userId");

-- AddForeignKey
ALTER TABLE "bodyMeasurements" ADD CONSTRAINT "bodyMeasurements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutrients" ADD CONSTRAINT "nutrients_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodItemRecipes" ADD CONSTRAINT "foodItemRecipes_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodItemRecipes" ADD CONSTRAINT "foodItemRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodPrepMethods" ADD CONSTRAINT "foodPrepMethods_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodPrepMethods" ADD CONSTRAINT "foodPrepMethods_prepMethodId_fkey" FOREIGN KEY ("prepMethodId") REFERENCES "prepMethods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodItemsMeals" ADD CONSTRAINT "foodItemsMeals_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodItemsMeals" ADD CONSTRAINT "foodItemsMeals_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealsRecipes" ADD CONSTRAINT "mealsRecipes_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealsRecipes" ADD CONSTRAINT "mealsRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
