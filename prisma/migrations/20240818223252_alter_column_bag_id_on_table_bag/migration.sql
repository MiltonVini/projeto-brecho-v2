/*
  Warnings:

  - You are about to alter the column `bag_id` on the `Bag` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Bag" ALTER COLUMN "bag_id" SET DATA TYPE INTEGER,
ALTER COLUMN "deliverd_at" DROP NOT NULL,
ALTER COLUMN "deliverd_at" DROP DEFAULT;
