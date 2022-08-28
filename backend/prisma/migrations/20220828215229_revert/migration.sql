-- DropIndex
DROP INDEX `decks_id_user_fkey` ON `decks`;

-- AddForeignKey
ALTER TABLE `decks` ADD CONSTRAINT `decks_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
