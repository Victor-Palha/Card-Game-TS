/*
  Warnings:

  - Added the required column `id_user` to the `decks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `decks` DROP FOREIGN KEY `decks_id_deck_fkey`;

-- AlterTable
ALTER TABLE `decks` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `decks` ADD CONSTRAINT `decks_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
