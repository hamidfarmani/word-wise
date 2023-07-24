import { NextResponse } from "next/server";

import { findWord, saveWord } from "@/app/wordService";
import { NextApiRequest, NextApiResponse } from "next";
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";

type ResponseData = {
  text: string;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 400,
    }
  );
}

export async function POST(req: Request) {
  const body = await req.json();
  const prompt = body.prompt.trim();
  if (!prompt) {
    return NextResponse.json(
      { text: "Missing prompt" },
      {
        status: 400,
      }
    );
  }

  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: getSystemPrompt(),
    },
    { role: ChatCompletionRequestMessageRoleEnum.User, content: prompt },
  ];

  console.log(messages);
  let word = await findWord(prompt);
  if (!word) {
    console.log("Word not found. Getting from OpenAI");

    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.1,
    });

    const response =
      result.data.choices[0].message?.content || "Sorry, I don't know";
    word = await saveWord(JSON.parse(response));
  }

  return NextResponse.json(
    { text: word },
    {
      status: 200,
    }
  );
}

function getSystemPrompt() {
  return `Act as an english tutor and partner for me to improve my English. 
        Do not provide any other information or explanation before or after the JSON response.
        You will recieve a word and respond the following in a JSON format:
        {
          "word":
          "definition":
          "usageInSentence":
          "synonym":
          "antonym":
          "level":
          "sameLevelWordSuggestion":,
          "higherLevelWordSuggestion":
          "lowerLevelWordSuggestion":
        }
        `;
}
