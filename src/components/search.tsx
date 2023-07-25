"use client";
import { Word } from "@/app/wordService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "./modal";

export default function Search() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseData, setResponseData] = useState<Word | null>(null);

  const callApi = async (input: string) => {
    setLoading(true);

    const word = await fetch("/api/word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    }).then((res) => res.json());
    setLoading(false);

    setResponseData(word.text);
    handleOpenModal();
  };

  const sendInput = () => {
    callApi(input);
    setInput("");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      sendInput();
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.refresh();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      {loading && <div className="text-gray-400">Loading...</div>}
      {!loading && (
        <>
          <input
            type="text"
            className="bg-slate-900 text-slate-100 p-3 rounded w-full mr-2"
            placeholder="Enter a word"
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {responseData !== null && (
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              word={responseData}
            />
          )}

          <button
            className="bg-transparent hover:bg-slate-600 text-white font-semibold hover:text-white py-3 px-4 border border-slate-500 hover:border-transparent rounded"
            onClick={sendInput}
          >
            Search
          </button>
        </>
      )}
    </div>
  );
}
