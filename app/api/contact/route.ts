// Contact form: forwards the message to Léa's inbox through Resend (https://resend.com).
// Needs RESEND_API_KEY and CONTACT_TO_EMAIL; CONTACT_FROM_EMAIL is optional until a domain is verified.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (value: unknown, max: number) =>
  typeof value === "string" && value.trim() && value.length <= max ? value.trim() : null;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid-body" }, { status: 400 });
  }

  // Honeypot filled: pretend it worked so the bot moves on
  if (body.company) return Response.json({ ok: true });

  const name = field(body.name, 120);
  const email = field(body.email, 200);
  const message = field(body.message, 5000);
  if (!name || !email || !EMAIL.test(email) || !message) {
    return Response.json({ error: "invalid-fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return Response.json({ error: "not-configured" }, { status: 503 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio: message from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });
  if (!res.ok) return Response.json({ error: "send-failed" }, { status: 502 });

  return Response.json({ ok: true });
}
