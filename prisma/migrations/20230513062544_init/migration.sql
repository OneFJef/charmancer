-- CreateEnum
CREATE TYPE "Class" AS ENUM ('CLERIC', 'FIGHTER', 'MAGICUSER', 'THIEF');

-- CreateTable
CREATE TABLE "Player" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "class" "Class" NOT NULL,
    "exp" INT4 NOT NULL,
    "playerId" STRING,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
