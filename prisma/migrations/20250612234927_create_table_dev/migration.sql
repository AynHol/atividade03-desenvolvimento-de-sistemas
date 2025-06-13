/*
  Warnings:

  - You are about to drop the `tech` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tech" DROP CONSTRAINT "tech_devId_fkey";

-- AlterTable
ALTER TABLE "dev" ADD COLUMN     "techs" TEXT[];

-- DropTable
DROP TABLE "tech";
