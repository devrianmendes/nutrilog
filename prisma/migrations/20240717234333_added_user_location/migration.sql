/*
  Warnings:

  - Added the required column `city` to the `usersData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `usersData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usersData" ADD COLUMN     "city" VARCHAR(30) NOT NULL,
ADD COLUMN     "state" VARCHAR(30) NOT NULL;
