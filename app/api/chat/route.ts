import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return new Response("Missing OPENAI_API_KEY environment variable", {
      status: 400,
    });
  }

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages,
    system:
      "You are a helpful AI assistant. Provide clear, concise, and helpful responses.",
  });

  return result.toDataStreamResponse();
}
