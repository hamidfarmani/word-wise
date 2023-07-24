import { prisma } from "@/db";

export interface Word {
  id: string;
  word: string;
  definition: string;
  usageInSentence: string;
  synonym: string;
  antonym: string;
  level: string;
  sameLevelWordSuggestion: string;
  higherLevelWordSuggestion: string;
  lowerLevelWordSuggestion: string;
  createdAt: Date;
}

export async function getWords(): Promise<Word[]> {
  const words = await prisma.word.findMany({
    orderBy: {
      word: "asc",
    },
  });
  return words;
}

export async function saveWord(word: Word) {
  const savedWord = await prisma.word.create({
    data: {
      word: word.word,
      definition: word.definition,
      usageInSentence: word.usageInSentence,
      synonym: word.synonym,
      antonym: word.antonym,
      level: word.level,
      sameLevelWordSuggestion: word.sameLevelWordSuggestion,
      higherLevelWordSuggestion: word.higherLevelWordSuggestion,
      lowerLevelWordSuggestion: word.lowerLevelWordSuggestion,
    },
  });
  console.log(`Saved word: ${savedWord.word}`);
  return savedWord;
}

export async function findWord(word: string) {
  console.log(`Finding word: ${word}`);

  const existingWord: Word[] | null = await prisma.word.findMany({
    where: {
      word,
    },
  });

  if (existingWord.length > 0) {
    return existingWord[0];
  }

  return null;
}
