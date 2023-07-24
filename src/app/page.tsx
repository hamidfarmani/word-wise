import Search from "@/components/search";
import { getWords } from "./wordService";
import WordCard from "@/components/word-card";

export default async function Home() {
  const words = await getWords();
  return (
    <>
      <Search />
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </>
  );
}
