-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `friends` (
    `id_friend` INTEGER NOT NULL,
    `situation` BOOLEAN NOT NULL DEFAULT false,
    `id_solicitante` INTEGER NOT NULL,
    `id_solicitado` INTEGER NOT NULL,

    PRIMARY KEY (`id_friend`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `decks` (
    `id` INTEGER NOT NULL,
    `id_deck` INTEGER NOT NULL,
    `id_mongo` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_id_solicitante_fkey` FOREIGN KEY (`id_solicitante`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_id_solicitado_fkey` FOREIGN KEY (`id_solicitado`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `decks` ADD CONSTRAINT `decks_id_deck_fkey` FOREIGN KEY (`id_deck`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
