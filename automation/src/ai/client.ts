import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { config } from "../config.js";
import { logger } from "../lib/logger.js";

export async function completeText(system: string, user: string): Promise<string> {
  if (config.AI_PROVIDER === "openai") {
    if (!config.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY saknas");
    const client = new OpenAI({ apiKey: config.OPENAI_API_KEY });
    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.4,
    });
    return res.choices[0]?.message?.content?.trim() ?? "";
  }

  if (!config.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY saknas");
  const client = new Anthropic({ apiKey: config.ANTHROPIC_API_KEY });
  const res = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system,
    messages: [{ role: "user", content: user }],
  });
  const block = res.content.find((b) => b.type === "text");
  const text = block && block.type === "text" ? block.text.trim() : "";
  logger.debug({ provider: config.AI_PROVIDER, len: text.length }, "AI complete");
  return text;
}

export async function completeJson<T>(system: string, user: string): Promise<T> {
  const raw = await completeText(
    system + "\n\nSvara ENDAST med giltig JSON, ingen markdown.",
    user
  );
  const cleaned = raw.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
  return JSON.parse(cleaned) as T;
}
