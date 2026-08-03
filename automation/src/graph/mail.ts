import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
import { config } from "../config.js";
import { logger } from "../lib/logger.js";
import { getAccessToken } from "./auth.js";

function userPath(): string {
  if (!config.OUTLOOK_USER) {
    throw new Error("OUTLOOK_USER saknas i .env (t.ex. info@crisha.se)");
  }
  return `/users/${encodeURIComponent(config.OUTLOOK_USER)}`;
}

async function graphClient(): Promise<Client> {
  const token = await getAccessToken();
  return Client.init({
    authProvider: (done) => done(null, token),
  });
}

export type SendMailInput = {
  to: string;
  subject: string;
  bodyHtml: string;
  replyToMessageId?: string;
  conversationId?: string;
};

export type SentMailResult = {
  // Graph sendMail does not always return id; we search recent sent items
  subject: string;
  to: string;
};

export async function sendMail(input: SendMailInput): Promise<SentMailResult> {
  if (config.DRY_RUN) {
    logger.info({ to: input.to, subject: input.subject }, "DRY_RUN sendMail");
    return { subject: input.subject, to: input.to };
  }

  const client = await graphClient();
  const message: Record<string, unknown> = {
    subject: input.subject,
    body: { contentType: "HTML", content: input.bodyHtml },
    toRecipients: [
      { emailAddress: { address: input.to } },
    ],
  };

  if (input.replyToMessageId) {
    await client
      .api(`${userPath()}/messages/${input.replyToMessageId}/reply`)
      .post({
        message: {
          body: { contentType: "HTML", content: input.bodyHtml },
        },
      });
    logger.info({ to: input.to, replyTo: input.replyToMessageId }, "Reply sent");
    return { subject: input.subject, to: input.to };
  }

  await client.api(`${userPath()}/sendMail`).post({
    message,
    saveToSentItems: true,
  });
  logger.info({ to: input.to, subject: input.subject }, "Mail sent");
  return { subject: input.subject, to: input.to };
}

export type InboxMessage = {
  id: string;
  conversationId?: string;
  subject: string;
  bodyPreview: string;
  bodyHtml: string;
  from: string;
  receivedDateTime: string;
  internetMessageId?: string;
};

export async function listRecentInbox(top = 40): Promise<InboxMessage[]> {
  const client = await graphClient();
  const res = await client
    .api(`${userPath()}/mailFolders/inbox/messages`)
    .top(top)
    .select("id,conversationId,subject,bodyPreview,body,from,receivedDateTime,internetMessageId")
    .orderby("receivedDateTime DESC")
    .get();

  return (res.value ?? []).map(
    (m: {
      id: string;
      conversationId?: string;
      subject?: string;
      bodyPreview?: string;
      body?: { content?: string };
      from?: { emailAddress?: { address?: string } };
      receivedDateTime?: string;
      internetMessageId?: string;
    }) => ({
      id: m.id,
      conversationId: m.conversationId,
      subject: m.subject ?? "",
      bodyPreview: m.bodyPreview ?? "",
      bodyHtml: m.body?.content ?? "",
      from: (m.from?.emailAddress?.address ?? "").toLowerCase(),
      receivedDateTime: m.receivedDateTime ?? "",
      internetMessageId: m.internetMessageId,
    })
  );
}

export async function notifyOperator(subject: string, bodyHtml: string): Promise<void> {
  if (!config.OPERATOR_EMAIL) {
    logger.warn("OPERATOR_EMAIL saknas — kan inte skicka notis");
    return;
  }
  await sendMail({
    to: config.OPERATOR_EMAIL,
    subject,
    bodyHtml,
  });
}
