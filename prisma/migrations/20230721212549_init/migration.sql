-- CreateTable
CREATE TABLE "Word" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "meaning" TEXT NOT NULL,
    "usageInSentence" TEXT NOT NULL,
    "synonym" TEXT NOT NULL,
    "antonym" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "sameLevelWordSuggestion" TEXT NOT NULL,
    "higherLevelWordSuggestion" TEXT NOT NULL,
    "lowerLevelWordSuggestion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
