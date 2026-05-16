import { CONTACT } from "@/lib/constants";

/** Public Formspree form id from https://formspree.io — point notifications to CONTACT.email in Formspree. */
export function getFormspreeFormId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
  return id || undefined;
}

/** Inbox för ärendena; Formspree skickar notifieringar dit när ni ställer in Notifications/Workflow på samma adress. */
export const FORM_NOTIFICATION_EMAIL = CONTACT.email;

export const FORMSPREE_SETUP_HINT = `Säkerställ i Formspree att Notifications (eller Workflow → E-post) går till ${FORM_NOTIFICATION_EMAIL} och sätt domänen crisha.se som tillåten om det krävs.`;


export const FORMSPREE_SUBJECT = {
  contactFull: "Crisha.se | Kontakt (fullständigt formulär)",
  contactCta: "Crisha.se | Snabb förfrågan",
  careers: "Crisha.se | Karriäransökan",
} as const;
