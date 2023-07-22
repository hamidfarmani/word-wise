"use client";
import { prisma } from "@/db";
import { useState } from "react";
import { getWords } from "./wordService";

enum Creator {
  User = 0,
  Bot = 1,
}
interface InputProps {
  onSend: (value: string) => void;
  disabled: boolean;
}

interface MesssageProps {
  text: string;
  from: Creator;
  key: number;
}

export default function Home() {
  // const words = await getWords();

  const [messages, setMessages] = useState<MesssageProps[]>([]);
  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    setLoading(true);
    const myMessage: MesssageProps = {
      text: input,
      from: Creator.User,
      key: new Date().getTime(),
    };

    setMessages([...messages, myMessage]);

    console.log("sending input");

    console.log(input);

    const response = await fetch("/api/word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    }).then((res) => res.json());

    if (response.text) {
      const botMessage: MesssageProps = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime(),
      };
      setMessages([...messages, botMessage]);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">WordWise</h1>
      </div>
      <div>
        <ChatInput onSend={callApi} disabled={loading} />
      </div>

      {messages.map((message) => (
        <ChatMessage
          key={message.key}
          text={message.text}
          from={message.from}
        />
      ))}
    </>
  );
}

const ChatMessage = ({ text, from }: MesssageProps) => {
  return (
    <>
      {from === Creator.User ? (
        <div className="flex justify-end">
          <p>{from}</p>
          <p className="bg-slate-900 text-slate-100 p-2 rounded">{text}</p>
        </div>
      ) : (
        <div className="flex justify-start">
          <p>{from}</p>
          <p className="bg-slate-900 text-slate-100 p-2 rounded">{text}</p>
        </div>
      )}
    </>
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

// return (
//   <>
//     <header className="flex justify-between items-center mb-4">
//       <h1 className="text-2xl">WordWise</h1>
//     </header>

//     {/* getting the handler from chat components when clicking submit form */}
//     {/* when submiting, send the value of input to chat.ts handler */}
//     <form className="mb-4">
//       <input
//         type="text"
//         className="bg-slate-900 text-slate-100 p-2 rounded w-full"
//         placeholder="Add a new word"
//       />
//       <button
//         type="submit"
//         className="bg-slate-900 text-slate-100 p-2 rounded w-full mt-4"
//       >
//         Add
//       </button>
//     </form>

//     <ul className="pl-4">
//       {words.map((word) => (
//         <li key={word.id} className="mb-4">
//           <h2 className="text-xl">{word.word}</h2>
//           <p className="text-gray-400">{word.definition}</p>
//         </li>
//       ))}
//     </ul>
//   </>
// );
