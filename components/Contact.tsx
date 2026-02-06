"use client";

import type { Lang } from "@/lib/i18n";
import { useState } from "react";

export default function Contact({ lang, t }: { lang: Lang; t: any }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">{t["contact.title"]}</h2>
        <div className="h-px flex-1 bg-white/10 hidden md:block" />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <p className="text-gray-200 leading-relaxed">{t["contact.body"]}</p>
          <p className="mt-4 text-sm text-gray-300">
            {lang === "ar" ? "أرسل طلبك وسنتواصل معك عبر البريد الإلكتروني." : "Send your request and we will respond by email."}
          </p>
        </div>

        <form className="card" onSubmit={onSubmit}>
          <div className="grid gap-4">
            <input className="rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
              style={{ borderColor: "rgba(234,242,246,0.14)" }}
              placeholder={t["contact.form.name"]} required />
            <input className="rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
              style={{ borderColor: "rgba(234,242,246,0.14)" }}
              placeholder={t["contact.form.email"]} type="email" required />
            <input className="rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
              style={{ borderColor: "rgba(234,242,246,0.14)" }}
              placeholder={t["contact.form.org"]} />
            <textarea className="min-h-[120px] rounded-xl border bg-transparent px-4 py-3 text-sm outline-none"
              style={{ borderColor: "rgba(234,242,246,0.14)" }}
              placeholder={t["contact.form.message"]} required />
            <button className="btn-primary" type="submit">
              {status === "sent" ? (lang === "ar" ? "تم الإرسال" : "Sent") : t["contact.form.submit"]}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
