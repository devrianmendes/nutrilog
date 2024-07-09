-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "completeName" VARCHAR(50) NOT NULL,
    "password" VARCHAR(64) NOT NULL,
    "banner" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userData" (
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

    CONSTRAINT "userData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodCategories" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "banner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "foodCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodItems" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "calories" INTEGER NOT NULL,
    "banner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "foodCategoryId" TEXT NOT NULL,

    CONSTRAINT "foodItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutrients" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foodNutrients" (
    "id" TEXT NOT NULL,
    "quantity" DECIMAL(4,1) NOT NULL,
    "foodItemId" TEXT NOT NULL,
    "nutrientsId" TEXT NOT NULL,

    CONSTRAINT "foodNutrients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preparations" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(191),
    "additionalCalories" INTEGER NOT NULL,
    "fats" DECIMAL(4,1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "preparations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(191),
    "banner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "preparationId" TEXT NOT NULL,

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipeFoodItems" (
    "id" TEXT NOT NULL,
    "quantity" DECIMAL(4,1) NOT NULL,
    "recipeId" TEXT NOT NULL,
    "foodItemId" TEXT NOT NULL,

    CONSTRAINT "recipeFoodItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meals" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "description" VARCHAR(191),
    "banner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mealRecipes" (
    "id" TEXT NOT NULL,
    "mealId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "mealRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mealFoodItems" (
    "id" TEXT NOT NULL,
    "mealId" TEXT NOT NULL,
    "foodItemId" TEXT NOT NULL,

    CONSTRAINT "mealFoodItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "userData" ADD CONSTRAINT "userData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodItems" ADD CONSTRAINT "foodItems_foodCategoryId_fkey" FOREIGN KEY ("foodCategoryId") REFERENCES "foodCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodNutrients" ADD CONSTRAINT "foodNutrients_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "foodNutrients" ADD CONSTRAINT "foodNutrients_nutrientsId_fkey" FOREIGN KEY ("nutrientsId") REFERENCES "nutrients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_preparationId_fkey" FOREIGN KEY ("preparationId") REFERENCES "preparations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipeFoodItems" ADD CONSTRAINT "recipeFoodItems_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipeFoodItems" ADD CONSTRAINT "recipeFoodItems_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealRecipes" ADD CONSTRAINT "mealRecipes_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealRecipes" ADD CONSTRAINT "mealRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealFoodItems" ADD CONSTRAINT "mealFoodItems_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "meals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mealFoodItems" ADD CONSTRAINT "mealFoodItems_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "foodItems"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
