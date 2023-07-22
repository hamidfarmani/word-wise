/*
  Warnings:

  - You are about to drop the column `meaning` on the `Word` table. All the data in the column will be lost.
  - Added the required column `definition` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "usageInSentence" TEXT NOT NULL,
    "synonym" TEXT NOT NULL,
    "antonym" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "sameLevelWordSuggestion" TEXT NOT NULL,
    "higherLevelWordSuggestion" TEXT NOT NULL,
    "lowerLevelWordSuggestion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Word" ("antonym", "createdAt", "higherLevelWordSuggestion", "id", "level", "lowerLevelWordSuggestion", "sameLevelWordSuggestion", "synonym", "usageInSentence", "word") SELECT "antonym", "createdAt", "higherLevelWordSuggestion", "id", "level", "lowerLevelWordSuggestion", "sameLevelWordSuggestion", "synonym", "usageInSentence", "word" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
