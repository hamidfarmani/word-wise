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
  const words = await prisma.word.findMany();
  return words;
}
