"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Status = "idle" | "sending" | "sent" | "missing" | "failed";

export default function ContactForm({ dict }: { dict: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name?.trim() || !/\S+@\S+\.\S+/.test(data.email ?? "") || !data.message?.trim()) {
      setStatus("missing");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const message = status === "sent" || status === "missing" || status === "failed" ? dict[status] : "";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-name">{dict.name}</label>
        <input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
      </div>
      <div className="field">
        <label htmlFor="contact-email">{dict.email}</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={200} />
      </div>
      <div className="field full">
        <label htmlFor="contact-message">{dict.message}</label>
        <textarea id="contact-message" name="message" required maxLength={5000} />
      </div>
      {/* Left empty by people, filled by spam bots */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-send">
        <button type="submit" className="pill" disabled={status === "sending"}>
          {status === "sending" ? dict.sending : dict.send}
        </button>
        <p className="form-msg" role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}
