import { getWords } from "@/app/wordService";
import WordCard from "./word-card";

export default async function WordList() {
  const words = await getWords();

  return (
    <div className="grid grid-cols-4 gap-3">
      {words && words.length > 0 ? (
        words.map((word) => <WordCard key={word.id} word={word} />)
      ) : (
        <div className="col-span-3">No words found</div>
      )}
    </div>
  );
}
