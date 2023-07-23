"use client";
import { prisma } from "@/db";
import { useState } from "react";
import { getWords } from "./wordService";
import { Word } from "@prisma/client";

interface InputProps {
  onSend: (value: string) => void;
  disabled: boolean;
}

interface MesssageProps {
  word: Word;
  key: number;
}

export default function Home() {
  // const words = await getWords();

  const [messages, setMessages] = useState<MesssageProps[]>([]);
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

    if (response.text) {
      const botMessage: MesssageProps = {
        word: response.text,
        key: new Date().getTime(),
      };
      setMessages([...messages, botMessage]);
    }
    setLoading(false);
  };

  console.log(messages);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">WordWise</h1>
      </div>
      <div>
        <ChatInput onSend={callApi} disabled={loading} />
      </div>

      {messages.map((message) => (
        <ChatMessage key={message.key} word={message.word} />
      ))}
    </>
  );
}

const ChatMessage = ({ word }: MesssageProps) => {
  return (
    <div className="flex justify-start">
      <p>{word.word}</p>
      <p className="bg-slate-900 text-slate-100 p-2 rounded">
        {word.definition}
      </p>
    </div>
  );
};

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
      <input
        type="text"
        className="bg-slate-900 text-slate-100 p-2 rounded w-full"
        placeholder="Add a new word"
        value={input}
        disabled={disabled}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {disabled && <p>disabled</p>}
      {!disabled && <button onClick={sendInput}>Send</button>}
    </div>
  );
};
