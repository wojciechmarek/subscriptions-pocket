/*
  Warnings:

  - You are about to drop the column `billiing_period` on the `Subscription` table. All the data in the column will be lost.
  - Added the required column `billing_period` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "billiing_period",
ADD COLUMN     "billing_period" "SUBSCRIPTION_BILLING_PERIOD" NOT NULL;
