/*
  Warnings:

  - You are about to drop the column `percentage_discount` on the `products` table. All the data in the column will be lost.
  - Added the required column `pertange_discount` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `percentage_discount`,
    ADD COLUMN `catagory_id` INTEGER NULL,
    ADD COLUMN `pertange_discount` FLOAT NOT NULL;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_catagory_id_fkey` FOREIGN KEY (`catagory_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
