import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  definition: { type: String, required: true },
  usageInSentence: { type: String, required: true },
  synonym: { type: String },
  antonym: { type: String },
  level: { type: String },
  sameLevelWordSuggestion: { type: String },
  higherLevelWordSuggestion: { type: String },
  lowerLevelWordSuggestion: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Word = mongoose.models?.Word || mongoose.model("Word", wordSchema);
