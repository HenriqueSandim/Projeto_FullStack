/*
  Warnings:

  - Changed the type of `price` on the `cars` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;
