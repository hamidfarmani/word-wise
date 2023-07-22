import { prisma } from "@/db";

export default async function Home() {
  const words = await prisma.word.findMany();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">WordWise</h1>
      </header>

      <ul className="pl-4">
        {words.map((word) => (
          <li key={word.id} className="mb-4">
            <h2 className="text-xl">{word.word}</h2>
            <p className="text-gray-400">{word.definition}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
