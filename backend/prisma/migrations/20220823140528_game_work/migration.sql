/*
  Warnings:

  - Added the required column `stars` to the `decks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `decks` ADD COLUMN `stars` INTEGER NOT NULL;
