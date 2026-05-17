/** Subjects for inbound messages to inbox (see CONTACT.email). */
export const CONTACT_MAIL_SUBJECT_MAP = {
  contactFull: "Crisha.se | Kontakt (fullständigt formulär)",
  contactCta: "Crisha.se | Snabb förfrågan",
  careers: "Crisha.se | Karriäransökan",
} as const;

export type ContactMailSource = keyof typeof CONTACT_MAIL_SUBJECT_MAP;
