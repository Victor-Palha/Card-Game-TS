/*
  Warnings:

  - The primary key for the `decks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `decks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `decks` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`id_deck`);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `admin` BOOLEAN NOT NULL DEFAULT false;
