import { Logo } from "@/components/Logo";
import Banner from "@/components/banner";
import Search from "@/components/search";
import WordList from "@/components/word-list";
import { openai } from "./api/word/route";

export default function Home() {
  return (
    <>
      <Logo />
      {!openai && <Banner />}
      <Search />
      <WordList />
    </>
  );
}
