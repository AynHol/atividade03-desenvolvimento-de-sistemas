/*
  Warnings:

  - You are about to drop the column `techs` on the `dev` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "dev" DROP COLUMN "techs";

-- CreateTable
CREATE TABLE "tech" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "devId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tech_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tech" ADD CONSTRAINT "tech_devId_fkey" FOREIGN KEY ("devId") REFERENCES "dev"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
