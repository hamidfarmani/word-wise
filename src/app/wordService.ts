import connectDB from "@/db";
import { Word } from "@/models/word";

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

export async function getWords(): Promise<Word[] | undefined> {
  try {
    await connectDB();
    const words = await Word.find().sort({ word: "asc" });
    return words;
  } catch (error) {
    console.error("Error getting users:", error);
    return undefined;
  }
}

export async function saveWord(word: Word) {
  await connectDB();

  const existingWord = await Word.findOne({ word: word.word });
  if (existingWord) {
    console.error("Word already exists");
    return;
  }

  const newWord = new Word(word);
  const savedWord = await newWord.save();

  console.log(`Saved word: ${savedWord.word}`);
  return savedWord;
}

export async function findWord(word: string) {
  console.log(`Finding word: ${word}`);

  await connectDB();
  const foundWord = await Word.findOne({
    word: word,
  });
  if (foundWord) {
    console.log(`Found word: ${foundWord.word}`);
    return foundWord;
  }
  console.log("Word not found");

  return null;
}
