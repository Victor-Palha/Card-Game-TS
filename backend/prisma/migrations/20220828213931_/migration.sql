/*
  Warnings:

  - You are about to drop the `friends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_id_solicitado_fkey`;

-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_id_solicitante_fkey`;

-- DropTable
DROP TABLE `friends`;
