import Search from "@/components/search";
import WordCard from "@/components/word-card";
import { getWords } from "./wordService";
import { openai } from "./api/word/route";

export default async function Home() {
  const words = await getWords();
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">WordWise</h1>
      </div>
      {!openai && (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-3"
          role="alert"
        >
          <p className="font-bold">Informational message</p>
          <p className="text-sm">
            There is no connection to OpenAi at the moment
          </p>
        </div>
      )}
      <Search />
      {words.length > 0
        ? words.map((word) => <WordCard key={word.id} word={word} />)
        : "No words found"}
    </>
  );
}
