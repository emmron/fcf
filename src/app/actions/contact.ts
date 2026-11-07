"use server";

import { services } from "@/content/services";
import { site } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  /** Echo back what the visitor typed so a failed submit doesn't wipe the form. */
  values?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s-]{8,20}$/;
const MIN_FILL_MS = 2500;

const clip = (v: FormDataEntryValue | null, max: number) => String(v ?? "").trim().slice(0, max);

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: clip(formData.get("name"), 100),
    email: clip(formData.get("email"), 200),
    phone: clip(formData.get("phone"), 30),
    service: clip(formData.get("service"), 80),
    preferredTime: clip(formData.get("preferredTime"), 120),
    message: clip(formData.get("message"), 3000),
  };

  // Spam traps: a hidden field humans never fill in, and a minimum time on the page.
  const honeypot = clip(formData.get("company"), 200);
  const startedAt = Number(formData.get("startedAt") ?? 0);
  if (honeypot || (startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS)) {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (values.name.length < 2) fieldErrors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(values.email)) fieldErrors.email = "Please enter a valid email address, like name@example.com.";
  if (values.phone && !PHONE_RE.test(values.phone)) fieldErrors.phone = "Please enter a valid phone number, or leave it blank.";
  if (values.message.length > 0 && values.message.length < 5) fieldErrors.message = "Please add a little more detail.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const serviceName = services.find((s) => s.slug === values.service)?.name ?? (values.service || "Not sure yet");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "FC Fitness website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not set, so the enquiry was not emailed.", { serviceName });
    return {
      status: "error",
      message: `Online enquiries aren't connected yet. Please call or text ${site.phone.display}, or email ${site.email}.`,
      values,
    };
  }

  const lines = [
    ["Name", values.name],
    ["Email", values.email],
    ["Phone", values.phone || "Not given"],
    ["Interested in", serviceName],
    ["Preferred times", values.preferredTime || "Not given"],
    ["Message", values.message || "(no message)"],
  ] as const;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `New enquiry: ${serviceName} (${values.name})`,
        text: lines.map(([k, v]) => `${k}: ${v}`).join("\n"),
        html: `<h2>New website enquiry</h2><table cellpadding="6">${lines
          .map(([k, v]) => `<tr><th align="left" valign="top">${k}</th><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
          .join("")}</table>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[contact] Failed to send enquiry", err);
    return {
      status: "error",
      message: `Sorry, something went wrong sending your message. Please call or text ${site.phone.display}, or email ${site.email}.`,
      values,
    };
  }

  return {
    status: "success",
    message: `Thanks ${values.name.split(" ")[0]}! Fion will get back to you within one business day.`,
  };
}
