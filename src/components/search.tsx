"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface InputProps {
  onSend: (value: string) => void;
  disabled: boolean;
}

export default function Search() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    setLoading(true);

    const response = await fetch("/api/word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    }).then((res) => res.json());
    setLoading(false);

    router.refresh();
  };

  return (
    <>
      <ChatInput onSend={callApi} disabled={loading} />
    </>
  );
}

const ChatInput = ({ onSend, disabled }: InputProps) => {
  const [input, setInput] = useState("");
  const sendInput = () => {
    onSend(input);
    setInput("");
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      sendInput();
    }
  };

  return (
    <div className="flex justify-between items-center mb-4">
      {disabled && <div className="text-gray-400">Loading...</div>}
      {!disabled && (
        <>
          <input
            type="text"
            className="bg-slate-900 text-slate-100 p-2 rounded w-10/12"
            placeholder="Add a new word"
            value={input}
            disabled={disabled}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button
            className="bg-transparent hover:bg-slate-600 text-white font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
            onClick={sendInput}
          >
            Send
          </button>
        </>
      )}
    </div>
  );
};
