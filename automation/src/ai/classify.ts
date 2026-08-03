import { completeJson } from "./client.js";

export const REPLY_LABELS = [
  "intresserad_vill_boka_möte",
  "intresserad_men_har_frågor",
  "inte_intresserad",
  "avregistrera",
  "oklart",
] as const;

export type ReplyLabel = (typeof REPLY_LABELS)[number];

export type ClassificationResult = {
  label: ReplyLabel;
  rationale: string;
  summary: string;
};

export async function classifyReply(text: string): Promise<ClassificationResult> {
  const result = await completeJson<ClassificationResult>(
    `Du klassificerar svar på cold emails till Crisha Marketing (svenska/engelska).
Välj EXAKT en label:
- intresserad_vill_boka_möte
- intresserad_men_har_frågor
- inte_intresserad
- avregistrera
- oklart

Vid sarkasm, tvetydighet eller osäkerhet → oklart.
JSON: { "label", "rationale", "summary" }`,
    `Svarstext:\n"""${text.slice(0, 6000)}"""`
  );

  if (!REPLY_LABELS.includes(result.label)) {
    return {
      label: "oklart",
      rationale: `Okänd label från AI (${String(result.label)}) — eskalerar`,
      summary: result.summary ?? text.slice(0, 200),
    };
  }
  return result;
}
