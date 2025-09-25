/*
  Warnings:

  - You are about to drop the column `is_on_diet` on the `meals` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `meals` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "public"."Goal" AS ENUM ('HIPERTROFIA', 'LOW_CARB', 'EMAGRECIMENTO', 'MANUTENCAO');

-- AlterTable
ALTER TABLE "public"."foods" ALTER COLUMN "carbohydrate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "protein" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "calories" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fat" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "public"."meals" DROP COLUMN "is_on_diet",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "date_time" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "updated_at" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."diet_plans" (
    "id" SERIAL NOT NULL,
    "goal" "public"."Goal" NOT NULL,
    "caloriesTarget" DOUBLE PRECISION NOT NULL,
    "proteinTarget" DOUBLE PRECISION NOT NULL,
    "carbTarget" DOUBLE PRECISION NOT NULL,
    "fatTarget" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "isOnDiet" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "diet_plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."diet_plans" ADD CONSTRAINT "diet_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
