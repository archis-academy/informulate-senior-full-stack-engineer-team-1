import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function embedText(input: string): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: input.trim(),
  });

  const embedding = res.data?.[0]?.embedding;

  if (!embedding) {
    throw new Error("No embedding returned from OpenAI");
  }

  return embedding;
}
