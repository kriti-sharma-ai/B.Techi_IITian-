// Uploads the auth email templates in supabase/email-templates to Supabase
// (Authentication → Emails → Templates), with their subjects.
// Run: SUPABASE_ACCESS_TOKEN=sbp_... npm run push:emails
// The token is a personal access token from supabase.com/dashboard/account/tokens.
// Only the template and subject settings are sent; SMTP, providers and URLs are left alone.

import { readFile } from "node:fs/promises";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const token = process.env.SUPABASE_ACCESS_TOKEN;
if (!url || !token) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL in .env.local and pass SUPABASE_ACCESS_TOKEN when running.");
  process.exit(1);
}
const ref = new URL(url).hostname.split(".")[0];

// Supabase's name for each email → [file, subject].
const templates: Record<string, [string, string]> = {
  confirmation: ["confirm-signup", "Confirm your BTechi account"],
  recovery: ["reset-password", "Reset your BTechi password"],
  magic_link: ["magic-link", "Your BTechi login code"],
  email_change: ["change-email", "Confirm your new email for BTechi"],
  invite: ["invite", "You're invited to BTechi"],
  reauthentication: ["reauthentication", "Your BTechi verification code"],
};

const body: Record<string, string> = {};
for (const [name, [file, subject]] of Object.entries(templates)) {
  body[`mailer_subjects_${name}`] = subject;
  body[`mailer_templates_${name}_content`] = await readFile(`supabase/email-templates/${file}.html`, "utf8");
}

const res = await fetch(`https://api.supabase.com/v1/projects/${ref}/config/auth`, {
  method: "PATCH",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify(body),
});
if (!res.ok) {
  console.error(`Supabase refused the update (${res.status}): ${await res.text()}`);
  process.exit(1);
}
console.log(`Updated ${Object.keys(templates).length} email templates on project ${ref}.`);
