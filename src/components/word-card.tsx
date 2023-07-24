import { Word } from "@/app/wordService";

interface WordCardProps {
  word: Word;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <div className="max-w-sm rounded bg-slate-500 overflow-hidden shadow-lg my-2 divide-y ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{word.word}</div>
        <p className="text-gray-900 text-base">{word.definition} </p>
        <p className="italic text-gray-300">{word.usageInSentence}</p>
      </div>

      {word.antonym && word.synonym && (
        <div className="pt-4 pb-2">
          <div className="flex justify-center items-center">
            <div className="py-1 text-sm text-white mb-2 flex flex-col items-center mx-3">
              <div className="mb-1 text-gray-800 font-bold">Antonym</div>
              <div>{word.antonym}</div>
            </div>
            <div className=" py-1 text-sm text-white mb-2 flex flex-col items-center mx-3">
              <div className="mb-1 text-gray-800 font-bold">Synonym</div>
              <div>{word.synonym}</div>
            </div>
          </div>
        </div>
      )}

      <div className="px-6 pt-4 pb-2 flex justify-center items-center">
        {word.lowerLevelWordSuggestion && (
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {word.lowerLevelWordSuggestion}
          </span>
        )}
        {word.sameLevelWordSuggestion && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {word.sameLevelWordSuggestion}
          </span>
        )}
        {word.higherLevelWordSuggestion && (
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {word.higherLevelWordSuggestion}
          </span>
        )}
      </div>
    </div>
  );
};

export default WordCard;
