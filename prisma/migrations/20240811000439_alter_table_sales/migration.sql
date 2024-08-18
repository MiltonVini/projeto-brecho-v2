/*
  Warnings:

  - Made the column `transaction_date` on table `Sales` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "stock" DROP NOT NULL;

-- AlterTable
CREATE SEQUENCE sales_sale_id_seq;
ALTER TABLE "Sales" ALTER COLUMN "sale_id" SET DEFAULT nextval('sales_sale_id_seq'),
ALTER COLUMN "transaction_date" SET NOT NULL;
ALTER SEQUENCE sales_sale_id_seq OWNED BY "Sales"."sale_id";
