"use client";

import type { Lang } from "@/lib/i18n";
import { useState } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export default function Contact({
  lang,
  t,
}: {
  lang: Lang;
  t: Record<string, unknown>;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
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
        </Card>

        <Card>
          <form onSubmit={onSubmit} className="grid gap-4">
            <Input
              placeholder={t["contact.form.name"] as string}
              required
            />
            <Input
              placeholder={t["contact.form.email"] as string}
              type="email"
              required
            />
            <Input
              placeholder={t["contact.form.org"] as string}
            />
            <Textarea
              placeholder={t["contact.form.message"] as string}
              required
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
