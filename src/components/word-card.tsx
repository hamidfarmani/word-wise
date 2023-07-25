import { Word } from "@/app/wordService";
import Link from "next/link";

interface WordCardProps {
  word: Word;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-md bg-white text-gray-700 bg-opacity-60">
      <div className="px-6 py-4 divide-y">
        <div className="text-2xl font-semibold  text-blue-700">{word.word}</div>

        <div className="mb-2">
          <div className="text-lg font-semibold mt-2">Definition</div>
          <p className="text-gray-700">{word.definition}</p>
        </div>

        <div className="mb-2">
          <div className="text-lg font-semibold mt-2">Sentence</div>
          <p className="italic text-gray-600">{word.usageInSentence}</p>
          <Link
            href={`https://youglish.com/pronounce/${word.word}/english?`}
            target="_blank"
          >
            <p className="underline">Watch and listen to a real example</p>
          </Link>
        </div>

        {word.antonym && word.synonym && (
          <div className="m2-4">
            <div className="text-lg font-semibold mt-2">Synonyms</div>
            <p className="text-gray-700">{word.synonym}</p>

            <div className="text-lg font-semibold mt-2">Antonyms</div>
            <p className="text-gray-700">{word.antonym}</p>
          </div>
        )}

        <div className="flex justify-center items-center mt-2">
          {word.lowerLevelWordSuggestion && (
            <span className="inline-block bg-gray-50 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
              {word.lowerLevelWordSuggestion}
            </span>
          )}
          {word.sameLevelWordSuggestion && (
            <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
              {word.sameLevelWordSuggestion}
            </span>
          )}
          {word.higherLevelWordSuggestion && (
            <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
              {word.higherLevelWordSuggestion}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordCard;
