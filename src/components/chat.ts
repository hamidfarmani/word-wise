import { NextApiRequest, NextApiResponse } from "next";
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";

type ResponseData = {
  text: string;
};

interface GenerateRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ text: "Missing prompt" });
  }

  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: getSystemPrompt(),
    },
    { role: ChatCompletionRequestMessageRoleEnum.User, content: prompt },
  ];

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.1,
  });

  const response =
    result.data.choices[0].message?.content || "Sorry, I don't know";
  res.status(200).json({ text: response });
}

function getSystemPrompt() {
  return `You act as an english tutor and partner for me to improve my English. 
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
      I don't need any other information or explanation before or after the JSON response.`;
}
