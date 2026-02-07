"use client";

import type { Lang } from "@/lib/i18n";
import { useState } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

const CONTACT_EMAIL = "Info@certistech.com";

export default function Contact({
  lang,
  t,
}: {
  lang: Lang;
  t: Record<string, unknown>;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const org = (form.elements.namedItem("org") as HTMLInputElement)?.value ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ?? "";
    const subject = encodeURIComponent(`Contact from ${name}${org ? ` (${org})` : ""}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nEmail: ${email}${org ? `\nOrganization: ${org}` : ""}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <Section id="contact" title={t["contact.title"] as string}>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <p className="text-body text-text leading-relaxed">
            {t["contact.body"] as string}
          </p>
          <p className="mt-4 text-body-sm text-text-muted">
            {lang === "ar"
              ? "أرسل طلبك وسنتواصل معك عبر البريد الإلكتروني."
              : "Send your request and we will respond by email."}
          </p>
          <div className="mt-6 pt-6 border-t border-[rgba(234,242,246,0.12)] space-y-3 text-body-sm">
            <p className="text-text-muted">
              {lang === "ar" ? "العنوان:" : "Address:"}
            </p>
            <p className="text-text">
              {lang === "ar"
                ? (t["contact.address.ar"] as string)
                : (t["contact.address.en"] as string)}
            </p>
            <p className="text-text-muted">
              {lang === "ar" ? "الهاتف / واتساب:" : "Phone / WhatsApp:"}
            </p>
            <p className="text-text">
              <a href="https://wa.me/218910429084" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                {t["contact.phone"] as string}
              </a>
            </p>
            <p className="text-text-muted">
              {lang === "ar" ? "البريد الإلكتروني:" : "Email:"}
            </p>
            <p className="text-text">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">
                {t["contact.email"] as string}
              </a>
            </p>
          </div>
        </Card>

        <Card>
          <form onSubmit={onSubmit} className="grid gap-4">
            <Input
              name="name"
              placeholder={t["contact.form.name"] as string}
              required
            />
            <Input
              name="email"
              placeholder={t["contact.form.email"] as string}
              type="email"
              required
            />
            <Input
              name="org"
              placeholder={t["contact.form.org"] as string}
            />
            <Textarea
              name="message"
              placeholder={t["contact.form.message"] as string}
              required
              className="min-h-[180px]"
            />
            <Button type="submit" variant="primary" className="min-h-[48px] w-full sm:w-auto">
              {status === "sent"
                ? lang === "ar"
                  ? "تم الإرسال"
                  : "Sent"
                : (t["contact.form.submit"] as string)}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
