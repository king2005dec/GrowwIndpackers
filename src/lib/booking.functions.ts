import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  from: z.string().min(2).max(60),
  to: z.string().min(2).max(60),
  size: z.string().min(2).max(40),
  date: z.string().min(4).max(20),
  message: z.string().max(500).optional(),
});

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const sendBookingEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

    const rows = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Moving from", data.from],
      ["Moving to", data.to],
      ["House size", data.size],
      ["Move date", data.date],
      ["Notes", data.message || "—"],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;font-weight:600">${esc(k!)}</td><td style="padding:6px 12px">${esc(v!)}</td></tr>`,
      )
      .join("");

    const html = `<div style="font-family:Arial,sans-serif">
      <h2>New booking request — Groww India Packers and Movers</h2>
      <table style="border-collapse:collapse">${rows}</table>
      <p style="color:#666">Help Ever Hurt Never</p>
    </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Groww India Bookings <onboarding@resend.dev>",
        to: ["growwindpackes7667@gmail.com"],
        reply_to: data.email,
        subject: `New move booking — ${data.name} (${data.from} → ${data.to})`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend request failed [${res.status}]: ${body}`);
      throw new Error(`Email send failed [${res.status}]: ${body}`);
    }

    return { ok: true as const };
  });
