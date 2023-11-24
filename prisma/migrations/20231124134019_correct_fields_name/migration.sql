/*
  Warnings:

  - You are about to drop the column `dataDeRegistro` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCompleto` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `dataDeRegistro` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `nomeCompleto` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Contacts` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "dataDeRegistro",
DROP COLUMN "nomeCompleto",
DROP COLUMN "telefone",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "isEmailConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Contacts" DROP COLUMN "dataDeRegistro",
DROP COLUMN "nomeCompleto",
DROP COLUMN "telefone",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
