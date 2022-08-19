/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `decks` DROP FOREIGN KEY `decks_id_deck_fkey`;

-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_id_solicitado_fkey`;

-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_id_solicitante_fkey`;

-- AlterTable
ALTER TABLE `decks` MODIFY `id_deck` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `friends` MODIFY `id_solicitante` VARCHAR(191) NOT NULL,
    MODIFY `id_solicitado` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_id_solicitante_fkey` FOREIGN KEY (`id_solicitante`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_id_solicitado_fkey` FOREIGN KEY (`id_solicitado`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `decks` ADD CONSTRAINT `decks_id_deck_fkey` FOREIGN KEY (`id_deck`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
