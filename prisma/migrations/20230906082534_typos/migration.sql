/*
  Warnings:

  - You are about to drop the column `next_payment` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `next_payment_date` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "next_payment",
ADD COLUMN     "next_payment_date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "currency" SET DEFAULT 'PLN',
ALTER COLUMN "start_date" SET DATA TYPE DATE,
ALTER COLUMN "end_date" SET DATA TYPE DATE,
ALTER COLUMN "status" SET DEFAULT 'ACTIVE',
ALTER COLUMN "billing_period" SET DEFAULT 'MONTHLY';
